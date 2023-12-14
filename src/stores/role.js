import { defineStore } from 'pinia'

export const useRoleStore = defineStore({
  id: 'roleStore',
  state: () => ({
    roles: [],
    loading: false,
    error: null
  }),
  getters: {
    getRoles(state) {
      return state.roles
    }
  }, 
  actions: {
    setRoles(roles) {
      this.roles = roles;
    }
  }
})
