<template>
  <div>
    <h2>Login</h2>
    User: <input type="user" v-model="input.user" placeholder="Username"/> <br/> <br/>
    Password: <input type="password" v-model="input.password" placeholder="Password"/> <br/> <br/>
    <button type="button" v-on:click="check_login()">Login</button>
    <button type="button" v-on:click="register()">Register</button>
  </div>
</template>

<script>
import router from "../router"
import axios from "axios"



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
          // this.$emit("authentification", true);
          this.login();
         
      } else {
        console.log("Please enter a username and password!");
      }
    },
    login() {
      
      // let user = "[account.user]"
      // let password = "[account.password]"
      
        
        axios.post("https://wirvsvirusretail.azurewebsites.net/api/Authentication", '{Username:"Hans",Passwort:"Peter}',{headers: {
        'Content-Type': 'application/json'
    }})
          .then((response) => {
            console.log(response);
            this.$session.start()
            this.$session.set('token', 'TestToken')
            this.$session.set('userid', 'TestId')
            this.loginpath = "/logout";
            this.loginname = "Logout";
            
            console.log(this.$session.getAll());
            console.log("Logged in")
            router.push("/")
        })
          .catch((errors) => {
            console.log(errors);
            console.log("Login failed")
          })
      
    },
    register() {
      this.$router.replace({name: "Register"});
    }
  }
  
}
</script>
