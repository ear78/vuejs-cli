<template>
    <div class="">
        <Header></Header>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>

</template>

<script>
    import Home from './pages/Home.vue';
    import Http from './pages/http.vue';
    import User from './pages/User/User.vue';
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


.slide-enter-active {
    transition: opacity 1.5s ease-out;
    opacity: 1;
    animation: slide-in 1.25s ease-out forwards;
}

.slide-enter {
    opacity: 0;
}

@keyframes slide-in {
    0% {
        transform: translateY(30px);
    }
    50% {
        transform: translateY(-2px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
