<script setup>
import { ref, onMounted } from 'vue'
import VolunteerCard from '@/components/VolunteerCard.vue'
import RawData from '@/services/RawData.js'
import { useSettingsStore } from '@/stores/settings'
// import { storeToRefs } from 'pinia'

const settings = useSettingsStore();

let volunteers = ref(null)
// let orgName = ref(null)

onMounted(() => {
  // Need to import data here...
  volunteers.value = RawData.getVolunteers();
  // orgName.value = RawData.getOrgName();
  // settings.setOrgName(RawData.getOrgName());
})
</script>

<template>
  <h1>Our committed volunteers</h1>
  <div class="volunteers">
    <VolunteerCard v-for="volunteer in volunteers" :key="volunteer.id" :volunteer="volunteer" />
  </div>

  <h1>Roles available at {{ settings.orgName }}</h1>
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