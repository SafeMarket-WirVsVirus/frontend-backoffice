<template>
  <div>
    <div>
      <div class="location_success">
        <svg class="bi bi-check" width="100" height="100" viewBox="0 0 16 16" fill="#27ae60" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
        </svg>
      <h1>{{ storeData.name }}</h1>
      <div>wurde erfolgreich angelegt</div>
      </div>
      <br>
      <div><strong>Zusammenfassung:</strong></div>
      <div>{{ storeData.name }}</div>
      <div>{{ storeData.address.street }}</div>
      <div>{{ storeData.address.zip }} {{ storeData.address.city }}</div>
      <br>
      <div><strong>Öffnungszeiten:</strong></div>
      <br>
      <div><strong>Kapazitäten:</strong></div>
      <div>Maximale Personen im Laden: {{ storeData.clientsInStore }}</div>
      <div>Durchschnittliche Länge Einkauf: {{ storeData.averageDurationPerClientInMinutes }} Min</div>
      <div>Reservierte Tickets / Laufkundschaft: {{ storeData.percentageReservations }} / {{storeData.clientsInStore}} </div>
      <a href="">Bearbeiten</a>
    </div>
  </div>
</template>

<script>
import AbstractStep from './AbstractStep'

export default {
  name: 'ConfigConfirmation',
  extends: AbstractStep,
  data () {
    return {
      data: this.storeData
    }
  }
}
</script>
