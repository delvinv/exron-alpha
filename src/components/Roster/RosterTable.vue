<script setup>
import { computed } from 'vue'
import { useRoleStore } from '@/stores/role'
import { useVolunteerStore } from '@/stores/volunteer'
import { useRosterStore } from '@/stores/roster'
import { useRosterSelectedStore } from '@/stores/rosterSelected'
import { useCapabilityStore } from '@/stores/capability'

import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'

const roleStore = useRoleStore()
const { getRoleById } = storeToRefs(roleStore)
const volunteerStore = useVolunteerStore()
const { getVolunteerById } = storeToRefs(volunteerStore)

const rosterStore = useRosterStore()
const rosterSelectedStore = useRosterSelectedStore()

const settings = useSettingsStore()
const capabilityStore = useCapabilityStore()

const occasions = Array(settings.occasions) // Creates an array with length based on the value of settings.occasions
  .fill() // Fills the array with undefined values (default fill value is undefined)
  .map((_, i) => ({
    // Maps each element of the array to a new object using the map function
    idx: i, // Assigns the index (i) as the idx property of the object
    field: 'instance' + (i + 1), // Generates a field property with a string value ('instance' + (i + 1))
    header: 'Instance ' + (i + 1) // Generates a header property with a string value ('Instance ' + (i + 1))
  }))

const rowClass = (data) => {
  return [{ 'bg-primary': data.category === 'Fitness' }]
}
const rowStyle = (data) => {
  if (data.quantity === 0) {
    return { fontWeight: 'bold', fontStyle: 'italic' }
  }
}

const getConditionalFormattingClasses = (data, index) => {
  const currentVolunteerId = data.occasions[index]

  /**
   * 1. Consecutive weeks check
   * If the previous or next volunteerId is the same as the current volunteerId, return 'consecutive-volunteer'
   */
  const previousVolunteerId = index > 0 ? data.occasions[index - 1] : null
  const nextVolunteerId = index > 0 ? data.occasions[index + 1] : null

  let classesList =
    previousVolunteerId === currentVolunteerId || currentVolunteerId === nextVolunteerId
      ? 'consecutive-volunteer'
      : 'non-consecutive-volunteer'

  /**
   * 2. Check if the volunteer is unavailable
   * If the current volunteerId is in the unavailable array of the volunteer, return 'unavailable-volunteer'
   */
  const currentVolunteerUnavailable = computed(() =>
    volunteerStore.getCurrentVolunteerUnavailable(currentVolunteerId)
  )
  const availabilityClass = currentVolunteerUnavailable.value.includes(index + 1)
    ? 'unavailable-volunteer'
    : 'available-volunteer'
  classesList += ' ' + availabilityClass

  /**
   * 3. Check if this matches against volunteer preferences
   * If the occasion is not in the preferences list, return 'non-preferred-occasion'
   */
  // const currentVolunteerPreferences = ref([])
  const myRoleId = data.roleId
  // console.log('myRoleId: ', myRoleId)

  // const currentVolunteerCapabilities = computed(() =>
  //   volunteerStore.getCurrentVolunteerCapabilities(currentVolunteerId)
  // )

  const trainedVolunteers = computed(() => capabilityStore.getCapabilityByRoleId(myRoleId))

  console.log(trainedVolunteers.value)

  // Search for myRoleId inside currentVolunteerCapabilities where currentVolunteerCapabilities.roleId == myRoleId
  // if myRoleId doesnt exist, then append classesList with 'untrained-volunteer'

  const skiledVolunteer = trainedVolunteers.value.find(
    (tv) => tv.volunteerId === currentVolunteerId
  )
  if (skiledVolunteer) {
    classesList += ' trained-volunteer'
    if (skiledVolunteer.preferences.length) {
      const skillPreference = skiledVolunteer.preferences.includes(index + 1)
        ? 'preferred-occasion'
        : 'non-preferred-occasion'
      classesList += ' ' + skillPreference
    }
  } else {
    classesList += ' untrained-volunteer'
  }

  // WORKS ON OLD CODE..
  // if (currentVolunteerCapabilities.value.find((capability) => capability.roleId === myRoleId)) {
  //   classesList += ' trained-volunteer'
  // } else {
  //   classesList += ' untrained-volunteer'
  // }

  // const roleCapabilities = currentVolunteerCapabilities.value.filter(
  //   (capability) => capability.roleId === myRoleId && !capability.preferences.length
  // )

  // if (roleCapabilities) {
  //   console.log(
  //     currentVolunteerId + '(' + myRoleId + '): preferences => ',
  //     roleCapabilities.preferences
  //   )
  // }

  // const hasRole7Capability = currentVolunteerPreferences.value.some(
  //   (capability) => capability.roleId === myRoleId
  // )

  // if (hasRole7Capability) {
  //   console.log(currentVolunteerId + ' has a preference with roleId: ' + myRoleId)
  // }
  // const currentRolePref = currentVolunteerPreferences.value.find((pref) => pref.roleId === myRoleId)

  // If (index + 1) is not in the preferences list, return 'non-preferred-occasion'

  // if (currentRolePref.length > 0) {
  //   if (!currentRolePref.includes(index + 1)) {
  //     classesList += ' non-preferred-occasion'
  //   }
  // }

  /**
   * 4. Check how many roles this volunteer is rostered for this week
   * If the volunteer is rostered for more than 1 role, return 'multi-role-volunteer'
   */
  // TODO: Implement this

  return classesList
}
</script>

<!-- Need a programmatic way of displaying data from roster here -->
<template>
  <div class="card">
    <DataTable
      :value="
        rosterStore.rosters.find((x) => x.rosterId === rosterSelectedStore.rosterSelected).roster
      "
      :rowClass="rowClass"
      :rowStyle="rowStyle"
      size="small"
      scrollable
      scrollHeight="400px"
      class="mt-4"
    >
      <Column field="roleId" header="roleId" style="min-width: 100px" frozen class="font-bold">
        <template #body="slotProps">
          <span class="roleName">{{ getRoleById(slotProps.data.roleId).name }}<br /></span>
        </template>
      </Column>

      <Column
        v-for="(occasion, index) of occasions"
        :key="occasion.field"
        :field="occasion.field"
        :header="occasion.header"
      >
        <!-- Conditional formatting of each cell based on errors/warnings.. -->
        <template #body="slotProps">
          <span :class="getConditionalFormattingClasses(slotProps.data, index)"
            >{{ getVolunteerById(slotProps.data.occasions[index]).forename }}<br
          /></span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style>
.roleName {
  font-weight: bold;
}
.consecutive-volunteer {
  text-decoration: underline;
}
.unavailable-volunteer {
  color: red;
  text-decoration: line-through;
}
.non-preferred-occasion {
  background-color: gold;
  font-style: italic;
}
/* Red border box for untrained-volunteer */
.untrained-volunteer {
  border: 2px solid red;
  text-decoration: underline overline red;
  font-family: monospace;
  color: red;
}
</style>
