<template>

  <div id="app">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
    <notifications />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import router from './router'
import Notifications from '@/components/Notifications'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Notifications
  },
  data () {
    return {}
  },
  created: function(){
    if (localStorage.userId == null &&
      this.$route.path !== '/login' &&
      this.$route.path !== '/register') {
      router.push('/login')
    }
  }
}
</script>

