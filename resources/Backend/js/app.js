// vue import and use
import Vue from 'vue'

// VueRouter import
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// App.vue file import
import App from  './App.vue'

//Routes folder import
import route from  './Routes'
const router = new VueRouter({
    mode: 'history',
    routes: route,
    linkActiveClass: 'active'
});


const vue = new  Vue({
    el: '#app',
    components: {App},
    router,
});


