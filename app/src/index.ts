import "@babel/polyfill";
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
const main = (window as any)


Vue.config.productionTip = false

const render = async () => {
    //root.textContent = await main.cpu().user

    new Vue({
        el: document.getElementById('root'),
        render: h => h(App)
    })

}

render()