import Vue from 'vue'
import App from './App.vue'
import History from './history.vue'
import smoothScroll from 'vue-smoothscroll'
import router from './router'


Vue.use(smoothScroll)

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')