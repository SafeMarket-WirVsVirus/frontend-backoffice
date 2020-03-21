<template>
  <div>
    <h2>Login</h2>
    User: <input type="user" v-model="input.user" placeholder="Username"/> <br/> <br/>
    Password: <input type="password" v-model="input.password" placeholder="Password"/> <br/> <br/>
    <button type="button" v-on:click="check_login()">Login</button/>
    <button type="button" v-on:click="register()">Register</button/>
  </div>
</template>

<script>
import router from "../router"
import axios from "axios"

let account = {
  user: "test",
  password: "123"
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
          this.login();
        } else {
          console.log("Incorrect username and/or password!");
        }
      } else {
        console.log("Please enter a username and password!");
      }
    },
    login() {
      
      let user = "[account.user]"
      let password = "[account.password]"
      
        
        // axios.post("/api/login", data)
        //   .then((response) => {
            console.log("Blubber");
            this.$session.start()
            this.$session.set('token', 'TestToken')
            this.$session.set('userid', 'TestId')
            console.log(this.$session.getAll());
            console.log("Logged in")
            router.push("/")
        // })
        //   .catch((errors) => {
        //     console.log("Login failed")
        //   })
      
    },
    register() {
      this.$router.replace({name: "Register"});
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
