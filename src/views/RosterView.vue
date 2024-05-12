<script setup>
import { ref } from 'vue'
import RosterSelector from '@/components/Roster/RosterSelector.vue'
import RosterTable from '@/components/Roster/RosterTable.vue'
import RosterAnalytics from '@/components/Roster/RosterAnalytics.vue'
import { useRosterStore } from '@/stores/roster'
import { generateRoster } from '@/services/Scheduler'
import { useToast } from 'primevue/usetoast'

const loading = ref(false)
const sliderValue = ref(5000)
const rosterStore = useRosterStore()
const toast = useToast()

/**
 * Load a new roster
 * Also shows meaningful notifications to the user
 */
const load = async () => {
  console.log('waiting for.. ' + sliderValue.value)
  loading.value = true
  let roster = await generateRoster(sliderValue.value)
  console.log(roster.status)
  // if roster.status exactly equals the string OPTIMAL_SOLUTION, add the roster to the store
  if (roster.status === 'OPTIMAL_SOLUTION') {
    rosterStore.addRoster(roster)
    toast.add({
      severity: 'success',
      summary: 'OPTIMAL_SOLUTION',
      detail: 'Found a perfect roster matching all conditions!',
      life: 3000
    })
  } else if (roster.status === 'SATISFIED') {
    rosterStore.addRoster(roster)
    toast.add({
      severity: 'success',
      summary: 'SATISFIED',
      detail: 'Need to find out what this means!!',
      life: 3000
    })
  } else if (roster.status === 'UNKNOWN') {
    console.log('ROSTER GENERATOR: Needs more time')
    toast.add({
      severity: 'warn',
      summary: 'NEED_MORE_TIME',
      detail: 'ROSTER GENERATOR: Needs more time',
      life: 3000
    })
  } else if (roster.status === 'UNSATISFIABLE') {
    console.log('ROSTER GENERATOR: Needs more flexibility')
    toast.add({
      severity: 'error',
      summary: 'UNSATISFIABLE',
      detail: 'ROSTER GENERATOR: Needs more flexibility',
      life: 3000
    })
  }
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
  <div class="row">
    <!-- Select Roster goes here -->
    <div class="col-5">
      <h3>1. Select roster...</h3>
      <RosterSelector></RosterSelector>
    </div>
    <div class="col-6">
      <h3>(or create a new one)</h3>
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
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h3>2. Browse roster</h3>
      <RosterTable></RosterTable>
      <h5>Legend</h5>
      <p>
        <span class="text-decoration-underline">Underline</span> = this person has been rostered for
        2 consecutive occasions.
      </p>
      <p>
        <span class="unavailable-volunteer">Red Strikethrough</span> = this person should not be
        rostered here (based on the availability provided).
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-8">
      <h3>3. Roster Analytics</h3>
      <RosterAnalytics></RosterAnalytics>
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
