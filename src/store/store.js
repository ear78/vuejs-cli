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
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
        increment: (context, payload) => {
            context.commit('increment', payload);
        },
        decrement: context => {
            context.commit('decrement');
        },
        asyncIncrement: (context, payload) => {
            setTimeout(() => {
                context.commit('increment', payload)
            }, 3000)
        },
        asyncDecrement: (context, payload) => {
            setTimeout(() => {
                context.commit('decrement', payload.by);
            }, payload.duration)
        }
    }
})
