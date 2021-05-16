<template>
  <div style="height: 5000px; border: solid 1px black;" @scroll="handleScroll"></div>
</template>
<script>
function scrollFn() {
  console.log("滚动111");
}

window.onscroll = scrollFn();
// 防抖处理
let flag;
function antiShakeFn(fnName, time) {
  let timeout = null;
  return function (...args) {
    console.log(flag);
    if (!flag) {
      this[fnName](...args);
      return;
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      this[fnName](...args);
    }, time);
  };
}
export default {
  name: "HwScroll",
  props: {
    openAntiShake: {
      type: Boolean,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleScroll() {
      console.log("scroll");
    },
  },
};
</script>

<style>
</style>
