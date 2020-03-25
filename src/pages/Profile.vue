<template>
  <div>
    <h1>Profil</h1>
    <form  @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Name</label>
        <input
          placeholder="Name"
          class="form-control"
          id="name-input"
          type="text"
          v-model="userChange.Name"
        />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input
          placeholder="E-Mail"
          class="form-control"
          id="email-input"
          type="email"
          v-model="userFixed.Email"
          disabled
        />
      </div>
      <div class="form-group">
        <a href="/#">
          <span>Passwort zurücksetzen</span>          
        </a>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" :disabled="isLoading">
          <span v-if="!isLoading">Profil speichern</span>
          <span v-if="isLoading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </span>
        </button>
        <span class="error" v-if="isError">Es ist ein Fehler aufgetreten.</span>
      </div>
      
    </form>
  </div>
</template>

<script>
import { HTTP } from '../http'
export default {
  
  name: 'Profile',
  data() {
    return {
      userChange: {
        Id: localStorage.userId,
        Name: localStorage.userName,
      },
      userFixed: {
        Email: localStorage.userEmail,
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
      let user = this.user;
      HTTP.put('/api/User', this.user)
      .then(response => {
        console.log(response);
        this.isError = false;
        localStorage.userName = user.Name
        localStorage.userEmail = user.Email

        this.$router.replace({name: "Stores"});
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
