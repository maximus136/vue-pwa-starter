import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';

/*
  import modules from modules folder, if required.
*/

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    isPageMounted: false
  },
  mutations,
  actions,
  modules: {
  },
  strict: debug
});
