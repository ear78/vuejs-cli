<template lang="html">
    <p>Another Counter: {{ counter }}</p>
</template>

<script>
export default {
    computed: {
        counter(){
            return this.$store.getters.doubleCounter;
        }
    }
}
</script>

<style lang="css">
</style>
