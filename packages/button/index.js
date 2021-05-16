import HwButton from './src/button.vue'

HwButton.install = Vue => {
  Vue.component(HwButton.name, HwButton)
}

export default HwButton
