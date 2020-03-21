<template>
  <div>
    <p>Register</p>
    <form @submit.prevent="handleSubmit">
      <label for="name-input">Name: </label>
      <input id="name-input" type="text" v-model="user.name"/>
      <br/>
      <label for="email-input">E-Mail: </label>
      <input id="email-input" type="email" v-model="user.email"/>
      <br/>
      <label for="password-input">Password: </label>
      <input id="password-input" type="password" v-model="user.password"/>
      <br/>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit (event) {
      alert(`Register '${this.user.name}' (${this.user.email}) with ` +
        `password ${this.user.password}`)
    }
  }
}
</script>
