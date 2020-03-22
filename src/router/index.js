import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Check from '@/pages/Check'
import Config from '@/pages/Config/index'
import { steps } from '@/config'

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
      path: '/config',
      name: 'Config',
      redirect: '/config/1',
      component: Config,
      children: steps.map(step => {
        return Object.assign({}, step, {
          path: step.position.toString(),
          component: () => import(`@/pages/Config/${step.name}.vue`)
        })
      })
    }
  ]
})
