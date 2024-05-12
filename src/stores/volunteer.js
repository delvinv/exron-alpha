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
    getCurrentVolunteer(state) {
      return state.volunteers.find((volunteer) => volunteer.id === this.currentVolunteer)
    }
  },
  actions: {
    setVolunteers(volunteers) {
      this.volunteers = volunteers
    }
  }
})
