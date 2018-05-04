<template lang="html">
    <transition name="modal">
        <div class="thanks-modal">
            <span class="close-btn" @click="$emit('closeModal')">X</span>
            <h1>Thanks for signing up!</h1>
        </div>
    </transition>
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
    .thanks-modal {
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

    .modal-enter,
    .modal-leave-to {
        opacity: 0;
    }

    .modal-leave {
        opacity: 1;
    }

    .modal-leave-active,
    .modal-enter-active {
        transition: opacity .5s ease-out;
    }

</style>
