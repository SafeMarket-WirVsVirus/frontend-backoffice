<template>

  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>



export default {
  name: 'App',
  data () {
    return {
      loginpath: 'Test',
      loginname: 'TEst',
    }
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

<style lang="scss" scoped>

  .container {
    width: 100%;
    max-width: 500px;
  }

</style>
