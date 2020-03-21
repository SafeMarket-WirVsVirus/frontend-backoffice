<template>
  <div>
    <p>This is the home page</p>
    <button type="button" v-on:click="logout()">Logout</button/>

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
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/login')
    }
  }, 
  methods: {
    logout(){
      console.log(this.$session.getAll())
      this.$session.destroy()
      this.$router.push('/login')
    }
  }
}
</script>