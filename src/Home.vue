<template>
    <div class="parent">
        <h1>{{title}}</h1>
        <button type="button" name="button" @click="changeName">Change Names</button>

        <Comp1 :name="name" @nameWasReset="name = $event"></Comp1>
        <Comp2 :name="name2"></Comp2>
    </div>
</template>

<script type="text/javascript">
    import Comp1 from './components/Comp1.vue';
    import Comp2 from './components/Comp2.vue';

    export default {
        data: function(){
            return {
                title: 'This is the home vue/view',
                name: 'Elliot',
                name2: 'Johnny'
            }
        },
        methods: {
            changeName(){
                this.name = 'Alexander';
                this.name2 = 'Twotone'
            }
        },
        components: {
            Comp1: Comp1,
            Comp2: Comp2
        }
    }
</script>

<style media="screen" scoped>
    .parent {
        background: lightBlue;
        padding: 10px;
    }
</style>
