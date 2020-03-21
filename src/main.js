import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

import VueSession from 'vue-session'



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import './assets/styles/main.scss'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

/* 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */


var options = {
  persist: true
}
Vue.use(VueSession, options)


