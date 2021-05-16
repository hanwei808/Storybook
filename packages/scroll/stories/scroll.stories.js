import HwScroll from '../src/scroll.vue'

export default {
  title: 'HwScroll',
  component: HwScroll
}

/* export */ const Scroll = _ => ({
  components: { HwScroll },
  template: `
    <div>
      <p>说明：滚动组件，节流可以控制在一定时间内，只有最后一次事件生效。</p>
      <div style="padding:30px 0">
        <span>{{ value?'开启防抖':'关闭防抖'}}</span>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <hw-scroll>创建列表</hw-scroll>
    </div>
  `,
  data() {
    return {
      value: true
    };
  },
  methods: {
    handle(evt){
      this.list.push('')
    }
  }
})