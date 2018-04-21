<template>
    <div>
        <h1>I'm a user view</h1>
        <button type="button" name="button" @click="navigateToHome">Back To Home</button>
    </div>

</template>

<script type="text/javascript">
    export default {
        data: function(){
            return {}
        },
        methods: {
            navigateToHome(){
                //using $router to push route onto browser stack 
                this.$router.push('/')
            }
        }
    }
</script>
