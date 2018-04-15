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
