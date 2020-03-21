<template>
  <div>
    <navigation />
    <div class="container">
      <h1>NoQ Backoffice</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
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
