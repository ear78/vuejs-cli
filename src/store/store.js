import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//use of getters to centralize store state 
export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    }
})
