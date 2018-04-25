<template lang="html">
    <div>
        <h1>Counter VueX</h1>

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
            this.$store.state.counter++;
        },
        decrement(){
            this.$store.state.counter--;
        }
    }
}
</script>

<style lang="css">
</style>
