<script setup>
import VolunteerCard from '@/components/VolunteerCard.vue'
import { useVolunteerStore } from '@/stores/volunteer'
import { useSettingsStore } from '@/stores/settings'

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
  class="p-datatable-sm" 
  editMode="cell" @cell-edit-complete="onCellEditComplete"
  :pt="{
                table: { style: 'min-width: 50rem' },
                column: {
                    bodycell: ({ state }) => ({
                        class: [{ 'pt-0 pb-0': state['d_editing'] }]
                    })
                }
            }"
  >
    <Column field="id" header="id" sortable></Column>
    <Column field="forename" header="Forename" sortable>
      <template #body="{ data, field }">
        {{ data[field] }}
      </template>
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" autofocus />
      </template>
    </Column>
    <Column field="surname" header="Surname" sortable>
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
</DataTable>
</template>

<style scoped>
.volunteers {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  flex-wrap: wrap;
  margin: 0.5rem;
}
</style>