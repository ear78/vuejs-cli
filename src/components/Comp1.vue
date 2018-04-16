<template>
    <div class="comp1">
        <h1>{{title}}</h1>
        <p>User Name: {{ name }}</p>
        <p>Age: {{ userAge }}</p>
        <button type="button" name="button" @click="resetName">reset</button>
    </div>
</template>

<script type="text/javascript">
    export default {
        //validate props, can set type and required in an object
        props: {
            name: {
                type: String,
                required: true
            },
            userAge: Number
        },
        data: function(){
            return {
                title: 'This is comp1'
            }
        },
        methods: {
            resetName(){
                this.name = 'Elliot';
                //using $emit to emit event to parent component
                this.$emit('nameWasReset', this.name);
            }
        }
    }
</script>

<style media="screen" scoped>
    .comp1 {
        background: gainsboro;
    }
</style>
