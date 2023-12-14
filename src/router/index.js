import { createRouter, createWebHistory } from 'vue-router'
import VolunteersView from '../views/VolunteersView.vue'
import RolesView from '../views/RolesView.vue'
import SettingsView from '../views/SettingsView.vue'
import RosterView from '../views/RosterView.vue'
import CapabilitiesView from '../views/CapabilitiesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'volunteers',
      component: VolunteersView
    },
    {
      path: '/roles',
      name: 'roles',
      component: RolesView
    },
    {
      path: '/capabilities',
      name: 'capabilities',
      component: CapabilitiesView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/roster',
      name: 'roster',
      component: RosterView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
