<template>
  <div>
    <h1>Meine Filialen</h1>
    <a @click.prevent="notify">weitere Filiale hinzufügen</a>
  </div>
</template>

<script>

export default {
  name: 'Stores',
  methods: {
    notify: function() {
      this.$store.dispatch('notifications/addNewNotification', {
        message: 'TEEEEST'
      })
    }
  }
}
</script>
