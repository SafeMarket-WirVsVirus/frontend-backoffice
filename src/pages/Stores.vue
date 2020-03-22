<template>
  <div>
    <h1>Meine Filialen</h1>
    <store-list />
    <a href="#" @click="newStore">weitere Filiale hinzufügen</a>
  </div>
</template>

<script>
import StoreList from '@/components/StoreList'

export default {
  name: 'Stores',
  components: { StoreList },
  methods: {
    newStore (event) {
      event.preventDefault()

      this.$store.dispatch('settings/setConfigStepsContext', 'new')
      this.$router.push({ name: 'Config' })
    }
  }
}
</script>
