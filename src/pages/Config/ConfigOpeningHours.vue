<template>
  <div>
    <p>Öffnungszeiten</p>
    <div class="form-group">
      <button type="button" class="btn btn-secondary" @click="prevStep">Zurück</button>
      <button type="button" class="btn btn-primary float-right" @click="nextStep">Weiter</button>
    </div>
  </div>
</template>

<script>
import AbstractStep from './AbstractStep'

export default {
  name: 'ConfigOpeningHours',
  extends: AbstractStep
}
</script>
