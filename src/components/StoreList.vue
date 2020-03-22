<template>
  <ul>
    <li v-for="(store, index) in allStores" :key="index">
      {{ store.name }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StoreList',
  computed: {
    ...mapGetters({
      allStores: 'stores/allStores'
    })
  }
}
</script>
