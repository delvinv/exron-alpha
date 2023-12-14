<script setup>
// import { ref } from 'vue'
import { useSettingsStore } from '@/stores/settings'
// import { storeToRefs } from 'pinia';

// const settings = storeToRefs(useSettingsStore());
const settings = useSettingsStore();

// let orgName = ref(null)


</script>

<template>
  <div class="settings">
    <h1>Settings for {{ settings.orgName }}</h1>
    <h3>Organisation name: <input v-model="settings.orgName" /></h3>
    
  </div>
</template>

<style scoped>
.settings {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>