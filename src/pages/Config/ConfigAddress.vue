<template>
  <div>
    <location-search></location-search>

    <div class="form-group">
      <button type="button" class="btn btn-secondary" @click="backHome">Zurück</button>
      <button type="button" class="btn btn-primary float-right" @click="nextStep">Weiter</button>
    </div>

    
  </div>


</template>

<script>
import AbstractStep from "./AbstractStep";
import LocationSearch from "@/components/LocationSearch"

export default {
  name: "ConfigAddress",
  extends: AbstractStep,
  components: { LocationSearch },
  data(){
    return{
      radius: '',
      locations: [],
      types:["bakery","book_store","clothing_store","convenience_store","department_store","drugstore","electronics_store","furniture_store","grocery_or_supermarket","hardware_store","home_goods_store","laundry","liquor_store","pet_store","pharmacy","shoe_store","shopping_mall","store","supermarket"]
    };
  },
  methods:{
  },
  computed: {
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
