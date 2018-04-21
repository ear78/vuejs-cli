<template>
    <div class="parent">
        <h1>{{title}}</h1>
        <button type="button" name="button" @click="changeName">Change Names</button>

        <Comp1 :name="name"
               @nameWasReset="name = $event"
               :userAge="age"
               ></Comp1>
        <!-- using emit() event to change age from child component -->
        <Comp2 :name="name2"
               :userAge="age"
               @ageWasChanged="age = $event"
               ></Comp2>

        <Quote :quote="quoteStr">
            <h1 slot="title">Here is an h1 slotted</h1>
            <h6 slot="sub">Here is an h6 slotted</h6>
        </Quote>
    </div>
</template>

<script type="text/javascript">
    import Comp1 from '../components/Comp1.vue';
    import Comp2 from '../components/Comp2.vue';
    import Quote from '../components/Quote.vue';

    export default {
        data: function(){
            return {
                title: 'This is the home vue/view',
                name: 'Elliot',
                name2: 'Johnny',
                age: 27,
                quoteStr: 'A wonderful quote!!!'
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
            Comp2: Comp2,
            Quote: Quote
        }
    }
</script>

<style media="screen" scoped>
    .parent {
        background: lightBlue;
        padding: 10px;
    }
</style>
