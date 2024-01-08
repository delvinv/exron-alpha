import { Model } from 'https://cdn.jsdelivr.net/npm/minizinc/dist/minizinc.mjs'

import { useRoleStore } from '@/stores/role'
import { useSettingsStore } from '@/stores/settings'
import { useVolunteerStore } from '@/stores/volunteer'
import MznModel from '@/assets/volunteer_scheduling.mzn?raw'

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
			solver: 'gecode'
		}
	})
	// Load data from stores
	const roleStore = useRoleStore();
	const settings = useSettingsStore();
	const volunteerStore = useVolunteerStore();

	const data = {
		occasions: settings.occasions,
		Volunteer: volunteerStore.volunteers.map((v) => `v${v.id}`),
		Role: roleStore.roles.map((r) => `r${r.id}`),
		restrictions: roleStore.roles.map((r) => {
			let rules = [];
			if (r.isNoOtherTasks) {
				rules.push(Restriction.NoOtherRole);
			}
			if (r.isNoConsecutiveWeeks) {
				rules.push(Restriction.NoConsecutiveWeeks);
			}
			let setObj = ({ set: rules });
			return setObj
		}),
		// TODO
		capability: volunteerStore.volunteers.map((_v) => roleStore.roles.map((_r) => settings.occasions)),
		exclusive_roles: roleStore.roles.flatMap((r) => r.roleClashes.filter((i) => i > r.id).map((i) => [{ e: `r${r.id}` }, { e: `r${i}` }])),
	}
	model.addJson(data)
	// console.log(data);
	// Solve and process
	let roster = null;
	let options = {
		solver: 'gecode',
	}
	if (timeLimit !== null) {
		options["time-limit"] = timeLimit
	}
	// console.log(options);
	try {
		const result = await model.solve({
			options: options,
		})
		// console.log(result.status);
		console.log(result.solution);
		if (result.solution !== null) {
			const assignment = result.solution.output.json.assignment
			roster = {
				// TODO: Probably should be last ID + 1
				rosterId: Math.floor(Date.now() / 1000),
				date: new Date().toISOString().substring(0, 10),
				roster: roleStore.roles.map((r, i) => ({
					roleId: r.id,
					occasions: assignment.map((li) => Number(li[i].e.substring(1)))
				}))
			}
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
