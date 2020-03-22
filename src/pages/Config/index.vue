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
  props: {
    context: { type: String, default: 'new' }
  },
  data () {
    let headline

    switch (this.context) {
      case 'edit':
        headline = 'Filiale bearbeiten'
        break
      case 'new':
        // fall through
      default:
        headline = 'Neue Filiale anlegen'
    }

    return {
      headline,
      steps
    }
  }
}
</script>
