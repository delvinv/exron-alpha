import { Model } from 'https://cdn.jsdelivr.net/npm/minizinc@edge/dist/minizinc.mjs'

import { useRoleStore } from '@/stores/role'
import { useSettingsStore } from '@/stores/settings'
import { useVolunteerStore } from '@/stores/volunteer'
import { useCapabilityStore } from '@/stores/capability'
import MznModel from '@/assets/volunteer_scheduling.mzn?raw'

const SOLVER = 'highs'

// Generate a (new) roster given the current data in the stores. If no roster
// can be created (because at least one of the rules must be violated), then
// `null` is returned.
//
// An optional timelimit in milliseconds can be provided after which the the
// solver is stopped.
export async function generateRoster(timeLimit = null) {
  // Initialize the model instance
  const model = new Model()
  model.addFile('volunteer_scheduling.mzn', MznModel)
  model.interface({
    options: {
      solver: SOLVER
    }
  })
  // Load data from stores
  const roleStore = useRoleStore()
  const settings = useSettingsStore()
  const volunteerStore = useVolunteerStore()
  const capabilityStore = useCapabilityStore()

  let capable = capabilityStore.capabilities.map((cap) => {
    // const role = cap.roleId
    return { set: cap.trainedVols.map((v) => `v${v.volunteerId}`) }
  })
  let unavailable = volunteerStore.volunteers.map((vol) => {
    return { set: vol.unavailable.map((occ) => `o${occ}`) }
  })
  let preferred = volunteerStore.volunteers.map((vol) => {
    let pref = Array(roleStore.roles.length).fill({ set: [] })
    for (const cap of vol.capabilities) {
      pref[cap.roleId - 1] = { set: cap.preferences.map((occ) => `o${occ}`) }
    }
    return pref
  })

  const data = {
    Occasion: Array(settings.occasions)
      .fill()
      .map((_, i) => `o${i + 1}`),
    Volunteer: volunteerStore.volunteers.map((v) => `v${v.id}`),
    Role: roleStore.roles.map((r) => `r${r.id}`),
    restrictions: roleStore.roles.map((r) => {
      let rules = []
      if (r.isNoOtherTasks) {
        rules.push(Restriction.NoOtherRole)
      }
      if (r.isNoConsecutiveWeeks) {
        rules.push(Restriction.NoConsecutiveWeeks)
      }
      let setObj = { set: rules }
      return setObj
    }),
    capable: capable,
    unavailable: unavailable,
    preferred: preferred,
    exclusive_roles: roleStore.roles.flatMap((r) =>
      r.roleClashes.filter((i) => i > r.id).map((i) => [{ e: `r${r.id}` }, { e: `r${i}` }])
    )
  }
  model.addJson(data)
  // console.log(data)
  // Solve and process
  let roster = {}
  let options = {
    solver: SOLVER,
    'output-objective': true
  }
  if (timeLimit !== null) {
    options['time-limit'] = timeLimit
  }
  // console.log(options);
  try {
    const result = await model.solve({
      options: options
    })
    // console.log(result.status)
    // console.log(result.solution)
    roster = {
      rosterId: Math.floor(Date.now() / 1000),
      date: new Date().toISOString().substring(0, 10),
      status: result.status
    }
    if (result.solution !== null) {
      const assignment = result.solution.output.json.assignment
      roster['roster'] = roleStore.roles.map((r, i) => ({
        roleId: r.id,
        occasions: assignment.map((li) => Number(li[i].e.substring(1)))
      }))
      roster['num_roles_distribution'] = result.solution.output.json.num_roles
      roster['preferences_distribution'] = result.solution.output.json.fulfilled_preferences
    }
  } catch (error) {
    console.error(error)
  }
  return roster
}

// Possible retrictions that can be placed on different roles.
//
// This map is meant to emulate a enumerated type, so the idea is to use
// `Restriction.NoOtherRole` as a value.
export const Restriction = {
  NoOtherRole: 'NoOtherRole',
  NoConsecutiveWeeks: 'NoConsecutiveWeeks'
}
