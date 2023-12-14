<script setup>
import { useCapabilityStore } from '@/stores/capability'
import { useRoleStore} from '@/stores/role'
import { useVolunteerStore } from '@/stores/volunteer'

const capabilitiesStore = useCapabilityStore();
const roleStore = useRoleStore();
const volunteerStore = useVolunteerStore();



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
    <pre> {{ capabilitiesStore.capabilities }}</pre>
</template>
