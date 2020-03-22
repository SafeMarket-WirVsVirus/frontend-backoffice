<template>
  <div>
    <div class="logo"></div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input
          placeholder="Name"
          class="form-control"
          id="name-input"
          type="text"
          v-model="user.Name"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Passwort"
          class="form-control"
          id="password-input"
          type="password"
          v-model="user.Password"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="E-Mail"
          class="form-control"
          id="email-input"
          type="email"
          v-model="user.Email"
        />
      </div>
      <button type="submit" class="btn btn-primary" :disabled="isLoading">
        <span v-if="!isLoading">Profil anlegen</span>
        <span v-if="isLoading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </span>
      </button>
      <span class="error" v-if="isError">Es ist ein Fehler aufgetreten.</span>
    </form>

    <div></div>
  </div>
</template>

<script>
import { HTTP } from '../http'

export default {
  name: "Register",
  data() {
    return {
      user: {
        Name: '',
        Email: '',
        Password: '',
        Type: 0
      },
      isLoading: false,
      isError: false
    }
  },
  methods: {
    handleSubmit() {
      this.isError = false;
      this.isLoading = true;
      HTTP.post('/api/User', this.user)
      .then(response => {
        console.log(response);
        this.isError = false;
        this.$router.replace({name: "Login"});
      })
      .catch(error => {
        console.log(error);
        this.isLoading = false;
        this.isError = true;
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.error{
  padding-left: 10px;
}
</style>