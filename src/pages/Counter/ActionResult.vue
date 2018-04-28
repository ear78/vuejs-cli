<template lang="html">
    <div class="">
        <p>Another Counter: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

// mapGetters allows access to getters properties
export default {
    computed: {
        //using spread operator allows us to create our own objects within the computed properties
            ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
    }

}
</script>

<style lang="css">
</style>
