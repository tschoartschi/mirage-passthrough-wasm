import Vue from 'vue'
import {Server} from 'miragejs'
import App from './App.vue'

if (!window.location.href.includes('skipMirage')) {
    new Server({
        environment: 'test',
        routes() {
            this.passthrough();
        },
    });
}

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
