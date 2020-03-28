<script>
import _ from 'lodash'
import {HTTP} from '../../http';
import { mapGetters } from 'vuex'
import { steps } from '@/config'

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
      configStepsContext: 'settings/configStepsContext',
      allStores: 'stores/allStores',
      getStoreByIndex: 'stores/getStoreByIndex',
      getStoreAttributeByName: 'stores/getStoreAttributeByName',
      getOpeningHoursByDay: 'stores/getOpeningHoursByDay'
    }),

    position () {
      const route = this.stepRoutes.find(route => route.name === this.$route.name)

      return _.get(route, 'position', null)
    },

    lastStep () {
      return this.stepRoutes.find(route => route.position === this.position + 1) == null
    },

    storeData () {
      return this.getStoreByIndex(this.activeStoreIndex)
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
      if(this.validate()){
        this.goToStep(this.position + 1)
      }
      
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
      if (this.storeData == null) {
        return
      }

      // TODO: Do something magic with this.storeData
      // ,\"ShopType\":\""+data.locationType+"\"
      let data = this.storeData
      console.log(data)
      let openingAPIData = []

      for (let opening of data.openingHours){
        let openingHourMinute = opening.from.split(":")
        let closingHourMinute = opening.to.split(":")
        let openingData = new Date()
        let closingDate = new Date()

        openingData.setHours(openingHourMinute[0],openingHourMinute[1])
        closingDate.setHours(closingHourMinute[0],closingHourMinute[1])

        let openingAPI = {"DayOfWeek": opening.day,
                          "OpeningHours": openingData.toISOString().slice(0, 19).replace('T', ' '),
                          "ClosingHours": closingDate.toISOString().slice(0, 19).replace('T', ' ')}
        openingAPIData.push(openingAPI)

      }
      console.log(openingAPIData)
      

      HTTP.post("/api/Location",
      {
        "Name":data.place.name,
        "FillStatus":0,
        "UserId":localStorage.userId,
        "SlotSize":parseInt(data.clientsInStore-data.percentageReservations),
        "SlotDuration":data.averageDurationPerClientInMinutes,
        "ShopType":0,
        "Capacity":data.clientsInStore,
        "PlacesId":data.place.id,
        "LocationOpening":openingAPIData
      },{headers: {
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
    },
    validate(){
      let data = this.storeData
      console.log(steps)
      console.log(data)
      let step = steps.find(item => item.position == this.position)
      console.log(step)
      if(step.name == "ConfigOpeningHours"){
        for (let opening of data.openingHours){
          console.log(opening)
          if(!opening.from){
            return false
          }
        }
      }
      
      return true
    }
  }
}
</script>
