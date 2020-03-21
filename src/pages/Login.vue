<template>
  <div>
    <p>Login</p>
    User: <input type="user" v-model="input.user" placeholder="Username"/> <br/> <br/>
    Password: <input type="password" v-model="input.password" placeholder="Password"/> <br/> <br/>
    <button type="button" v-on:click="login()"<Login<button/> 
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
          email: '',
          password: ''
      } 
    }
  },
  methods: {
    login() {
      if(this.input.user != "" && this.input.password != "") {
        if(this.input.user == this.$parent.account.user && this.input.password == this.$parent.account.password) {
          this.$emit("authentification", true);
          this.$router.replace({name: "Home"});
        } else {
          console.log("Incorrect username and/or password!");
        }
      } else {
        console.log("Please enter a username and password!");
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login{
  width: 500px;
  border: 1px solid;
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
