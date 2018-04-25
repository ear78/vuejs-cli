<template lang="html">
    <div>
        <h3>Another Counter VueX Mutations</h3>

        <Result></Result>
        <AnotherResult></AnotherResult>

        <button type="button" name="button" @click="increment">+</button>
        <button type="button" name="button" @click="decrement">-</button>


    </div>
</template>

<script>
import Result from './Result.vue';
import AnotherResult from './AnotherResult.vue';

export default {
    components: {
        Result: Result,
        AnotherResult: AnotherResult
    },
    methods: {
        increment(){
            this.$store.commit('increment');
        },
        decrement(){
            this.$store.commit('decrement');
        }
    }
}
</script>

<style lang="css">
</style>
