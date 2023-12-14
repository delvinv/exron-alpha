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
      return (rosterId) => state.rosters.find((roster) => roster.rosterId === rosterId)
    }
  }, 
  actions: {
    setRosters(rosters) {
      this.rosters = rosters;
    },
    addRoster(roster){
      this.rosters.push(roster);
    }
  }
})    