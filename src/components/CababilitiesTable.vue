<script setup>
import { ref } from 'vue'
import { useCapabilityStore } from '@/stores/capability'
import { useRoleStore } from '@/stores/role'
import { useVolunteerStore } from '@/stores/volunteer'
import { useToast } from 'primevue/usetoast'
import { storeToRefs } from 'pinia'

const capabilitiesStore = useCapabilityStore()
const roleStore = useRoleStore()
const { getRoleById } = storeToRefs(roleStore)
const volunteerStore = useVolunteerStore()
const { getVolunteerById } = storeToRefs(volunteerStore)

const expandedRowGroups = ref()
const toast = useToast()
const onRowGroupExpand = (event) => {
  toast.add({
    severity: 'info',
    summary: 'Row Group Expanded',
    detail: 'Value: ' + event.data,
    life: 3000
  })
}
const onRowGroupCollapse = (event) => {
  toast.add({
    severity: 'success',
    summary: 'Row Group Collapsed',
    detail: 'Value: ' + event.data,
    life: 3000
  })
}
</script>

<template>
  <h2>Training and Volunteer Capabilities</h2>
  <!-- <pre> {{ capabilitiesStore.capabilities[1][1].preference.toString() }}</pre> -->

  <!-- @rowgroup-expand="onRowGroupExpand"
    @rowgroup-collapse="onRowGroupCollapse" 
  expandableRowGroups-->
  <DataTable
    v-model:expandedRowGroups="expandedRowGroups"
    :value="capabilitiesStore.capabilities"
    tableStyle="min-width: 50rem"
    rowGroupMode="subheader"
    groupRowsBy="roleId"
    sortMode="single"
    sortField="roleId"
    :sortOrder="1"
  >
    <template #groupheader="slotProps">
      <span class="vertical-align-middle ml-2 font-bold line-height-3">{{
        getRoleById(slotProps.data.roleId).name
      }}</span>
    </template>
    <!-- <Column field="trainedVols" header="RoleId" style="width: 20%">
        <template #body="{ data, field }">
            {{ data[field] }}
        </template>
    </Column> -->
    <Column field="trainedVols" header="Volunteer Id" style="width: 20%">
      <template #body="slotProps">
        <span v-for="vol in slotProps.data.trainedVols"
          >{{ getVolunteerById(vol.volunteerId).forename }} ({{ vol.preferences.toString() }})
        </span>
      </template>
    </Column>
    <!-- <Column field="trainedVols" header="Preferences" style="width: 20%">
      <template #body="slotProps">
        <span v-for="vol in slotProps.data.trainedVols"
          >{{ vol.preferences.toString() }}<br
        /></span>
      </template>
    </Column> -->
  </DataTable>
  <Toast />
</template>
