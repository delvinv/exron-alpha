import { defineStore } from 'pinia'
import { useVolunteerStore } from './volunteer'

export const useRoleMatrixStore = defineStore({
  id: 'capabilityStore',
  state: () => ({
    matrix: [],
    loading: false,
    error: null
  }),
  getters: {
    getMatrix(state) {
      /**
       * Return an array of objects with the following structure:
       * {
       *  volunteerId: 1,
       *  roleIds: [1,5,9]
       * }
       * Pseudocode for this;
       * 1. Get the list of volunteers
       * 2. For each volunteer, get the list of roles they are trained in
       * 3. Return the list of volunteers with their roles as an array (matrix)
       */
      //   Use volunteer store to get the list of volunteers
      const volunteers = useVolunteerStore().volunteers
      for (let i = 0; i < volunteers.length; i++) {
        const v = volunteers[i]
      }

      return state.matrix
    }
  },
  actions: {
    setMatrix(matrix) {
      this.matrix = matrix
    }
  }
})
