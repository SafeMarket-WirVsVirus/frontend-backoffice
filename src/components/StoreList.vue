<template>
  <div>
    <div class="list-group">
      <div class="list-group-item" v-for="(store, index) in allStores" :key="index">
      <div class="d-flex flex-row align-items-center">
        <div class="p-2 flex-fill">
          <div>
            <h5>{{ store.id }} - {{ store.place.name }}</h5>
          </div>
          <div>
            <span class="text-primary">{{ store.percentageReservations }}</span> / <span>{{ store.clientsInStore }}</span>
          </div>
        </div>
        <div class="p-2 d-flex flex-row align-items-center">
          <a v-bind:href="'check/' + store.id" class="action d-flex flex-column align-items-center mr-3 text-secondary">
            <svg class="bi bi-check-box" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z" clip-rule="evenodd"/>
            </svg>
            <div class="m-1">Einlass</div>
          </a>
          <a
            href="#"
            class="action d-flex flex-column align-items-center mr-3  text-secondary"
            @click="editStore($event, store.id)"
          >
            <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd"/>
            </svg>
            <div class="m-1">Bearbeiten</div>
          </a>
          <a
            href="#"
            class="action d-flex flex-column align-items-center text-secondary"
            @click="triggerDeleteModal($event, store.id, store.place.name)"
          >
            <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
            </svg>
            <div class="m-1">Löschen</div>
          </a>
        </div>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { HTTP } from '../http'

export default {
  name: 'StoreList',
  computed: {
    ...mapGetters({
      allStores: 'stores/allStores',
      getStoreIndexById: 'stores/getStoreIndexById'
    })
  },
  data(){
    return{
      locationToDelete: 0
    }
  },
  beforeMount() {
    HTTP.get('/api/Location/GetLocationByUserId/' + localStorage.userId)
    .then(response => {
      this.$store.dispatch('stores/addNewStores', response.data)
    })
  },
  methods: {
    editStore (event, storeId) {
      event.preventDefault()

      const storeIndex = this.getStoreIndexById(storeId)

      if (storeIndex != null) {
        this.$store.dispatch('settings/setActiveStoreIndex', storeIndex)
        this.$store.dispatch('settings/setConfigStepsContext', 'edit')
        this.$router.push({ name: 'Config' })
      }
    },
    triggerDeleteModal (event, storeId, storeName) {
      event.preventDefault()
      this.locationToDelete = storeId
      this.$bvModal.msgBoxConfirm('Möchten Sie den Standort "'+storeName+'" wirklich löschen?', {
          title: storeName,
          okVariant: 'danger',
          okTitle: 'Löschen',
          cancelTitle: 'Abbrechen',
          hideHeaderClose: false,
          centered: true
        }).then(value => {
          if(value){
            this.deleteLocation()
          }
        }).catch(() => {
        })      
    },
    deleteLocation(){
      HTTP.delete('/api/Location/' + this.locationToDelete)
      .then(() => {
        this.locationToDelete = 0
        this.$router.go()
      })
    }
  }
}
</script>


<style lang="scss" scoped>

.action{
  svg{
    height: 20px;
    width: 20px;
  }
  font-size: 0.8em;
}


</style>
