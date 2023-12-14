<script setup>
import { ref } from 'vue';
import { useCapabilityStore } from '@/stores/capability'
import { useRoleStore} from '@/stores/role'
import { useVolunteerStore } from '@/stores/volunteer'
import { useToast } from 'primevue/usetoast';

const capabilitiesStore = useCapabilityStore();
const roleStore = useRoleStore();
const volunteerStore = useVolunteerStore();

const expandedRowGroups = ref();
const toast = useToast();
const onRowGroupExpand = (event) => {
    toast.add({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000 });
};
const onRowGroupCollapse = (event) => {
    toast.add({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000 });
};


/* Matching roles against volunteers 
For each role(id): who (volunteer id) can do it, and which occasions [] they have a preference
const capabilities = {
    1: [
        {"id": 1, "preference": [2,4]}, 
        {"id": 4, "preference": [1]},
        {"id": 6, "preference": [2,4]}
    ],
    2: [
        {"id": 1, "preference": [2,4]}, 
        {"id": 4, "preference": [1,3]},
        {"id": 6, "preference": [2,4]}
    ],
};
*/

</script>

<template>
    <h1>Training and Volunteer Capabilities</h1>
    <!-- <pre> {{ capabilitiesStore.capabilities[1][1].preference.toString() }}</pre> -->

    <DataTable v-model:expandedRowGroups="expandedRowGroups" :value="capabilitiesStore.capabilities" tableStyle="min-width: 50rem"
                expandableRowGroups rowGroupMode="subheader" groupRowsBy="roleId" @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse"
                sortMode="single" sortField="roleId" :sortOrder="1">
    <template #groupheader="slotProps">
        <span class="vertical-align-middle ml-2 font-bold line-height-3">Role ID: {{ slotProps.data.roleId }}</span>
    </template>
    <!-- <Column field="trainedVols" header="RoleId" style="width: 20%">
        <template #body="{ data, field }">
            {{ data[field] }}
        </template>
    </Column> -->
    <Column field="trainedVols" header="Volunteer Id" style="width: 20%">
        <template #body="slotProps">
            <span v-for="vol in slotProps.data.trainedVols">{{vol.volunteerId}}<br/></span>
        </template>
    </Column>
    <Column field="trainedVols" header="Preferences" style="width: 20%">
        <template #body="slotProps">
            <span v-for="vol in slotProps.data.trainedVols">{{vol.preferences.toString()}}<br/></span>
        </template>
    </Column>
    </DataTable>
    <Toast />
</template>
