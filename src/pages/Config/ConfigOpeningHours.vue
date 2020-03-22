<template>
  <div>
    <p>Öffnungszeiten</p>

    <div>
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="info">Montag</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="8:00" />
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">Uhr</span>
                    </div>
                    <div>bis</div>
                    <input type="text" class="form-control" placeholder="20:00" />
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">Uhr</span>
                    </div>
                  </div>
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-2 variant="info">Dienstag</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>Öffnungszeiten</b-card-text>
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
  extends: AbstractStep
};
</script>
