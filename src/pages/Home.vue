<template>
  <div>
    <p>This is the home page</p>
    <button type="button" v-on:click="logout()">Logout</button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
  methods: {
    logout(){
      console.log(this)
      // this.loginpath = "/login";
      // this.loginname = "login";
      this.$session.destroy()
      this.$router.push('/login')
    }
  }
}
</script>