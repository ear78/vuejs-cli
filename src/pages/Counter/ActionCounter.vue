<template lang="html">
    <div class="">
        <h1>I am an Action Counter</h1>

        <ActionResult></ActionResult>

        <button type="button" name="button" @click="asyncIncrement">+</button>
        <button type="button" name="button" @click="asyncDecrement">-</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import ActionResult from './ActionResult.vue';

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
