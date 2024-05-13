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
    },
    getCurrentVolunteerCapabilities(state) {
      return (volunteerId) =>
        state.volunteers.find((volunteer) => volunteer.id === volunteerId).capabilities
    }
    // currentVolunteerPreferences: (state) => (volunteerId) => {
    //   const volunteer = state.volunteers.find((v) => v.id === volunteerId)
    //   if (!volunteer) return null // Or some default value

    //   const capability = volunteer.capabilities.find((c) => c.roleId === roleId)
    //   return capability ? capability.preferences : null // Or a default
    // }
  },
  actions: {
    setVolunteers(volunteers) {
      this.volunteers = volunteers
    }
  }
})
