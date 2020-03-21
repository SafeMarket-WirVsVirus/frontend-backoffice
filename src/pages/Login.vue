<template>
  <div>
    <p>Hier kannst du dich einloggen</p>
    <input type="email" v-model="form.email">
    <input type="password" v-model="form.email">
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
