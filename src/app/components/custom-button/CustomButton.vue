<template>
  <button :class= "['button-text', type]" @click="btnClick"><slot></slot></button>
</template>
<script>
export default {
  name: 'CustomButton',
  props: {
    type: {
      type: String,
      default: 'plain'
    },
    onClick: {
      type: Function,
      default() {
        console.log('I am Clicked');
      }
    }
  },
  methods: {
    btnClick() {
      console.log('in click');
      this.onClick();
    }
  }
};
</script>


