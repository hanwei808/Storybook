import HwButton from '../src/button.vue'

export default {
  title: 'HwButton',
  component: HwButton
}

export const Button = _ => ({
  components: { HwButton },
  template: `
    <div>
      <p>说明：按钮组件，防抖可以控制在一定时间内连续点击，只有最后一次事件生效。</p>
      <div style="padding:30px 0">
        <span>{{ value?'开启防抖':'关闭防抖'}}</span>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <hw-button @click="handle" :openAntiShake="value" :key="value">提交</hw-button>
      <ul>
        <li v-for="(v,i) in list">{{ i }}</li>
      </ul>
    </div>
  `,
  data() {
    return {
      value: true,
      list: [],
    };
  },
  watch: {
    value(val){
      this.list.length = 0
    },
  },
  methods: {
    handle(evt){
      this.list.push('')
    }
  }
})