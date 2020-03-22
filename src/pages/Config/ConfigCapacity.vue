<template>
  <div>
    <div>Kapazitäten</div>
    <div class="form-group">
      <label for="clientsInStore">Wie viele Personen sollen gleichzeitig in den Laden gehen?</label>
      <input type="number" class="form-control" id="clientsInStore" placeholder="" v-model="clientsInStore">
    </div>
    <div class="form-group">
      <label for="averageDurationPerClientInMinutes">Wie lange braucht ein Kunde durchschnittlich pro Einkauf?</label>
      <input type="number" class="form-control" id="averageDurationPerClientInMinutes"  placeholder="" v-model="averageDurationPerClientInMinutes">
    </div>
    <div class="form-group">
      <label for="percentageReservations">Wieviel Laufkundschaft möchten Sie</label>
      <input type="number" class="form-control" id="percentageReservations"  placeholder="" v-model="percentageReservations">
    </div>
    <div class="form-group">
      <button type="button"  class="btn btn-secondary" @click="prevStep">Zurück</button>
      <button type="button"  class="btn btn-primary float-right" @click="registerAPI">Fertig</button>
    </div>
  </div>
</template>

<script>
import AbstractStep from './AbstractStep'

export default {
  name: 'ConfigCapacity',
  extends: AbstractStep,
  computed: {
    clientsInStore: {
      get () {
        return this.getStoreAttributeByName('clientsInStore', this.activeStoreIndex) || ''
      },
      set (value) {
        this.$store.dispatch('stores/setStoreAttribute', {
          activeStoreIndex: this.activeStoreIndex,
          name: 'clientsInStore',
          value: value
        })
      }
    },
    averageDurationPerClientInMinutes: {
      get () {
        return this.getStoreAttributeByName('averageDurationPerClientInMinutes', this.activeStoreIndex) || ''
      },
      set (value) {
        this.$store.dispatch('stores/setStoreAttribute', {
          activeStoreIndex: this.activeStoreIndex,
          name: 'averageDurationPerClientInMinutes',
          value: value
        })
      }
    },
    percentageReservations: {
      get () {
        return this.getStoreAttributeByName('percentageReservations', this.activeStoreIndex) || ''
      },
      set (value) {
        this.$store.dispatch('stores/setStoreAttribute', {
          activeStoreIndex: this.activeStoreIndex,
          name: 'percentageReservations',
          value: value
        })
      }
    }
  }
}
</script>
