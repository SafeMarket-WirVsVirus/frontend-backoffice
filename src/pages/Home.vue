<template>
  <div>
    <p>This is the home page</p>
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
  created() {
    HTTP.get(`posts`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>