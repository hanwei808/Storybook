<template>
  <div>
    <el-button type="primary" @click="handleClick">
      <slot></slot>
    </el-button>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
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
  name: "HwButton",
  props: {
    openAntiShake: {
      type: Boolean,
    },
  },
  mounted() {
    flag = this.openAntiShake;
  },
  methods: {
    todo(evt) {
      this.$emit("click", evt);
      evt.preventDefault();
    },
    handleClick: antiShakeFn("todo", 300),
  },
};
</script>

<style>
</style>
