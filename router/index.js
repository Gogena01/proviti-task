import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: '../pages/home.vue'
  },
  {
    path: '/posts',
    component: '../pages/postss.vue'
  },
  // Add more routes as needed
]

const router = new Router({
  routes
})

export default router
