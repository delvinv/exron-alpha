<template>
    <div class="card flex justify-content-center">
        <Button label="Volunteer Availability Editor" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="inline-flex align-items-center justify-content-center gap-2">
                    <span class="font-bold white-space-nowrap">Volunteer Availability Editor</span>
                </div>
            </template>
            <!-- <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> -->
            <div class="dialog-container">
                <div class="left-side">
                    <Dropdown v-model="selectedVolunteer" editable :options="volunteerStore.volunteers" @change="onDropdownChange"
                    optionLabel="forename" placeholder="Select a Volunteer" class="w-full md:w-14rem" />
                    <Button label="Add Dates" severity="info" text raised />
                </div>
                <div class="right-side">
                    <AvailabilityCard :empty=volunteerUnavailable></AvailabilityCard>
                </div>
            </div>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
    <Toast/>
</template>

<script setup>
import { ref } from "vue";
import { useVolunteerStore } from '@/stores/volunteer'
import AvailabilityCard from '@/components/VolunteerEditor/AvailabilityCard.vue';
import { useToast } from 'primevue/usetoast';

const visible = ref(false);
const toast = useToast();

const selectedVolunteer = ref();
const volunteerStore = useVolunteerStore();

let volunteerUnavailable = true;

const onDropdownChange = (event) => {
    let { data, newValue, value } = event;
    console.log((value));
    toast.add({severity:'success', summary: 'Successful', detail: 'Selected: '+value.forename, life: 2000});
    if (value.unavailable.length == 0) {
        volunteerUnavailable = true;
    } else {
        volunteerUnavailable = false;
    }

};
</script>

<style scoped>

.dialog-container {
    display: flex;
    flex-direction: row;
}
.left-side {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-right: 50px;
}

.right-side {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 50px;
}
</style>