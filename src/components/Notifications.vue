<template>
    <div class="notifications">
        <div v-for="(notification, index) in allNotifications" :key="index" class="alert alert-warning alert-dismissible fade show" role="alert">
            {{notification.message}}
            <button @click="closeNotification" type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Notifications',
    computed: {
        ...mapGetters({
        allNotifications: 'notifications/allNotifications',
        })
    },
    methods: {
        closeNotification: function() {
            
        }
    }
  
}
</script>

<style lang="scss" scoped>
    .notifications{
        padding: 0 20px;
        position: fixed;
        bottom: 100px;
        width: 100%;
        .alert {
            width: 100%;
        }
    }
    

</style>
