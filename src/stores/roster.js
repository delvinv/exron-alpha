import { defineStore } from 'pinia'

export const useRosterStore = defineStore({
  id: 'rosterStore',
  state: () => ({
    rosters: [],
    loading: false,
    error: null
  }),
  getters: {
    getRosters(state) {
      return state.rosters
    },
    getRosterById: (state) => {
      return (rosterId) => state.rosters.find((roster) => roster.id === rosterId)
    }
  }, 
  actions: {
    setRoles(rosters) {
      this.rosters = rosters;
    }
  }
})
