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
        <hr>
        <button type="button" name="button" @click="fetchAnotherUser">Fetch Another User</button>
        <ul>
            <li v-for="u in moreUsers">{{ u.firstName }}&nbsp;{{ u.lastName }} - {{ u.email }}</li>
        </ul>

        <Thankyou v-if="isShowing" @closeModal="isShowing = false"></Thankyou>
    </div>
</template>

<script>
import Thankyou from '../../components/Thankyou.vue';

export default {
    data(){
        return {
            anotherUser: {
                firstName: '',
                lastName: '',
                email: ''
            },
            moreUsers: [],
            isShowing: false
        }
    },
    components: {
        Thankyou: Thankyou
    },
    methods: {
        submitHttp2(){
            let url = 'https://simple-crud-db835.firebaseio.com/userData.json';
            //post request with vue resource
            this.$http.post(url, this.anotherUser)
                .then((response) => {
                    console.log(response);
                }, error => {
                    console.log('error');
                })
                this.isShowing = true;
                this.anotherUser.firstName = '';
                this.anotherUser.lastName = '';
                this.anotherUser.email = '';
        },
        fetchAnotherUser(){
            let url = 'https://simple-crud-db835.firebaseio.com/userData.json';
            //get request with vue resource
            this.$http.get(url)
                .then((response) => {
                    console.log(response)
                    return response.json();
                })
                .then((data) => {
                    const resultArr = []
                    console.log(data)
                    for(let key in data){
                        resultArr.push(data[key]);
                    }
                    console.log(resultArr)
                    this.moreUsers = resultArr;
                })
        }
    }

}
</script>

<style lang="css">
</style>
