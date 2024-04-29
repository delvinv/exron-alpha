<template>
  <div class="card flex justify-content-center">
    <Button
      label="Volunteer Availability Editor"
      icon="pi pi-external-link"
      @click="visible = true"
    />
    <Dialog
      modal
      header="Header"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      v-model:visible="visible"
    >
      <!-- Change this to -- v-model:visible="visible" -->
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
          <Dropdown
            v-model="selectedVolunteer"
            editable
            :options="volunteerStore.volunteers"
            @change="onDropdownChange"
            optionLabel="forename"
            placeholder="Select a Volunteer"
            class="w-full md:w-14rem"
          />
          <Button
            label="Add Dates"
            severity="info"
            v-show="!isSelectedVolunteerUndefined"
            text
            raised
            @click="isAddButtonClicked = true"
          />
          <Divider class="divider-custom" />
          <AvailabilityPicker :showForm="isAddButtonClicked" />
        </div>
        <div class="right-side">
          <div v-if="!hasAvalabilityInfo"><p>No availability information.</p></div>
          <div v-else>
            <AvailabilityPanel :availabilityList="availabilityList" class="AvailabilityPanel" />
          </div>
        </div>
      </div>
      <template #footer>
        <Button label="Ok" icon="pi pi-check" @click="visible = false" autofocus />
      </template>
    </Dialog>
  </div>
  <Toast />
</template>

<script setup>
import AvailabilityPanel from '@/components/VolunteerEditor/AvailabilityPanel.vue'
import AvailabilityPicker from '@/components/VolunteerEditor/AvailabilityPicker.vue'
import { useVolunteerStore } from '@/stores/volunteer'
import { useToast } from 'primevue/usetoast'
import { ref, computed } from 'vue'

const visible = ref(false)
const toast = useToast()

const selectedVolunteer = ref()
const volunteerStore = useVolunteerStore()

let hasAvalabilityInfo = false
let availabilityList = ref()
let isAddButtonClicked = ref(false)

const onDropdownChange = (event) => {
  isAddButtonClicked.value = false
  let { data, newValue, value } = event
  if (typeof value.unavailable !== 'undefined') {
    toast.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Selected: ' + value.forename,
      life: 2000
    })
    if (value.unavailable.length == 0) {
      availabilityList.value = []
      hasAvalabilityInfo = false
    } else {
      availabilityList.value = value.unavailable
      hasAvalabilityInfo = true
    }
  } else {
    hasAvalabilityInfo = false
    availabilityList.value = []
  }
}

const isSelectedVolunteerUndefined = computed(() => {
  return typeof selectedVolunteer.value === 'undefined' || selectedVolunteer.value === ''
})
</script>

<style scoped>
.dialog-container {
  display: flex;
  flex-direction: row;
}
.left-side {
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-right: 20px;
}

.right-side {
  display: flex;
  flex-direction: column;
  width: 55%;
  margin-right: 20px;
  height: max-content;
}

.divider-custom {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
