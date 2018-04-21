<template>
    <header>
        <ul>
            <!-- dynamically built menu -->
            <router-link v-for="i in menu" :to="i.path" active-class="active" tag="li" exact><a >{{i.links}}</a></router-link>
        </ul>
        <ul>
            <router-link to="/user/1">User 1</router-link>
            <router-link to="/user/2">User 2</router-link>
        </ul>
    </header>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                menu: [
                    {
                    path: '/',
                    links: 'Home'
                },
                {
                    path: '/user',
                    links: 'Users'
                },
                {
                    path: '/http',
                    links: 'Http'
                }]
            }
        }
    }
</script>

<style media="screen">
    li.active a {
        color: lightblue;
    }
</style>
