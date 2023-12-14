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

</script>

<template>
  <h1>Roles available at {{ settings.orgName }}</h1>
  <!-- editMode="cell" @cell-edit-complete="onCellEditComplete" -->
  <DataTable stripedRows :value="roles.roles" tableStyle="min-width: 50rem" :class="`p-datatable-small`">
    <Column field="id" header="id" sortable></Column>
    <Column field="name" header="Name" sortable></Column>
    <Column field="numbers" header="Numbers" sortable></Column>
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