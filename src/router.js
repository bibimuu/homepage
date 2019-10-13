import Vue from 'vue'
import App from './App.vue'
import History from './history.vue'
import Router from 'vue-router'

Vue.use(Router)

new Vue({
    Router
});

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: App
        },
        {
            path: '/History',
            component: History
        }
    ]
});