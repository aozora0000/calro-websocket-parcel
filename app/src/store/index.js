import Vue from 'vue'
import Vuex from 'vuex'
import { w3cwebsocket } from 'websocket'
import AsyncComputed from 'vue-async-computed'
import createWebSocketPlugin from './plugins/websocket'

const main = window
const socket = new w3cwebsocket('ws://127.0.0.1:3000/ws');
Vue.use(Vuex)
Vue.use(AsyncComputed)

export default new Vuex.Store({
    strict: false,
    //strict: process.env.NODE_ENV !== 'production',
    state: {
        count: 0,
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
        count: state => state.count
    },
    plugins: [createWebSocketPlugin(socket)]
});