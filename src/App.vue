<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
import { useVolunteerStore } from '@/stores/volunteer'
import { useRoleStore } from '@/stores/role'
import { useCapabilityStore } from '@/stores/capability'
import { useRosterStore } from '@/stores/roster'
import { useRosterSelectedStore } from '@/stores/rosterSelected'
import RawData from '@/services/RawData.js'

import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

const settings = useSettingsStore()
const volunteers = useVolunteerStore()
const roles = useRoleStore()
const capabilities = useCapabilityStore()
const rosterStore = useRosterStore()
const rosterSelectedStore = useRosterSelectedStore()

onMounted(() => {
  settings.setOrgName(RawData.getOrgName())
  volunteers.setVolunteers(RawData.getVolunteers())
  roles.setRoles(RawData.getRoles())
  capabilities.setCapabilities(RawData.getCapabilities())
  rosterStore.setRosters(RawData.getRosters())

  // At launch, app loads the first item in the rosters table.
  const defaultRosterSelection = rosterStore.rosters[2].rosterId
  rosterSelectedStore.setRosterSelected(defaultRosterSelection)
})
</script>

<template>
  <div id="layout">
    <header>
      <NavBar />
      <!-- <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'dashboard' }">Dashboard</RouterLink> |
          <RouterLink :to="{ name: 'volunteers' }">Volunteers</RouterLink> |
          <RouterLink :to="{ name: 'roles' }">Roles</RouterLink> |
          <RouterLink :to="{ name: 'capabilities' }">Capabilities</RouterLink> |
          <RouterLink :to="{ name: 'settings' }">Settings</RouterLink> |
          <RouterLink :to="{ name: 'roster' }">Roster</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div> -->
    </header>
    <RouterView />
  </div>
  <FooterComponent />
</template>

<style scoped>
</style>
