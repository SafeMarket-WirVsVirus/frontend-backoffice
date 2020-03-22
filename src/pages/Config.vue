<template>
  <div>
    <div data-step="1">
        <h1>Neue Filiale anlegen</h1>
        <div>Schritt 1 von 3</div>
        <div>Adresse</div>
            <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Vorname">
            <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Name">
            <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Firma">
            <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Straße / Hausnummer">
            <input type="number" class="form-control" id="exampleInputEmail1" placeholder="PLZ">
            <button type="button"  class="btn btn-secondary">Zurück</button>
            <button type="button"  class="btn btn-primary">Weiter</button>
        </div>
    </div>
    <div data-step="2">
        <h1>Neue Filiale anlegen</h1>
        <div>Schritt 2 von 2</div>
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
            <button type="button"  class="btn btn-secondary">Zurück</button>
            <button type="button"  class="btn btn-primary">Fertig</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Config',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
