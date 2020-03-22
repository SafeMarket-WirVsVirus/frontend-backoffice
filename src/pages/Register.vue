<template>
  <div>
    <div class="logo"></div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input
          placeholder="Vorname*"
          class="form-control"
          id="name-input"
          type="text"
          v-model="user.Name"
        />
      </div>
      <div class="form-group">
        <input placeholder="Name" class="form-control" id="1st-name-input" type="text" />
      </div>
      <div class="form-group">
        <input
          placeholder="Passwort*"
          class="form-control"
          id="password-input"
          type="password"
          v-model="user.Password"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Passwort wiederholen*"
          class="form-control"
          id="password-repeat-input"
          type="password"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Firma"
          class="form-control"
          id="company-input"
          type="text"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="E-Mail*"
          class="form-control"
          id="email-input"
          type="email"
          v-model="user.Email"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Telefon"
          class="form-control"
          id="phone-input"
          type="tel"
        />
      </div>
      *Plichteingabe<br />
      <button type="submit" class="btn btn-primary">Profil anlegen</button>
    </form>

    <div></div>
  </div>
</template>

<script>
import axios from 'axios'
import { api } from '@/config'

export default {
  name: "Register",
  data() {
    return {
      user: {
        Name: '',
        Email: '',
        Password: '',
        Type: 0
      }
    }
  },
  methods: {
    handleSubmit() {
      // alert(
      //   `Register '${this.user.name}' (${this.user.email}) with ` +
      //     `password ${this.user.password}`
      // )

      axios.post(
        api.user,
        this.user,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(response => {
        console.log({ response })
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
