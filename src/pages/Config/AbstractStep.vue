<script>
import _ from 'lodash'

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
    }
  }
}
</script>
