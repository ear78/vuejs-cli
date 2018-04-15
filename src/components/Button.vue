<template>
    <button type="button" name="button">{{btnName}}</button>
</template>

<script type="text/javascript">
    export default {
        data: function(){
            return {
                props: ['btnName']
            }
        }
    }
</script>

<style media="screen" scoped>
    button {
        background: #000;
        width: 100px;
        height: 35px;
        color: white;
        border-radius: 3px;
    }
</style>
