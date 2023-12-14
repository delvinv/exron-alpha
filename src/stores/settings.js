import { defineStore } from 'pinia'
// import RawData from '@/services/RawData.js'

export const useSettingsStore = defineStore({
  id: 'setting',
  state: () => ({
    orgName: null,
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
      this.orgName = name;
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
