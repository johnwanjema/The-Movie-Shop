import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import indexRoutes from './router/index';

export default new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }), // scroll to page top
    routes: [
        ...indexRoutes
    ],
});