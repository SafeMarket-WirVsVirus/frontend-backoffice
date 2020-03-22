<template>
  <div>
    <div class="logo"></div>
    <div class="form-group">
      <input type="email" v-model="input.user" class="form-control" placeholder="Name">
      <input type="password" v-model="input.password" class="form-control" placeholder="Password">
      <button type="button" v-on:click="check_login()" class="btn btn-primary">Anmelden</button>
      <a href="register">Noch keinen Account? Sign up</a>
    </div>
  </div>
</template>

<script>
import router from "../router"
// import axios from "axios"

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
      
      // let user = "[account.user]"
      // let password = "[account.password]"
      
        
        // axios.post("/api/login", data)
        //   .then((response) => {
            console.log("Blubber");
            this.$session.start()
            this.$session.set('token', 'TestToken')
            this.$session.set('userid', 'TestId')
            this.loginpath = "/logout";
            this.loginname = "Logout";
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

<style lang="scss" scoped>

.logo{
  height: 100px;
  width: 100px;
  background: #ff0000;
  border-radius: 50%;
  margin: 20px auto;
  display: block;
}

</style>
