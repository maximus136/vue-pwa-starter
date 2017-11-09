<template>
  <div id="root">
    <vue-header></vue-header>
      <div class="title">
        <h3>Vue PWA Home</h3>
        <span>Vuex State: isPageMounted: {{isPageMounted}}</span>
      </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';

import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'Home',
  methods: {
    /* use mapActions to have your action methods available in component's 'this'. */
    ...mapActions([
      'updatePageStatus'
    ]),
    networkStatusChange() {
      if (navigator.onLine) {
        // do something.
      } else {
        // else do something.
      }
    }
  },
  created() {
    window.addEventListener('online', this.networkStatusChange);
    window.addEventListener('offline', this.networkStatusChange);
  },
  mounted() {
    this.updatePageStatus(); // call the action using this.
    this.networkStatusChange();
  },
  computed: {
    ...mapState([
      'isPageMounted'
    ])
  },
  components: {
    'vue-header': Header,
    'vue-footer': Footer
  }
};
</script>
