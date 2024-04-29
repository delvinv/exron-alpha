<script setup>
import { ref } from 'vue'
import RosterSelector from '@/components/Roster/RosterSelector.vue'
import RosterTable from '@/components/Roster/RosterTable.vue'
import RosterAnalytics from '@/components/Roster/RosterAnalytics.vue'
import { useRosterStore } from '@/stores/roster'
import { generateRoster } from '@/services/Scheduler'

const loading = ref(false)
const sliderValue = ref(5000)
const rosterStore = useRosterStore()

const load = async () => {
  console.log('waiting for.. ' + sliderValue.value)
  loading.value = true
  let roster = await generateRoster(sliderValue.value)
  console.log(roster)
  rosterStore.addRoster(roster)
  loading.value = false
}

const startCountdown = () => {
  loading.value = true
  load()
}

const onCountdownEnd = () => {
  loading.value = false
}
</script>

<template>
  <div class="home">
    <!-- <h1>Roster view</h1> -->
  </div>

  <div class="formgrid grid">
    <div class="field col">
      <h1>Select your roster here:</h1>
      <RosterSelector></RosterSelector>
    </div>
    <div class="field col">
      <h3>Here's the roster you selected</h3>
      <RosterTable></RosterTable>
    </div>
    <div class="field col">
      <h3>Insights for this roster:</h3>
      <RosterAnalytics></RosterAnalytics>
    </div>
  </div>
  <!-- <div class="card flex justify-content-center">
    <Button type="button" label="Generate New Roster" icon="pi pi-search" :loading="loading" @click="load" class="generateButton"/>
    <div class="w-14rem sliderDiv">
            <InputText v-model.number="sliderValue" class="w-full" />
            <Slider v-model="sliderValue" :min="2000" :max="120000" :step="1000" class="w-full" />
    </div>
  </div> -->

  <div class="card flex justify-content-center">
    <Button
      type="button"
      class="btn btn-primary generateButton"
      :disabled="loading"
      @click="startCountdown"
    >
      <vue-countdown
        v-if="loading"
        :time="sliderValue"
        @end="onCountdownEnd"
        v-slot="{ totalSeconds }"
        >Generate again in {{ totalSeconds }}s</vue-countdown
      >
      <span v-else>Generate New Roster</span>
    </Button>
    <div class="w-14rem sliderDiv">
      <InputText v-model.number="sliderValue" class="w-full" />
      <Slider v-model="sliderValue" :min="2000" :max="120000" :step="1000" class="w-full" />
    </div>
  </div>
</template>

<style>
.sliderDiv {
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 10px;
}

.generateButton {
  max-height: 50px;
  display: inline;
  vertical-align: middle;
  margin-top: 25px;
}
</style>
