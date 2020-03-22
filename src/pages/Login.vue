<template>
  <form id="loginform"
    @submit="check_login">
    <div class="logo"><img src="/Safe_Market.svg"></div>
    <div class="form-group">
      <input type="text" v-model="input.user" class="form-control" placeholder="Name">
    </div>
    <div class="form-group">
      <input type="password" v-model="input.password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group">
      <button type="submit" v-on:click="check_login()" class="btn btn-primary float-right">Anmelden</button>
    </div>
    <div class="form-group">
      <a href="register">Noch keinen Account? Sign up</a>
    </div>
    
  </form>
</template>

<script>
import router from "../router"
import axios from "axios"


export default {
  name: 'Login',
  data() {
    return {
      input: {
          user: '',
          password: ''
      } 
    }
  },
  methods: {
    check_login(e = null) {
      if(e) e.preventDefault();
      if(this.input.user != "" && this.input.password != "") {
        
          this.$emit("authentification", true);
          this.login();
        
      } else {
        console.log("Please enter a username and password!");
      }
    },
    login() {
      
      // let user = "[account.user]"
      // let password = "[account.password]"
      
        
                
        axios.post("https://wirvsvirusretail.azurewebsites.net/api/Authentication", 
                    "{\"Username\":\""+this.input.user+"\",\"Password\":\""+this.input.password+"\"}",
                    {headers: 
                      {'Content-Type': 'application/json-patch+json'}
                    }
                  ).then((response) => {
                    this.$session.start()
                    localStorage.token = response.data.jwtWebToken
                    this.loginpath = "/logout";
                    this.loginname = "Logout";
                    router.push("/")
                  }).catch((errors) => {
                    console.log("Login failed - " + errors)
                  })
      
    },
    register() {
      this.$router.replace({name: "Register"});
    }
  }
  
}
</script>