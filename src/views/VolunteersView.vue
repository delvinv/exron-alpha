<script setup>
// import VolunteerCard from '@/components/VolunteerCard.vue'
import { useVolunteerStore } from '@/stores/volunteer'
import { useSettingsStore } from '@/stores/settings'
import AvailabilityDialog from '@/components/AvailabilityDialog.vue';

const volunteers = useVolunteerStore();
const settings = useSettingsStore();

const onCellEditComplete = (event) => {
    let { data, newValue, field } = event;

    switch (field) {
        case 'id':
            event.preventDefault();
            break;
        default:
            if (newValue.trim().length > 0) data[field] = newValue;
            else event.preventDefault();
            break;
    }
};
</script>

<template>
  <DataTable stripedRows :value="volunteers.volunteers" tableStyle="min-width: 50rem" 
  class="p-datatable-sm" size="small"
  editMode="cell" @cell-edit-complete="onCellEditComplete"
  paginator :rows="10" :rowsPerPageOptions="[10, 20, 50]"
  :pt="{
                table: { style: 'min-width: 50rem' },
                column: {
                    bodycell: ({ state }) => ({
                        class: [{ 'pt-0 pb-0': state['d_editing'] }]
                    })
                }
            }"
  >
    <Column field="id" header="id" style="width: 2rem" sortable></Column>
    <Column field="forename" header="Forename" style="width: 5rem" sortable>
      <template #body="{ data, field }">
        {{ data[field] }}
      </template>
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" autofocus />
      </template>
    </Column>
    <Column field="surname" header="Surname" style="width: 5rem" sortable>
      <template #body="{ data, field }">
        {{ data[field] }}
      </template>
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" autofocus />
      </template>
    </Column>
    <Column field="unavailable" header="Not Available" sortable>
      <template #body="{ data, field }">
        {{ data[field] }}
      </template>
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" autofocus />
      </template>
    </Column>
    <template #footer> <div class="table-footer">In total there are {{ volunteers.volunteers ? volunteers.volunteers.length : 0 }} volunteers. </div></template>
</DataTable>
<AvailabilityDialog></AvailabilityDialog>
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