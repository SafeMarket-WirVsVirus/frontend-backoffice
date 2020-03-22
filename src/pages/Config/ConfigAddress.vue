<template>
  <div>
    <div>Adresse</div>
    <div class="form-group">
      <input type="text" class="form-control" id="name" placeholder="Vorname">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="name2" placeholder="Name">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="company" placeholder="Firma">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="street" placeholder="Straße / Hausnummer">
    </div>
    <div class="form-group">
      <input type="number" class="form-control" id="zip" placeholder="PLZ">
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
  extends: AbstractStep
}
</script>
