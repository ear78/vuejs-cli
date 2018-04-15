<template>
    <div class="comp2">
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
    .comp2 {
        background: lightyellow;
    }
</style>
