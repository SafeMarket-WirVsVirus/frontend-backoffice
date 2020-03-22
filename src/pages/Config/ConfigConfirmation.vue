<template>
  <div>
    <div>
      <h1>{{ companyName }}</h1>
      <p class="subtitle">wurde erfolgreich angelegt</p>
    </div>
  </div>
</template>

<script>
import AbstractStep from './AbstractStep'

export default {
  name: 'ConfigConfirmation',
  extends: AbstractStep,
  data () {
    return {
      companyName: 'Rewe Göttingen'
    }
  }
}
</script>
