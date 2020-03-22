<template>
  <div>
    <div>Kapazitäten</div>
    <div class="form-group">
      <label for="exampleInputEmail1">Wie viele Personen sollen gleichzeitig in den Laden gehen?</label>
      <input type="number" class="form-control"  placeholder="80">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Wie lange braucht ein Kunde durchschnittlich pro Einkauf?</label>
      <input type="number" class="form-control" id="exampleInputEmail1"  placeholder="">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Wieviel Laufkundschaft möchten Sie</label>
      <input type="number" class="form-control" id="exampleInputEmail1"  placeholder="">
    </div>
    <div class="form-group">
      <button type="button"  class="btn btn-secondary" @click="prevStep">Zurück</button>
      <button type="button"  class="btn btn-primary float-right" @click="nextStep">Fertig</button>
    </div>
  </div>
</template>

<script>
import AbstractStep from './AbstractStep'

export default {
  name: 'ConfigCapacity',
  extends: AbstractStep
}
</script>
