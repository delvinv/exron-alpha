import { defineStore } from 'pinia'

export const useCapabilityStore = defineStore({
  id: 'capabilityStore',
  state: () => ({
    capabilities: [],
    loading: false,
    error: null
  }),
  getters: {
    getCapabilities(state) {
      return state.capabilities
    }
  },
  actions: {
    setCapabilities(capabilities) {
      this.capabilities = capabilities
    }
  }
})
