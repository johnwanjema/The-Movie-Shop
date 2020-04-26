import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";

import axios from "axios";
window.axios = axios;


import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.config.productionTip = false;

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
