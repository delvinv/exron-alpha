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
    },
    getCapabilityByRoleId: (state) => {
      return (roleId) => state.capabilities.find((c) => c.roleId === roleId).trainedVols
    }
  },
  actions: {
    setCapabilities(capabilities) {
      this.capabilities = capabilities
    }
  }
})
