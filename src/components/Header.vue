<template>
    <header>
        <ul>
            <li v-for="item in menu"><router-link :to="item" >{{item}}</router-link></li>
            <!-- <li><router-link to="/user">Users</router-link></li> -->
        </ul>
    </header>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                menu: ['Home', 'Users']
            }
        }
    }
</script>
