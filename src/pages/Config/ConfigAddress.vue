<template>

  <div>
    <div class="form-group">
      <select id="type" class="form-control" v-model="locationType">
        <option v-for="(type, index) in types"
            :key="index" :value="type" >{{type}}</option>
      </select>
    </div>
    <div class="form-group">
      <input type="number" class="form-control" id="radius" placeholder="Radius in km" v-model="radius" />
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-primary" @click="checkGeoLocation">Standorte auflisten</button>
    </div>
<!--     <div>Adresse</div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        id="companyName"
        placeholder="Filiale"
        v-model="companyName"
      />
    </div>
    <div class="form-group">
      <select class="form-control" id="googleplace" v-model="placeId">
        <option v-for="(place, index) in locations" :key="index" :value="place.placeId" >{{place.name}} - {{place.address}}
        </option>
      </select>
    </div>
      <input
        type="text"
        class="form-control"
        id="street"
        placeholder="Straße / Hausnummer"
        v-model="street"
      />
    </div> -->

<!--     <div class="form-group">
      <input type="number" class="form-control" id="zip" placeholder="PLZ" v-model="zip" />
    </div> -->
    <div class="form-group">
      <button type="button" class="btn btn-secondary" @click="backHome">Zurück</button>
      <button type="button" class="btn btn-primary float-right" @click="nextStep">Weiter</button>
    </div>



  </div>
</template>

<script>
import AbstractStep from './AbstractStep'
import {HTTP} from '../../http';
export default {
  name: 'ConfigAddress',
  extends: AbstractStep,
  data(){
    return{
      types:["bakery","book_store","clothing_store","convenience_store","department_store","drugstore","electronics_store","furniture_store","grocery_or_supermarket","hardware_store","home_goods_store","laundry","liquor_store","pet_store","pharmacy","shoe_store","shopping_mall","store","supermarket"]
    }
  },
  created(){
    HTTP.get('/api/Location/Search',{
      params: {
        type: "supermarket",
        longitude: 7,
        latitude: 48,
        radiusInMeters: 50000
      }
    })
      .then(response => {
        console.log(response.data)
        this.locations = response.data.locations
      })
      .catch(e => {
        console.log(e)
      })

  methods: {
    checkGeoLocation(){
      this.$getLocation()
      .then(coordinates => {
        console.log(coordinates);
      return coordinates;
      });
      }
  },
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
    locationType: {
      get () {
        return this.getStoreAttributeByName('locationType', this.activeStoreIndex) || ''
      },
      set (value) {
        this.$store.dispatch('stores/setStoreAttribute', {
          activeStoreIndex: this.activeStoreIndex,
          name: 'locationType',
          value: value
        })
      }
    },
    placeId: {
      get () {
        return this.getStoreAttributeByName('placeId', this.activeStoreIndex) || ''
      },
      set (value) {
        this.$store.dispatch('stores/setStoreAttribute', {
          activeStoreIndex: this.activeStoreIndex,
          name: 'placeId',
          value: value
        })
      }
    },
  }
}
</script>
