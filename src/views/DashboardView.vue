<script setup>
import VolunteersView from '../views/VolunteersView.vue'
import RolesView from '../views/RolesView.vue'
import SettingsView from '../views/SettingsView.vue'
import RosterView from '../views/RosterView.vue'
import CapabilitiesView from '../views/CapabilitiesView.vue'
</script>

<template>
  <!-- Begin page content -->
  <main class="flex-shrink-0">
    <div class="mt-7"></div>
    <div class="container-fluid">
      <h1 class="mt-5">Dashboard</h1>
      <div class="row">
        <div class="col-6">
          <VolunteersView />
        </div>
        <div class="col-6">
          <RolesView />
        </div>
      </div>
      <hr class="my-1" />
      <div class="row">
        <div class="col-6">
          <RosterView />
        </div>
        <div class="col-6">
          <CapabilitiesView />
        </div>
      </div>
      <hr class="my-1" />
      <div class="row">
        <div class="col-6">
          <SettingsView />
        </div>
      </div>
      <div class="mb-7"></div>
    </div>
  </main>
  <!-- <div class="dashboard"> -->
  <!-- <h1>This is Dashboard</h1> -->

  <!-- </div> -->
</template>
