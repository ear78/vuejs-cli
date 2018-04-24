<template >
    <div class="">
        <h1>User Edit</h1>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <a href="#data">Go to data</a>
        <div style="height: 700px;background-color:lightgray;">

        </div>
        <p id="data">Some extra data</p>
    </div>

</template>

<script type="text/javascript">
    export default {

    }
</script>
