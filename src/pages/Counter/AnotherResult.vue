<template lang="html">
    <div class="">
        <p>Another Counter: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters([
        'doubleCounter',
        'stringCounter'
    ])
}
</script>

<style lang="css">
</style>
