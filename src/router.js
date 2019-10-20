import Vue from 'vue'
import Top from './top.vue'
import History from './history.vue'
import Production from './production.vue'
import Router from 'vue-router'

Vue.use(Router)

new Vue({
    Router
});

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Top,
        },
        {
            path: '/History',
            component: History,
        },
        {
            path: '/Production',
            component: Production,
        }
    ]
});