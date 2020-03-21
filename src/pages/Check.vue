<template>
  <div>
    <div>    
        <p class="error">{{ error }}</p>

        <qrcode-stream @decode="onDecode" @init="onInit" class="scanner" v-if="scanMode" />


        <div v-if="isLoading">Loading</div>

        <div v-if="!scanMode">
            <h2>Result</h2>
            <p><b>Scanned Code</b><br />{{result.code}}</p>
            <p><b>Timeslot</b><br />{{result.timeslot}}</p>
            <p><span :class="isVerifiedClass" v-html="result.description"></span></p>
            <button v-on:click="switchMode">Scan next QR Code</button>
        </div>
        
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'


export default {
    components: { QrcodeStream },
    name: 'Check',
    data () {
        return {
            result: '',
            error: '',
            scanMode: true,
            isLoading: false
        }
    },
    computed: {
        isVerifiedClass: function () {
            if(this.result.isAllowed === true) return 'verify-success';
            return 'verify-error';
        }
    },
    methods: {
        onDecode (result) {
            this.result = this.verifyTicket( result )
            this.scanMode = false;
        },

        verifyTicket ( code ) {
            this.isLoading = true;
            // sleep(1);
            this.isLoading = false;

            return {
                code: code,
                isAllowed: false,
                description: "Customer is to early",
                timeslot: "18 Uhr"
            }
        },

        switchMode () {
            this.scanMode = !this.scanMode;
        },

        async onInit (promise) {
        try {
            await promise
        } catch (error) {
            if (error.name === 'NotAllowedError') {
            this.error = "ERROR: you need to grant camera access permisson"
            } else if (error.name === 'NotFoundError') {
            this.error = "ERROR: no camera on this device"
            } else if (error.name === 'NotSupportedError') {
            this.error = "ERROR: secure context required (HTTPS, localhost)"
            } else if (error.name === 'NotReadableError') {
            this.error = "ERROR: is the camera already in use?"
            } else if (error.name === 'OverconstrainedError') {
            this.error = "ERROR: installed cameras are not suitable"
            } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "ERROR: Stream API is not supported in this browser"
            }
        }
    }

}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
        margin: 10px 0;
    }
    .scanner{
        width: 300px;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
    }
    .verify-success{
        color: green;
    }
    .verify-error{
        color: red;
    }
</style>
