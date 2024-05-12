import { defineStore } from 'pinia'

export const useVolunteerStore = defineStore({
  id: 'volunteerStore',
  state: () => ({
    volunteers: [],
    currentVolunteer: 0,
    loading: false,
    error: null
  }),
  getters: {
    getVolunteers(state) {
      return state.volunteers
    },
    getVolunteerById: (state) => {
      return (volunteerId) => state.volunteers.find((volunteer) => volunteer.id === volunteerId)
    },
    // getCurrentVolunteerUnavailable() {
    //   return this.volunteers.find((volunteer) => volunteer.id === this.currentVolunteer).unavailable
    // },
    getCurrentVolunteerUnavailable(state) {
      return (volunteerId) =>
        state.volunteers.find((volunteer) => volunteer.id === volunteerId).unavailable
    }
  },
  actions: {
    setVolunteers(volunteers) {
      this.volunteers = volunteers
    }
  }
})
