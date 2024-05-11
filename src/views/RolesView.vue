<script setup>
import CapabilitiesTable from '@/components/CababilitiesTable.vue'
import { useSettingsStore } from '@/stores/settings'
import { useRoleStore } from '@/stores/role'
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'

const settings = useSettingsStore()
const roleStore = useRoleStore()
let roles = roleStore.roles

const roleDialog = ref(false)
const deleteRoleDialog = ref(false)
const deleteRolesDialog = ref(false)
const role = ref({})
const selectedRoles = ref()
const submitted = ref(false)

const toast = useToast()

const hideDialog = () => {
  roleDialog.value = false
  submitted.value = false
}

const confirmDeleteRole = (rol) => {
  role.value = rol
  deleteRoleDialog.value = true
}
const deleteRole = () => {
  roleStore.roles = roles.filter((val) => val.id !== role.value.id)
  deleteRoleDialog.value = false
  role.value = {}
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Role Deleted', life: 3000 })
}

const confirmDeleteSelected = () => {
  deleteRolesDialog.value = true
}
const deleteSelectedRoles = () => {
  roleStore.roles = roles.filter((val) => !selectedRoles.value.includes(val))
  deleteRolesDialog.value = false
  selectedRoles.value = null
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Roles Deleted', life: 3000 })
}

const onCellEditComplete = (event) => {
  let { data, newValue, field } = event

  switch (field) {
    case 'id':
      event.preventDefault()
      break
    case 'numbers':
      data[field] = newValue
      break
    case 'isNoOtherTasks':
      data[field] = newValue
      break
    case 'isNoConsecutiveWeeks':
      data[field] = newValue
      break
    case 'roleClashes':
      data[field] = newValue
      break
    default:
      data[field] = newValue
      // if (newValue.trim().length > 0) data[field] = newValue;
      // else event.preventDefault();
      break
  }
}
</script>

<template>
  <h2 class="mt-5">Roles available at {{ settings.orgName }}</h2>
  <!-- editMode="cell" @cell-edit-complete="onCellEditComplete" -->
  <Toolbar class="mb-4">
    <template #start>
      <!-- <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" /> -->
      <Button
        label="Delete"
        icon="pi pi-trash"
        severity="danger"
        @click="confirmDeleteSelected"
        :disabled="!selectedRoles || !selectedRoles.length"
      />
    </template>

    <template #end>
      <!-- <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" /> -->
      <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)" />
    </template>
  </Toolbar>
  <DataTable
    stripedRows
    :value="roleStore.roles"
    tableStyle="min-width: 50rem"
    class="p-datatable-sm"
    size="small"
    editMode="cell"
    @cell-edit-complete="onCellEditComplete"
    v-model:selection="selectedRoles"
    :pt="{
      table: { style: 'min-width: 50rem' },
      column: {
        bodycell: ({ state }) => ({
          class: [{ 'pt-0 pb-0': state['d_editing'] }]
        })
      }
    }"
  >
    <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
    <Column field="id" header="id" sortable></Column>
    <Column field="name" header="Name" sortable>
      <template #body="{ data, field }">
        {{ data[field] }}
      </template>
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" autofocus />
      </template>
    </Column>
    <Column field="numbers" header="Numbers" sortable>
      <template #editor="{ data, field }">
        <InputNumber v-model="data[field]" inputId="minmax" :min="0" :max="10" autofocus />
      </template>
    </Column>
    <Column field="isNoOtherTasks" header="Other Tasks?" sortable>
      <template #body="{ data, field }">
        <Checkbox v-model="data[field]" :binary="true" />
      </template>
      <template #editor="{ data, field }">
        <Checkbox v-model="data[field]" :binary="true" />
      </template>
    </Column>
    <Column field="isNoConsecutiveWeeks" header="Consecutive?" sortable>
      <template #body="{ data, field }">
        <Checkbox v-model="data[field]" :binary="true" />
      </template>
      <template #editor="{ data, field }">
        <Checkbox v-model="data[field]" :binary="true" />
      </template>
    </Column>
    <Column field="roleClashes" header="Role Clashes" sortable>
      <template #body="{ data, field }">
        {{ data[field].toString() }}
      </template>
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" autofocus />
      </template>
    </Column>
    <!-- <Column :exportable="false" style="min-width:8rem">
      <template #body="slotProps">
          <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editRole(slotProps.data)" />
          <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteRole(slotProps.data)" />
      </template>
    </Column> -->
    <template #footer>
      <div class="table-footer">
        In total there are {{ roleStore.roles ? roleStore.roles.length : 0 }} roles.
      </div></template
    >
  </DataTable>

  <Dialog
    v-model:visible="deleteRoleDialog"
    :style="{ width: '450px' }"
    header="Confirm"
    :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span v-if="role"
        >Are you sure you want to delete <b>{{ role.name }}</b
        >?</span
      >
    </div>
    <template #footer>
      <Button label="No" icon="pi pi-times" text @click="deleteRoleDialog = false" />
      <Button label="Yes" icon="pi pi-check" text @click="deleteRole" />
    </template>
  </Dialog>

  <Dialog
    v-model:visible="deleteRolesDialog"
    :style="{ width: '450px' }"
    header="Confirm"
    :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span v-if="role">Are you sure you want to delete the selected roles?</span>
    </div>
    <template #footer>
      <Button label="No" icon="pi pi-times" text @click="deleteRolesDialog = false" />
      <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedRoles" />
    </template>
  </Dialog>
  <Toast />
</template>

<style scoped>
.volunteers {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  flex-wrap: wrap;
  margin: 0.5rem;
}

.table-footer {
  font-weight: bold;
}
</style>
