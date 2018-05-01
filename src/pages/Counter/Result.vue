<template lang="html">
    <p>Counter is: {{ counter }}</p>
</template>

<script>
export default {
    computed: {
        counter(){
            return this.$store.state.counter.counter;
        }
    }
}
</script>

<style lang="css">
</style>
