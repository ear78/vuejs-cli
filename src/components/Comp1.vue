<template>
    <div class="comp1">
        <h1>{{title}}</h1>
        <p>User Name: {{ name }}</p>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['name'],
        data: function(){
            return {
                title: 'This is comp1'
            }
        }
    }
</script>

<style media="screen" scoped>
    .comp1 {
        background: gainsboro;
    }
</style>
