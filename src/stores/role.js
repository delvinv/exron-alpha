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
    },
    getRoleById: (state) => {
      return (roleId) => state.roles.find((role) => role.id === roleId)
    }
  },
  actions: {
    setRoles(roles) {
      this.roles = roles
    }
  }
})
