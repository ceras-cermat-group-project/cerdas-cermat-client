import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const username = localStorage.getItem('Username')
  if (!username) {
    if (to.name === 'Home') {
      return next('/login')
    }
  } else if (username && to.name === 'Login') {
    return next('/')
  }
  next()
})

export default router
