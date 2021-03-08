import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        history: []
    },
    getters: {
        history: state => state.history.reverse()
    },
    mutations: {
        SAVE_TEST: (state, payload) => state.history.push(payload)
    }
})

export default store;