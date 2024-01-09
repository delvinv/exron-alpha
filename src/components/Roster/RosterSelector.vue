<!-- https://codesandbox.io/s/4kh84v?file=/src/App.vue:0-1019 -->
<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
        </div>
        <DataTable 
        v-model:selection="selectedRoster" size="small"
        :value="rosterStore.rosters" selectionMode="single"
        :metaKeySelection=false
        @row-select="onRowSelect" 
        dataKey="rosterId" tableStyle="min-width: 10rem">
            <Column field="rosterId" header="Id"></Column>
            <Column field="date" header="Date"></Column>
        </DataTable>
    </div>
    <Toast />
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRosterStore} from '@/stores/roster'
import { useRosterSelectedStore} from '@/stores/rosterSelected'

const rosterSelectedStore = useRosterSelectedStore();

const toast = useToast();
const rosterStore = useRosterStore();
const selectedRoster = ref();

const onRowSelect = (event) => {
    let { data } = event;
    console.log((data.rosterId));
    rosterSelectedStore.setRosterSelected(data.rosterId);
    toast.add({severity:'success', summary: 'Successful', detail: 'Selected roster', life: 3000});
};
</script>
