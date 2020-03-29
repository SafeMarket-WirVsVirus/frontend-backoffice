<template>
  <div>
    <div class="form-group">
    
        <div v-if="!selectedAddress">
            <label for="exampleInputEmail1">Adresse</label>
            <gmap-place-input :default-place="google_place" :select-first-on-enter="true" :types="establishment"
                @place_changed="setPlace">
            </gmap-place-input>
        </div>
        
        <div class="card mb-3" v-if="selectedAddress">
        <div class="row no-gutters">
            <div class="col-md-12">
            <div class="card-body">
                <p class="lead">Gewählte Adresse</p>
                <p class="card-text">{{selectedAddress.name}}<br /><small>{{selectedAddress.formatted_address}}</small></p>
                <p><a href="" @click.prevent="resetPlace">Andere Adresse wählen</a></p>
            </div>
            </div>
        </div>
        </div> 
    </div>

    <div class="form-group">
      <button type="button" class="btn btn-secondary" @click="backHome">Zurück</button>
      <button type="button" class="btn btn-primary float-right" @click="nextStep">Weiter</button>
    </div>

    
  </div>


</template>

<script>
import Vue from 'vue';
import AbstractStep from "./AbstractStep";
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA6Aqa05ilfR8JBhiz78eZgzeG2LwgXDsw',
    libraries: 'places'
  },
});

export default {
  name: "ConfigAddress",
  extends: AbstractStep,
  data(){
    return{
      searchQuery: '',
      selectedAddress: false,
      autocompleteResults: [],
      google_place: '',
      radius: '',
      locations: [],
      establishment: ["establishment"],
      types:["bakery","book_store","clothing_store","convenience_store","department_store","drugstore","electronics_store","furniture_store","grocery_or_supermarket","hardware_store","home_goods_store","laundry","liquor_store","pet_store","pharmacy","shoe_store","shopping_mall","store","supermarket"]
    };
  },
  methods:{
    resetPlace() {
      this.place = null  
      this.selectedAddress = false;
    },
    setPlace(google_place) {
      this.selectedAddress = google_place
      this.place = this.selectedAddress        
    }
  },
  computed: {
    place: {
      get() {
        return (
          this.getStoreAttributeByName("place", this.activeStoreIndex) || ""
        );
      },
      set(value) {
        this.$store.dispatch("stores/setStoreAttribute", {
          activeStoreIndex: this.activeStoreIndex,
          name: "place",
          value: value
        });
      }
    }
  }
};
</script>
