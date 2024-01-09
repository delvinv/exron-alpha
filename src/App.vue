<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
import { useVolunteerStore } from '@/stores/volunteer'
import { useRoleStore} from '@/stores/role'
import { useCapabilityStore } from '@/stores/capability'
import { useRosterStore} from '@/stores/roster'
import { useRosterSelectedStore} from '@/stores/rosterSelected'
import RawData from '@/services/RawData.js'

const settings = useSettingsStore();
const volunteers = useVolunteerStore();
const roles = useRoleStore();
const capabilities = useCapabilityStore();
const rosterStore = useRosterStore();
const rosterSelectedStore = useRosterSelectedStore();

onMounted(() => {
  settings.setOrgName(RawData.getOrgName());
  volunteers.setVolunteers(RawData.getVolunteers());
  roles.setRoles(RawData.getRoles());
  capabilities.setCapabilities(RawData.getCapabilities());
  rosterStore.setRosters(RawData.getRosters());
  
  // At launch, app loads the first item in the rosters table.
  const defaultRosterSelection = rosterStore.rosters[2].rosterId;
  rosterSelectedStore.setRosterSelected(defaultRosterSelection)
})
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'volunteers'}">Volunteers</RouterLink> |
          <RouterLink :to="{ name: 'roles'}">Roles</RouterLink> |
          <RouterLink :to="{ name: 'capabilities'}">Capabilities</RouterLink> |
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
  /* Set view-height to 100% so that container height is fixed */
  height: 100vh;  
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
