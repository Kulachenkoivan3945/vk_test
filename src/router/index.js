import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView,
    meta:{
      keepAlive: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
