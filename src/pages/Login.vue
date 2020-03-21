<template>
  <div>
    <p>Hier kannst du dich einloggen</p>
    <input type="email" v-model="form.email">
    <input type="password" v-model="form.email">
    Deine Email ist: {{ this.test }}
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
          email: '',
          password: ''
      } 
    }
  },
  computed() {
    return {
      test: 2
    }
  }

}
</script>