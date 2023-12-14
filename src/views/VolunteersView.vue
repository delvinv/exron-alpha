<script setup>
import VolunteerCard from '@/components/VolunteerCard.vue'
import { useVolunteerStore } from '@/stores/volunteer'
import { useSettingsStore } from '@/stores/settings'

const volunteers = useVolunteerStore();
const settings = useSettingsStore();
</script>

<template>
  <Button class="form-button p-button-sm" label="Button" />
  <h1><em>{{ settings.orgName }}</em>: Our committed volunteers</h1>
  <div class="volunteers">
    <VolunteerCard v-for="individual in volunteers.volunteers" :key="individual.id" :volunteer="individual" />
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