import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue';
import Login from './pages/Login.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
