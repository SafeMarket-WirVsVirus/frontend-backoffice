<template>
  <div>
    <h2>Login</h2>
    User: <input type="user" v-model="input.user" placeholder="Username"/> <br/> <br/>
    Password: <input type="password" v-model="input.password" placeholder="Password"/> <br/> <br/>
    <button type="button" v-on:click="check_login()"/>Login<button/>
    <button type="button" v-on:click="register()"/>Register<button/>
  </div>
</template>

<script>
import router from "../router"
import axios from "axios"

account => {
  user = "test",
  password = "123"
}

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
    check_login() {
      if(this.input.user != "" && this.input.password != "") {
        if(this.input.user == account.user && this.input.password == account.password) {
          this.$emit("authentification", true);
          this.$router.replace({name: "Home"});
        } else {
          console.log("Incorrect username and/or password!");
        }
      } else {
        console.log("Please enter a username and password!");
      }
    },
    login: (e) => {
      e.preventDefault()
      let user = "[account.user]"
      let password = "[account.password]"
      let login = () => {
        let data = {
          user: user,
          password: password
        }
        axios.post("/api/login", data)
          .then((response) => {
            console.log("Logged in")
            router.push("/Home")
        })
          .catch((errors) => {
            console.log("Login failed")
          })
      }
      login()
    }
  },
  name: "Register",
  register() {
    this.$router.replace({name: "Register"});
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
