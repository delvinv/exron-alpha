<script setup>
// import { ref } from 'vue'
// import { storeToRefs } from 'pinia';
// const settings = storeToRefs(useSettingsStore());
import { useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore()

// let orgName = ref(null)
</script>

<template>
  <h2>Settings for {{ settings.orgName }}</h2>
  <div class="settings">
    <div class="section">
      <label for="username">Organisation</label>
      <InputText id="username" v-model="settings.orgName" aria-describedby="org-help" />
      <small id="org-help">Enter a short name for your organisation.</small>
    </div>
    <div class="section">
      <label for="occasions">Occasions</label>
      <InputText
        id="occasions"
        type="number"
        v-model.number="settings.occasions"
        aria-describedby="occasions-help"
      />
      <small id="occasions-help">How many occasions to roster for?</small>
    </div>
    <div class="section">
      <span>Debug mode: </span>
      <Checkbox v-model="settings.debug" :binary="true" />
      <small id="debug-help">Turn on debug mode?</small>
    </div>

    <!-- <div class="card flex justify-content-center">
        <span class="p-buttonset">
            <Button label="Load from file" icon="pi pi-trash" />
            <Button label="Reset to default" icon="pi pi-times" />
        </span>
    </div> -->
  </div>
  <Toast />
</template>

<style scoped>
.settings {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  text-align: left;
}

.section {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 10px;
}
</style>
