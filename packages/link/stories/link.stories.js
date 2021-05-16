import HwLink from '../src/link.vue'

export default {
  title: 'HwLink',
  component: HwLink
}

export const Link = _ => ({
  components: { HwLink },
  template: `
    <div>
      <Hw-link :disabled="false" href="http://www.baidu.com">baidu</Hw-link>
    </div>
  `
})