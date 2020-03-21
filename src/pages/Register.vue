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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  display: block;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
