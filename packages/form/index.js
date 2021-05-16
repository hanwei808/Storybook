import HwForm from './src/form.vue'

HwForm.install = Vue => {
  Vue.component(HwForm.name, HwForm)
}
console.log('test')
export default HwForm
