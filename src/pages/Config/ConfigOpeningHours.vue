<template>
  <div>
    <p>Öffnungszeiten</p>

    <div>
      <div role="tablist">
        <b-card no-body class="mb-1" v-for="(day, index) in days" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle="'accordion-' + index" variant="info">{{day}}</b-button>
          </b-card-header>
          <b-collapse :id="'accordion-' + index" :visible="index===0" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="8:00" />
                    <div class="input-group-append">
                      <span class="input-group-text" :id="'from-' + index" :key="index">Uhr</span>
                    </div>
                    <div>bis</div>
                    <input type="text" class="form-control" placeholder="20:00" />
                    <div class="input-group-append">
                      <span class="input-group-text" :id="'to-' + index" :key="index">Uhr</span>
                    </div>
                  </div>
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

export default {
  name: "ConfigOpeningHours",
  extends: AbstractStep,

  data() {
    const days = [
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
      "Sonntag"
    ];

    return {
      days
    };
  }
};
</script>
