<template>
  <div>
    <div>Adresse</div>
    <div class="form-group">
      <input type="text" class="form-control" id="name" placeholder="Vorname">
      <input type="text" class="form-control" id="name2" placeholder="Name">
      <input type="text" class="form-control" id="company" placeholder="Firma">
      <input type="text" class="form-control" id="street" placeholder="Straße / Hausnummer">
      <input type="number" class="form-control" id="zip" placeholder="PLZ">
      <button type="button" class="btn btn-secondary">Zurück</button>
      <button type="button" class="btn btn-primary" @click="nextStep">Weiter</button>
    </div>
  </div>
</template>

<script>
import AbstractStep from './AbstractStep'

export default {
  name: 'ConfigAddress',
  extends: AbstractStep
}
</script>
