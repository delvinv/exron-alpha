<template>
    <div class="card flex justify-content-center">
        <Button label="Volunteer Availability Editor" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="inline-flex align-items-center justify-content-center gap-2">
                    <span class="font-bold white-space-nowrap">Volunteer Availability Editor</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Dropdown v-model="selectedVolunteer" editable :options="volunteerStore.volunteers.id" optionLabel="id" placeholder="Select a Volunteer" class="w-full md:w-14rem" />
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useVolunteerStore } from '@/stores/volunteer'

const visible = ref(false);

const selectedVolunteer = ref();
const volunteerStore = useVolunteerStore();
</script>
