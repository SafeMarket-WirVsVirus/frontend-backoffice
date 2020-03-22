<template>
  <div>
    <div>Adresse</div>
    <div class="form-group">
      <input type="text" class="form-control" id="companyName" placeholder="Filiale" v-model="companyName">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="street" placeholder="Straße / Hausnummer" v-model="street">
    </div>
    <div class="form-group">
      <input type="number" class="form-control" id="zip" placeholder="PLZ" v-model="zip">
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-secondary" @click="backHome">Zurück</button>
      <button type="button" class="btn btn-primary float-right" @click="nextStep">Weiter</button>
    </div>
  </div>
</template>

<script>
import AbstractStep from './AbstractStep'

export default {
  name: 'ConfigAddress',
  extends: AbstractStep,
  computed: {
    companyName: {
      get () {
        return this.getStoreAttributeByName('name', this.activeStoreIndex) || ''
      },
      set (value) {
        this.$store.dispatch('stores/setStoreAttribute', {
          activeStoreIndex: this.activeStoreIndex,
          name: 'name',
          value: value
        })
      }
    },
    street: {
      get () {
        return this.getStoreAttributeByName('address.street', this.activeStoreIndex) || ''
      },
      set (value) {
        this.$store.dispatch('stores/setStoreAttribute', {
          activeStoreIndex: this.activeStoreIndex,
          name: 'address.street',
          value: value
        })
      }
    },
    zip: {
      get () {
        return this.getStoreAttributeByName('address.zip', this.activeStoreIndex) || ''
      },
      set (value) {
        this.$store.dispatch('stores/setStoreAttribute', {
          activeStoreIndex: this.activeStoreIndex,
          name: 'address.zip',
          value: value
        })
      }
    },
  }
}
</script>
