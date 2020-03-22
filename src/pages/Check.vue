<template>
  <div>
    <h1>Einlass</h1>
    <span class="subtitle">{{store.name}}</span>
    <div class="validation">    
        <qrcode-stream @decode="onDecode" @init="onInit" class="scanner" v-if="scanMode" />

        <div v-if="!scanMode" v-on:click="switchMode">
            <div v-if="isLoading" class="loading"><div class="spinner-border text-primary" role="status"></div></div>
            <div v-if="!isLoading">
                <div class="result" v-if="showPositiveResult">
                    <svg class="bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="#27ae60" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    </svg>
                    <div>Zugang gestattet</div>
                </div>
                <div class="result" v-if="showNegativeResult">
                    <svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="#c0392b" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
                    </svg>
                    <div>Kein Zugang</div>
                </div>
                <div class="result" v-if="showError">
                    <svg class="bi bi-exclamation-triangle" width="1em" height="1em" viewBox="0 0 16 16" fill="#f1c40f" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" clip-rule="evenodd"/>
                        <path d="M7.002 12a1 1 0 112 0 1 1 0 01-2 0zM7.1 5.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 5.995z"/>
                    </svg>
                    <div>Scanner Fehler</div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="d-flex flex-row justify-content-center">
        <div class="p-2 bd-highlight">
            <button v-on:click="manualCheckOut" :disabled="isCheckoutButtonActive">
                <svg class="bi bi-dash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                </svg>
            </button>
        </div>
        <div class="p-2 bd-highlight">{{ checkedInPeople }} / {{ maxPeople }}</div>
        <div class="p-2 bd-highlight">
            <button v-on:click="manualCheckIn" :disabled="isCheckinButtonActive">
                <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                </svg>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import {HTTP} from '../http';

export default {
    components: { QrcodeStream },
    name: 'Check',
    data () {
        return {
            result: '',
            error: '',
            scanMode: true,
            isLoading: false,
            checkedInPeople: 0,
            maxPeople: 10,
            store: {}
        }
    },
    beforeMount() {
        HTTP.get('/api/Location/' + this.$route.params.id)
        .then(response => {
            this.store = response.data;
        })
    },
    computed: {
        isVerifiedClass: function () {
            if(this.result.isAllowed === true) return 'verify-success';
            return 'verify-error';
        },

        isCheckoutButtonActive: function () {
            return this.checkedInPeople < 1 ? true : false;
        },

        isCheckinButtonActive: function () {
            return this.checkedInPeople < this.maxPeople ? false : true;
        },

        showPositiveResult: function () {
            return this.result.isAllowed && this.error == "" ? true : false;
        },

        showNegativeResult: function () {
            return !this.result.isAllowed && this.error == "" ? true : false;
        },

        showError: function () {
            return this.error !== "" ? true : false;
        },
    },
    methods: {
        onDecode (result) {
            this.result = this.verifyTicket( result )
            this.scanMode = false;
        },

        verifyTicket ( code ) {
            this.isLoading = true;
            this.isLoading = false;

            return {
                code: code,
                isAllowed: false
            }
        },

        switchMode () {
            this.scanMode = !this.scanMode;
        },

        manualCheckIn () {
            //Add Backend Checkin here
            this.checkedInPeople++;
        },

        manualCheckOut () {

            //Add Backend Checkout here
            this.checkedInPeople--;
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

<style lang="scss" scoped>

.validation {
    margin: 20px auto;
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #bdc3c7;


    .result{

        text-align: center;
        font-size: 1.3em;

        svg{
            height: 100px;
            width: 100px;
        }

    }

    .loading div{
        width: 50px;
        height: 50px;
    }
}

</style>