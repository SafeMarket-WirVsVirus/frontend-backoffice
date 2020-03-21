<template>
  <div>
    <div>
        <input type="text" v-model="ticketNumber"><button v-on:click="verify">Verify</button>
    </div>
    <div>    
        <button v-on:click="scanQRCode">Scan QR Code</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Check',
    data () {
        return {
            ticketNumber: ''
        }
    },
    methods: {
        verify: function() {
            alert(this.ticketNumber);
        },
        scanQRCode: function() {

        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
        margin: 10px 0;
    }
</style>
