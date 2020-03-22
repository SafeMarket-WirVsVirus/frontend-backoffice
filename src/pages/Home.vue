<template>
  <div>
    <p>This is the home page</p>
    <button type="button" v-on:click="logout()">Logout</button>

  </div>
</template>

<script>
import {HTTP} from '../http';

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
      localStorage.token = null
      this.$router.push('/login')
    }
  },
  created() {
    console.log(this.$session.getAll())
    HTTP.get('/api/Location?id=1')
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>