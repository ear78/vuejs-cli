<template>
    <section class="http">
        <h1>{{ title }}</h1>
        <div class="">
            <label>Username</label>
            <input type="text" name="" value="" v-model="user.username">
        </div>
        <div class="">
            <label>EMail</label>
            <input type="text" name="" value="" v-model="user.email">
        </div>
        <button type="button" name="button" @click="submit">Submit</button>
        <hr>
        <button type="button" name="button" @click="getData">Get Data</button>
        <ul>
            <li v-for="user in users">{{ user.username}} -  {{user.email}}</li>
        </ul>
    </section>

</template>

<script>
    export default {
        data() {
            return {
                title: 'Http',
                user: {
                    username: '',
                    email: ''
                },
                users: []
            }
        },
        methods: {
            submit(){
                console.log(this.user)
                let user = this.user;

                this.$http.post('', user)
                    .then( (response) => {
                        console.log(response)
                    }, error => {
                        console.log(error)
                    });
            },
            getData(){
                //using empty string for url because of global setup
                this.$http.get('')
                    .then( (response) => {
                        console.log(response)
                        return response.json();
                    })
                    .then( data => {
                        const resultArr = [];
                        for(let key in data){
                            resultArr.push(data[key])
                            // console.log(data[key])
                        }
                        console.log(resultArr)
                        this.users = resultArr;
                    })
            }
        }
    }
</script>

<style media="screen" scoped>
    .http {
        background: tomato;
        color: #fff;
    }
</style>
