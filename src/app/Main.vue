<template>
  <div id="root">
    <header></header>
    <transition  name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <footer></footer>
  </div>
</template>

<script>

import Vue from 'vue';

import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'Main',
  methods: {
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
    this.networkStatusChange();
  },
  components: {
    'header': Header,
    'footer': Footer
  }
};
</script>
