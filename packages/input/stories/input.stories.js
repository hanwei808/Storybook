import HwInput from '../'

export default {
  title: 'HwInput',
  component: HwInput
}

export const Text = () => ({
  components: { HwInput },
  template: '<Hw-input v-model="value"></Hw-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { HwInput },
  template: '<Hw-input type="password" v-model="value"></Hw-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
