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
    }
  }, 
  actions: {
    setVolunteers(volunteers) {
      this.volunteers = volunteers;
    }
  }
})
