<script setup>
    import { ref, onMounted } from 'vue';
    import { OptimizedRoster } from '@/services/OptimizedRoster';
    import { useRoleStore} from '@/stores/role'
    import { useVolunteerStore } from '@/stores/volunteer'
    import { useToast } from 'primevue/usetoast';
    import { storeToRefs } from 'pinia';

    const roleStore = useRoleStore();
    const { getRoleById } = storeToRefs(roleStore);
    const volunteerStore = useVolunteerStore();
    const { getVolunteerById } = storeToRefs(volunteerStore);

    const occasions = [
    { field: 'instance1', header: 'instance1' },
    { field: 'instance2', header: 'instance2' },
    { field: 'instance3', header: 'instance3' },
    { field: 'instance4', header: 'instance4' }
];

    onMounted(() => {
        console.log("inside RosterTable onMounted");
        OptimizedRoster.getRosterLarge().then((data) => {
            rosterEntries.value = data;
            console.log(data)
        });
    });

    const rosterEntries = ref();
</script>

<!-- Need a programmatic way of displaying data from roster here -->
<template>
    <div class="card">
        <DataTable :value="rosterEntries" scrollable scrollHeight="400px" class="mt-4">
            <Column field="roleId" header="roleId" style="min-width: 200px" frozen class="font-bold">
                <template #body="slotProps">
                    <span>{{ getRoleById(slotProps.data.roleId).name }}<br/></span>
                </template>
            </Column>
            
            <Column v-for="occasion of occasions" :key="occasion.field" :field="occasion.field" :header="occasion.header">
                <template #body="slotProps">
                    <span>{{ getVolunteerById(slotProps.data.occasions[occasion.field]).forename }}<br/></span>
                </template>
            </Column>

            <!-- <Column field="instance1" header="instance1" style="min-width: 100px"></Column>
            <Column field="instance2" header="instance2" style="min-width: 200px"></Column>
            <Column field="instance3" header="instance3" style="min-width: 200px"></Column>
            <Column field="instance4" header="instance4" style="min-width: 200px"></Column> -->
        </DataTable>
    </div>
</template>