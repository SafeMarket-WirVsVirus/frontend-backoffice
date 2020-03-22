<script>
import _ from 'lodash'
import axios from 'axios'
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
      getStoreByIndex: 'stores/getStoreByIndex'
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

      axios.post("https://wirvsvirusretail.azurewebsites.net/api/Location/Create", "{\"name\":\"Test\",\"fillStatus\":12,\"userId\":1}",{headers: {
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
