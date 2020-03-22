import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import Vuex from 'vuex'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
import './assets/styles/main.scss'
var options = {
  persist: true
}
Vue.use(VueSession, options)

new Vue({
  render: h => h(App),
  router,
  store,
  methods: {

    // isLogedIn: function(){return this.$session.exists()}

  }
}).$mount('#app')



