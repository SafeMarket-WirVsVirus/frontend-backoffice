import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import VueGeolocation from 'vue-browser-geolocation';



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
Vue.use(VueGeolocation)

import './assets/styles/main.scss'


new Vue({
  render: h => h(App),
  router,
  store,
  methods: {


  }
}).$mount('#app')



