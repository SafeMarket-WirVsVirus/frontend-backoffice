<template>
  <div>
    <p>Öffnungszeiten</p>

    <div>
      <div role="tablist">
        <b-card no-body class="mb-1" v-for="(day, index) in days" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle="'accordion-' + index" variant="info">{{ day.label }}</b-button>
          </b-card-header>
          <b-collapse :id="'accordion-' + index" :visible="index === 0" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <day-opening-hours :day="day.name" :index="index" />
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>

    <div class="form-group">
      <button type="button" class="btn btn-secondary" @click="prevStep">Zurück</button>
      <button type="button" class="btn btn-primary float-right" @click="nextStep">Weiter</button>
    </div>
  </div>
</template>

<script>
import AbstractStep from "./AbstractStep";
import DayOpeningHours from "@/components/DayOpeningHours";

export default {
  name: "ConfigOpeningHours",
  extends: AbstractStep,
  components: {
    DayOpeningHours
  },
  data() {
    const days = [
      {
        label: 'Montag',
        name: 'monday'
      },
      {
        label: 'Dienstag',
        name: 'tuesday'
      },
      {
        label: 'Mittwoch',
        name: 'wednesday'
      },
      {
        label: 'Donnerstag',
        name: 'thursday'
      },
      {
        label: 'Freitag',
        name: 'friday'
      },
      {
        label: 'Samstag',
        name: 'saturday'
      },
      {
        label: 'Sonntag',
        name: 'sunday'
      }
    ]

    return {
      days
    }
  }
}
</script>
