import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
import './assets/styles/main.scss'


new Vue({
  render: h => h(App),
  router,
  store,
  methods: {


  }
}).$mount('#app')



