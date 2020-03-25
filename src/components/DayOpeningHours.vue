<template>
  <div class="input-group mb-3">
    <input type="time" class="form-control" value="08:00" v-model="openingHoursFrom" />
    <div class="input-group-append">
      <span class="input-group-text">Uhr</span>
    </div>
    <div>bis</div>
    <input type="time" class="form-control" value="20:00" v-model="openingHoursTo" />
    <div class="input-group-append">
      <span class="input-group-text">Uhr</span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  name: 'DayOpeningHours',
  props: {
    day: { type: String, required: true }
  },
  computed: {
    ...mapGetters({
      activeStoreIndex: 'settings/activeStoreIndex',
      getOpeningHoursByDay: 'stores/getOpeningHoursByDay'
    }),
    openingHoursFrom: {
      get () {
        const openingHours = this.getOpeningHoursByDay(this.day, this.activeStoreIndex)

        return _.get(openingHours, 'from', '')
      },
      set (value) {
        this.$store.dispatch('stores/addOpeningHour', {
          type: 'from',
          activeStoreIndex: this.activeStoreIndex,
          day: this.day,
          value
        })
      }
    },
    openingHoursTo: {
      get () {
        const openingHours = this.getOpeningHoursByDay(this.day, this.activeStoreIndex)

        return _.get(openingHours, 'to', '')
      },
      set (value) {
        this.$store.dispatch('stores/addOpeningHour', {
          type: 'to',
          activeStoreIndex: this.activeStoreIndex,
          day: this.day,
          value
        })
      }
    }
  }
}
</script>
