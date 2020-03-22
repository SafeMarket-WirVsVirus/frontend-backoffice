<template>
  <div>
    <h1>Meine Filialen</h1>
    <store-list />
    <a href="">weitere Filiale hinzufügen</a>
  </div>
</template>

<script>
import { HTTP } from '../http'
import StoreList from "@/components/StoreList"

export default {
  name: 'Stores',
  components: { StoreList },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

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
