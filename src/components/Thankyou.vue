<template lang="html">
    <transition name="modal">
        <div class="thanks-modal">
            <span class="close-btn" @click="$emit('closeModal')">X</span>
            <div class="desc-box">
                <h1>Thanks for signing up!</h1>
            </div>

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

    .desc-box {
        width: 80%;
        height: 15%;
        background: #fff;
        color: #000;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        text-transform: uppercase;
        font-size: .9em;
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
        transform: scale(.7);
    }

    .modal-leave {
        opacity: 1;
        transform: scale(.9);
    }

    .modal-leave-active,
    .modal-enter-active {
        transition: all .3s ease-out;
    }

</style>
