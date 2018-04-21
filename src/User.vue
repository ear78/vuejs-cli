<template>
    <div>
        <h1>I'm a user view</h1>
        <p>Loaded ID: {{ id }}</p>
        <button type="button" name="button" @click="navigateToHome">Back To Home</button>
    </div>

</template>

<script type="text/javascript">
    export default {
        data: function(){
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            //using watch to have app watch when route changes to update component 
            '$route'(to, from){
                this.id = to.params.id;
            }
        },
        methods: {
            navigateToHome(){
                //using $router to push route onto browser stack
                this.$router.push('/')
            }
        }
    }
</script>
