<template>
    <div>
        <h1>{{title}}</h1>
        <Button btnName="Home Btn"></Button>
    </div>
</template>

<script type="text/javascript">
    import Button from './components/Button.vue';

    export default {
        data: function(){
            return {
                title: 'This is the home vue/view'
            }
        },
        components: {
            Button: Button
        }
    }
</script>
