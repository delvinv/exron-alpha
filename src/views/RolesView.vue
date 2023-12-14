<script setup>
import RolesCard from '@/components/RolesCard.vue'
import { useSettingsStore } from '@/stores/settings'
import { useRoleStore} from '@/stores/role'
// import { storeToRefs } from 'pinia'

const settings = useSettingsStore();
const roles = useRoleStore();

// export default {
//   methods: {
//     onCellEditComplete(event) {
//       console.log("writing complete");
//     }
//   }
// }

const onCellEditComplete = (event) => {
    let { data, newValue, field } = event;

    switch (field) {
        case 'id':
            event.preventDefault();
            break;
        case 'numbers':
            data[field] = newValue;
            break;

        default:
            if (newValue.trim().length > 0) data[field] = newValue;
            else event.preventDefault();
            break;
    }
};

</script>

<template>
  <h1>Roles available at {{ settings.orgName }}</h1>
  <!-- editMode="cell" @cell-edit-complete="onCellEditComplete" -->
  <DataTable stripedRows :value="roles.roles" tableStyle="min-width: 50rem" :class="`p-datatable-small`" editMode="cell" @cell-edit-complete="onCellEditComplete"
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
    <Column field="name" header="Name" sortable>
      <template #body="{ data, field }">
        {{ data[field] }}
      </template>
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" autofocus />
      </template>
    </Column>
    <Column field="numbers" header="Numbers" sortable>
      <template #body="{ data, field }">
        {{ data[field] }}
      </template>
      <template #editor="{ data, field }">
        <InputNumber v-model="data[field]" inputId="minmax" :min="0" :max="10" autofocus />
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