<template >
    <div >
        <h1>User Details</h1>
        <p>User Loaded ID: {{ $route.params.id }}</p>
        <!-- using $route.params.id to pass id to route. Query params is also used to show passing query within the url -->
        <router-link
            tag="button"
            :to="{name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'en', q: 100}}">User Edit</router-link>
    </div>

</template>

<script type="text/javascript">
    export default {

    }
</script>
