import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import MainView from '../views/MainView.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: MainView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router