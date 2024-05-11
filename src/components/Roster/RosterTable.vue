<script setup>
import { useRoleStore } from '@/stores/role'
import { useVolunteerStore } from '@/stores/volunteer'
import { useRosterStore } from '@/stores/roster'
import { useRosterSelectedStore } from '@/stores/rosterSelected'

import { useToast } from 'primevue/usetoast'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'

const roleStore = useRoleStore()
const { getRoleById } = storeToRefs(roleStore)
const volunteerStore = useVolunteerStore()
const { getVolunteerById } = storeToRefs(volunteerStore)

const rosterStore = useRosterStore()
const rosterSelectedStore = useRosterSelectedStore()

const settings = useSettingsStore()

const occasions = Array(settings.occasions) // Creates an array with length based on the value of settings.occasions
  .fill() // Fills the array with undefined values (default fill value is undefined)
  .map((_, i) => ({
    // Maps each element of the array to a new object using the map function
    idx: i, // Assigns the index (i) as the idx property of the object
    field: 'instance' + (i + 1), // Generates a field property with a string value ('instance' + (i + 1))
    header: 'Instance ' + (i + 1) // Generates a header property with a string value ('Instance ' + (i + 1))
  }))

  const rowClass = (data) => {
    return [{ 'bg-primary': data.category === 'Fitness' }];
};
const rowStyle = (data) => {
    if (data.quantity === 0) {
        return { fontWeight: 'bold', fontStyle: 'italic' };
    }
};
const stockClass = (data) => {
    return [
        'border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm',
        {
            'bg-red-100 text-red-900': data.quantity === 0,
            'bg-blue-100 text-blue-900': data.quantity > 0 && data.quantity < 10,
            'bg-teal-100 text-teal-900': data.quantity > 10
        }
    ];
};
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
        <template #body="slotProps">
          <span>{{ getVolunteerById(slotProps.data.occasions[index]).forename }}<br /></span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style>
.roleName {
  font-weight: bold;
}
</style>
