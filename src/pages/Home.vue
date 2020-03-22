<template>
  <div>
    <p>This is the home page</p>
    <button type="button" v-on:click="logout()">Logout</button>

    <store-list />
  </div>
</template>

<script>
import { HTTP } from '../http'
import StoreList from "@/components/StoreList"

export default {
  name: 'Home',
  components: { StoreList },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout(){
      console.log(this)
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
