<template lang="html">

    <div class="">
        <div class="">
            <label>First Name:</label>
            <input type="text" name="" value="" v-model="anotherUser.firstName">
        </div>
        <div class="">
            <label>Last Name:</label>
            <input type="text" name="" value="" v-model="anotherUser.lastName">
        </div>
        <div class="">
            <label>Email:</label>
            <input type="text" name="" value="" v-model="anotherUser.email">
        </div>
        <button type="button" name="button" @click="submitHttp2">Submit</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            anotherUser: {
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    },
    methods: {
        submitHttp2(){
            let url = 'https://simple-crud-db835.firebaseio.com/userData.json';
            this.$http.post(url, this.anotherUser)
        }
    }

}
</script>

<style lang="css">
</style>
