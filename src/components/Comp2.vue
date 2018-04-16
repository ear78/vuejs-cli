<template>
    <div class="comp2">
        <h1>{{title}}</h1>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <button type="button" name="button" @click="editAge">edit age</button>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['name', 'userAge'],
        data: function(){
            return {
                title: 'This is comp1'
            }
        },
        methods: {
            editAge(){
                this.userAge = 30;
                this.$emit('ageWasChanged', this.userAge);
            }
        }
    }
</script>

<style media="screen" scoped>
    .comp2 {
        background: lightyellow;
    }
</style>
