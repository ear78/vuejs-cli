<template >
    <div class="">
        <p>{{ quote }}</p>
        <!-- use slot to throw html in between component tags -->
        <slot name="title"></slot>
        <hr>
        <slot name="sub"></slot>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['quote']
    }
</script>

<style media="screen" scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
        background: #313131;
        color: #fff;
    }

    h1 {
        color: lightblue;/* styled slot tag within child component*/
    }
</style>
