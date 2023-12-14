<script setup>
  import RosterTable from '@/components/RosterTable.vue';
import { ref } from 'vue';
  const loading = ref(false);

  const load = () => {
      loading.value = true;
      setTimeout(() => {
          loading.value = false;
      }, 2000);
  };
</script>

<template>
  <div class="home">
    <h1>Roster view</h1>
    <div class="card flex justify-content-center">
        <Button type="button" label="Generate Roster" icon="pi pi-search" :loading="loading" @click="load" />
    </div>
  </div>
  <RosterTable></RosterTable>
</template>

<!-- <style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    /* display: flex; */
    align-items: center;
  }
}
</style> -->
