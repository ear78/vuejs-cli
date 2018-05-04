<template lang="html">
    <div class="modal-style thankyou-modal">
        <span class="close-btn" @click="$emit('closeModal')">X</span>
        <h1>Thanks for signing up!</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="css" scoped>
    .modal-style {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.8);
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        text-align: center;
        padding-top: 10%;
    }

    .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }
</style>
