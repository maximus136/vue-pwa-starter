import Vue from 'vue';
import Main from './app/Main.vue';
import store from './store';
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/scss/font-awesome.scss';
import './index.scss';

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  routes: []
});

export default new Vue({
  el: '#root',
  router,
  store,
  render: h => h(Main)
});
(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
})();
