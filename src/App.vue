<template>
    <div class="">
        <!-- <Http></Http> -->
        <!-- <Home></Home> -->
        <Header></Header>
        <router-view></router-view>
    </div>

</template>

<script>
    import Home from './Home.vue';
    import Http from './http.vue';
    import User from './User.vue';
    import Header from './components/Header.vue';

    export default {
        components: {
            Home: Home,
            Http: Http,
            Header: Header,
            User: User
        }
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
