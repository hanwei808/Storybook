import HwSteps from '../src/steps.vue'

export default {
  title: 'HwSteps',
  component: HwSteps
}

export const Steps = _ => ({
  components: { HwSteps },
  template: `
    <div>
      <p>描述：步骤组件，反应当前步骤执行状态。</p>
      <hw-steps :count='5' :active='2'></hw-steps>
    </div>
  `,
})