<script>
import _ from 'lodash'
import {HTTP} from '../../http';
import { mapGetters } from 'vuex'

export default {
  name: 'AbstractStep',
  data () {
    const configRoute = this.$router.options.routes.find(route => route.name === 'Config')
    const stepRoutes = _.get(configRoute, 'children', [])
    return {
      stepRoutes
    }
  },
  computed: {
    ...mapGetters({
      activeStoreIndex: 'settings/activeStoreIndex',
      allStores: 'stores/allStores',
      getStoreByIndex: 'stores/getStoreByIndex',
      getStoreAttributeByName: 'stores/getStoreAttributeByName'
    }),

    position () {
      const route = this.stepRoutes.find(route => route.name === this.$route.name)

      return _.get(route, 'position', null)
    },

    lastStep () {
      return this.stepRoutes.find(route => route.position === this.position + 1) == null
    }
  },
  methods: {
    /**
     * Go to next step.
     *
     * @returns {void}
     */
    nextStep () {
      if (this.position == null) {
        return
      }

      this.goToStep(this.position + 1)
    },

    /**
     * Go to previous step.
     *
     * @returns {void}
     */
    prevStep () {
      if (this.position == null) {
        return
      }

      this.goToStep(this.position - 1)
    },

    /**
     * Go to the given step position.
     *
     * @param {Number} stepPosition
     * @returns {void}
     */
    goToStep (stepPosition) {
      const targetRoute = this.stepRoutes.find(step => step.position === stepPosition)

      if (targetRoute != null) {
        this.$router.push({ name: targetRoute.name })
      }
    },

    registerAPI(){
      console.log(this.allStores)
      HTTP.post("https://wirvsvirusretail.azurewebsites.net/api/Location/Create", 
      "{\"Name\":\""+this.companyName+"\",\"FillStatus\":0,\"UserId\":"+localStorage.userId+",\"SlotSize\":"+parseInt(this.clientsInStore-this.percentageReservations)+",\"SlotDuration\":"+this.averageDurationPerClientInMinutes+",\"ShopType\":0,\"Capacity\":"+this.clientsInStore+"}",{headers: {
        'Content-Type': 'application/json'
      }})
      .then((response) => {
        console.log(response)
        this.nextStep()
      }).catch((errors) => {
        console.log("Failed - " + errors)
      })

    },
    backHome(){
      this.$router.push('/');
    }
  }
}
</script>
