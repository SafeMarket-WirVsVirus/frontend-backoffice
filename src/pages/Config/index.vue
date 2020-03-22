<template>
  <div>
    <div v-show="!lastStep">
      <h1>{{ headline }}</h1>
      <p class="subtitle">Schritt {{ position }} von {{ steps.length }}</p>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { steps } from '@/config'
import AbstractStep from './AbstractStep'

export default {
  name: 'Config',
  extends: AbstractStep,
  data () {
    // @TODO: Replace in condition of context 'new' or 'edit'
    if (this.storeData == null) {
      this.$store.dispatch('stores/addNewStore', {})
    }

    return {
      steps
    }
  },
  computed: {
    headline () {
      let headline

      switch (this.configStepsContext) {
        case 'edit':
          headline = 'Filiale bearbeiten'
          break
        case 'new':
        // fall through
        default:
          headline = 'Neue Filiale anlegen'
      }

      return headline
    }
  }
}
</script>
