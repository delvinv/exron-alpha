<!-- Insights into each roster -->
<!-- Takes a rosterID as input and crunches that roster for information such as: 
- people who are rostered most weeks and numbers
- people who are not rostered at al...
-->
<template>
  <div class="card flex justify-content-center">
    <h4>Roster id: {{ rosterSelectedStore.rosterSelected }}</h4>
    <p>{{ currentRoster }}</p>
  </div>
  <div class="card flex justify-content-center">
    <Button
      type="button"
      class="btn btn-primary generateButton"
      @click="checkRosterAvailability()"
    >
      Generate Roster Insights
    </Button>
    </div>
</template>

<script setup>
import { useRosterStore } from '@/stores/roster'
import { useRosterSelectedStore } from '@/stores/rosterSelected'
import { useVolunteerStore } from '@/stores/volunteer'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const volunteers = useVolunteerStore()
const { getVolunteerById } = storeToRefs(volunteers)
const rosterStore = useRosterStore()
const rosterSelectedStore = useRosterSelectedStore()

const currentRoster = rosterStore.rosters.find(
  (x) => x.rosterId === rosterSelectedStore.rosterSelected
).roster
console.log("Here is the current roster: ")
console.log(currentRoster)

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

const checkRosterAvailability = () => {
    // Iterate through every volunteer in currentRoster array and 
    // check if volunteer is unavailable by comparing the current occasion with 'unavailable' array of useVolunteerStore()
    currentRoster.forEach(({ occasions }, index) => {
      occasions.forEach((volunteerId) => {
      const volunteer = getVolunteerById(volunteerId)
      volunteer.unavailable.forEach((unavailableOccasion) => {
        const occasion = occasions[index]
        if (unavailableOccasion === occasion) {
        console.log(`Volunteer ${volunteer.forename} ${volunteer.surname} is unavailable for occasion ${occasion}`)
        }
      })
      })
    })
  }
</script>

<style scoped></style>
