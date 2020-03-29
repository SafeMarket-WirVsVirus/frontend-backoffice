<template>
    <div class="form-group">
    
        <div v-if="!selectedAddress">
            <label for="exampleInputEmail1">Adresse</label>
            <gmap-place-input :default-place="place" type="supermarket"
                @place_changed="setPlace">
            </gmap-place-input>
        </div>
        
        <div class="card mb-3" v-if="selectedAddress">
        <div class="row no-gutters">
            <div class="col-md-12">
            <div class="card-body">
                <p class="lead">Gewählte Adresse</p>
                <p class="card-text">{{selectedAddress.name}}<br /><small>{{selectedAddress.formatted_address}}</small></p>
                <p><a href="" @click="resetPlace">Andere Adresse wählen</a></p>
            </div>
            </div>
        </div>
        </div> 
    </div>

    
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA6Aqa05ilfR8JBhiz78eZgzeG2LwgXDsw',
    libraries: 'places'
  },
});

export default {
  name: 'LocationSearch',
  data() {
      return {
          searchQuery: '',
          selectedAddress: false,
          autocompleteResults: []
      }
  },
  methods:{
    resetPlace() {
        this.selectedAddress = false;
    },
    setPlace(place) {
        this.selectedAddress = place;

        this.companyName.set("Test");
        this.locationType.set(this.selectedAddress.types[0]);
    }
  },
  computed: {
    companyName: {
      get() {
        return (
          this.getStoreAttributeByName("name", this.activeStoreIndex) || ""
        );
      },
      set(value) {
        this.$store.dispatch("stores/setStoreAttribute", {
          activeStoreIndex: this.activeStoreIndex,
          name: "name",
          value: value
        });
      }
    },
    street: {
      get() {
        return (
          this.getStoreAttributeByName(
            "address.street",
            this.activeStoreIndex
          ) || ""
        );
      },
      set(value) {
        this.$store.dispatch("stores/setStoreAttribute", {
          activeStoreIndex: this.activeStoreIndex,
          name: "address.street",
          value: value
        });
      }
    },
    zip: {
      get() {
        return (
          this.getStoreAttributeByName("address.zip", this.activeStoreIndex) ||
          ""
        );
      },
      set(value) {
        this.$store.dispatch("stores/setStoreAttribute", {
          activeStoreIndex: this.activeStoreIndex,
          name: "address.zip",
          value: value
        });
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
      get() {
        return (
          this.getStoreAttributeByName("placeId", this.activeStoreIndex) || ""
        );
      },
      set(value) {
        this.$store.dispatch("stores/setStoreAttribute", {
          activeStoreIndex: this.activeStoreIndex,
          name: "placeId",
          value: value
        });
      }
    }
}
  
}
</script>
