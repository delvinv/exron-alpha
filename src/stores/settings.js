import { defineStore } from 'pinia'
// import RawData from '@/services/RawData.js'

export const useSettingsStore = defineStore({
  id: 'setting',
  state: () => ({
    orgName: null,
    occasions: 4,
    weeklySchedule: true,
    debug: true,
    loading: false,
    error: null
  }),
  getters: {
    getOrgName(state) {
      return state.orgName
    }
  },
  actions: {
    setOrgName(name) {
      this.orgName = name
    },
    setOccasions(num) {
      this.occasions = num
    },
    setDebug(bool) {
      this.debug = bool
    }
    /* async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id) {
      this.post = null
      this.loading = true
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    } */
  }
})
