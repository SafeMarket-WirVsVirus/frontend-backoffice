<template>

  <div id="app">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import router from "./router"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {}
  },
  created: function(){

    if(localStorage.userId == undefined && this.$route.path !== '/login' ) router.push('/login');
    
  }
}
</script>

