import { defineStore } from 'pinia'

export const useRosterSelectedStore = defineStore({
  id: 'rosterSelectedStore',
  state: () => ({
    rosterSelected: 0,
    loading: false,
    error: null
  }),
  getters: {
    getRosterSelected(state) {
      return state.rosterSelected
    }
  },
  actions: {
    setRosterSelected(rosterSelected) {
      this.rosterSelected = rosterSelected
    }
  }
})
