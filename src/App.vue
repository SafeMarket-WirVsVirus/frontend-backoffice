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

    // console.log(this.isLogedIn);
    // if(!this.isLogedIn){
    //   this.loginpath = "/logout";
    //   this.loginname = "Logout";
    // }else{
    //   this.loginpath = '/login';
    //   this.loginname = "Login";
    // }
  }
}
</script>

