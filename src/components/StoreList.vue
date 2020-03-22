<template>
  <div>
    <div class="list-group">
      <div class="list-group-item" v-for="(store, index) in allStores" :key="index">
      <div class="d-flex flex-row align-items-center">
        <div class="p-2 flex-fill">
          <div>
            <h5>{{ store.name }}</h5>
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
          <a class="action d-flex flex-column align-items-center text-secondary">
            <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd"/>
            </svg>
            <div class="m-1">Bearbeiten</div>
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
      allStores: 'stores/allStores'
    })
  },
  beforeMount() {
    HTTP.get('/api/Location/GetLocationByUserId/' + localStorage.userId)
    .then(response => {
      this.$store.dispatch('stores/addNewStores', response.data)
    })
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
