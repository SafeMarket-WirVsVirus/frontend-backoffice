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
          v-model="user.name"
        />
        <input placeholder="Name" class="form-control" id="1st-name-input" type="text" />
        <input
          placeholder="Passwort*"
          class="form-control"
          id="password-input"
          type="password"
          v-model="user.password"
        />
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
      <input
        placeholder="E-Mail*"
        class="form-control"
        id="email-input"
        type="email"
        v-model="user.email"
      />
      <input
        placeholder="Telefon"
        class="form-control"
        id="phone-input"
        type="tel"
      />
      *Plichteingabe<br />
      <button type="submit" class="btn btn-primary">Profil anlegen</button>
    </form>

    <div></div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      alert(
        `Register '${this.user.name}' (${this.user.email}) with ` +
          `password ${this.user.password}`
      );
    }
  }
};
</script>
