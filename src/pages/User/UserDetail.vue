<template >
    <div >
        <h1>User Details</h1>
        <p>User Loaded ID: {{ $route.params.id }}</p>
        <router-link
            tag="button"
            :to="{name: 'userEdit', params: {id: $route.params.id}}">User Edit</router-link>
    </div>

</template>

<script type="text/javascript">
    export default {

    }
</script>
