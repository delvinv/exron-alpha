<script setup>
// import { ref } from 'vue'
// import { storeToRefs } from 'pinia';
// const settings = storeToRefs(useSettingsStore());
import { useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore();

// let orgName = ref(null)


</script>

<template>
  <div class="settings">
    <h1>Settings for {{ settings.orgName }}</h1>
    <h3>Organisation name: <input v-model="settings.orgName" /></h3>
    <h3>Occasions: <input v-model="settings.occasions" /></h3>
    <!-- weeklySchedule: true, -->
    
  </div>
</template>

<style scoped>
.settings {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: right;
}
</style>