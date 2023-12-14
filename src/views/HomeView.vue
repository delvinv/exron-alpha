<script setup>
import { ref, onMounted } from 'vue'
import VolunteerCard from '@/components/VolunteerCard.vue'
import RawData from '@/services/RawData.js'

let volunteers = ref(null)

onMounted(() => {
  // Need to import data here...
  volunteers.value = RawData.getVolunteers();
})
</script>

<template>
  <h1>Our committed volunteers</h1>
  <div class="volunteers">
    <VolunteerCard v-for="volunteer in volunteers" :key="volunteer.id" :volunteer="volunteer" />
  </div>
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