import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Check from '@/pages/Check'
import Config from '@/pages/Config'
import VueBarcodeScanner from 'vue-barcode-scanner'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register/',
      name: 'Register',
      component: Register
    },
    {
      path: '/check/',
      name: 'Check',
      component: Check
    },
    {
      path: '/config/',
      name: 'Config',
      component: Config
    }
  ]
})
