<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
import RawData from '@/services/RawData.js'

const settings = useSettingsStore();

onMounted(() => {
  // Need to import data here...
  // volunteers.value = RawData.getVolunteers();
  // orgName.value = RawData.getOrgName();
  settings.setOrgName(RawData.getOrgName());
})
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'home'}">Home</RouterLink> |
          <RouterLink :to="{ name: 'settings'}">Settings</RouterLink> |
          <RouterLink :to="{ name: 'roster'}">Roster</RouterLink> |
          <RouterLink :to="{ name: 'about'}">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
