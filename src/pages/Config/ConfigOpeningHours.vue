<template>
  <div>
    <p>Öffnungszeiten</p>
    <form class="form">
      <div class="form-group" v-for="(day, index) in days" :key="index">
        <day-opening-hours :day="day.name" :daylabel="day.label" :index="index" />      
      </div>
    </form>

    <div class="form-group">
      <button type="button" class="btn btn-secondary" @click="prevStep">Zurück</button>
      <button type="button" class="btn btn-primary float-right" @click="nextStep">Weiter</button>
    </div>
  </div>
</template>

<script>
import AbstractStep from "./AbstractStep";
import DayOpeningHours from "@/components/DayOpeningHours";
import { days } from "@/config";

export default {
  name: "ConfigOpeningHours",
  extends: AbstractStep,
  components: {
    DayOpeningHours
  },
  data() {
    return {
      days
    }
  }
}
</script>
