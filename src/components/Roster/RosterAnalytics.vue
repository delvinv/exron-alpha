<!-- Insights into each roster -->
<!-- Takes a rosterID as input and crunches that roster for information such as: 
- people who are rostered most weeks and numbers
- people who are not rostered at al...
-->
<template>
  <div class="card flex justify-content-center">
    <h4>Roster id: {{ rosterSelectedStore.rosterSelected }}</h4>
    <h4>Roster id: {{ rosterSelectedStore.rosterSelected }}</h4>
  </div>
</template>

<script setup>
import { useRosterStore } from '@/stores/roster'
import { useRosterSelectedStore } from '@/stores/rosterSelected'

const rosterStore = useRosterStore()
const rosterSelectedStore = useRosterSelectedStore()

const currentRoster = rosterStore.rosters.find(
  (x) => x.rosterId === rosterSelectedStore.rosterSelected
).roster
console.log(currentRoster[0])

// Object to store volunteerId counts
const volunteerIdCounts = {}

const generateRosterInsights = () => {
  volunteerIdCounts.length = 0
  // Iterate through the roster array
  currentRoster.forEach(({ occasions }) => {
    // Count occurrences of volunteerId in occasions arrays
    occasions.forEach((volunteerId) => {
      // Update counts in the volunteerIdCounts object
      volunteerIdCounts[volunteerId] = (volunteerIdCounts[volunteerId] || 0) + 1
    })
  })

  // Display volunteerId counts
  console.log('VolunteerId Counts:', volunteerIdCounts)
}
</script>

<style scoped></style>
