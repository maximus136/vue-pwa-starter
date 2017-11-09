import Vue from 'vue';
import Home from './app/Home.vue';
import store from './store';
import VueRouter from 'vue-router';

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
  render: h => h(Home)
});
(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
})();
