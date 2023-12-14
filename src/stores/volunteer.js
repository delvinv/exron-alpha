import { defineStore } from 'pinia'

export const useVolunteerStore = defineStore({
  id: 'volunteerStore',
  state: () => ({
    volunteers: [],
    loading: false,
    error: null
  }),
  getters: {
    getVolunteers(state) {
      return state.volunteers
    },
    getVolunteerById: (state) => {
      return (volunteerId) => state.volunteers.find((volunteer) => volunteer.id === volunteerId)
    }
  }, 
  actions: {
    setVolunteers(volunteers) {
      this.volunteers = volunteers;
    }
  }
})
