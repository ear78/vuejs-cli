<template lang="html">
    <div class="">
        <h1>I am an Action Counter</h1>

        <ActionResult></ActionResult>

        <button type="button" name="button" @click="asyncIncrement(100)">+</button>
        <button type="button" name="button" @click="asyncDecrement({by: 50, duration: 1000})">-</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import ActionResult from './ActionResult.vue';

//utilized passing payload in asyncIncrement and passing payload object in asyncDecrement
export default {
    methods: {
        ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
        ])
    },
    components: {
        ActionResult: ActionResult
    }
}
</script>

<style lang="css">
</style>
