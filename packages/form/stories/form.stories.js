import HwForm from '../'
import HwFormItem from '../../formitem'
import HwInput from '../../input'
import HwButton from '../../button'

export default {
  title: 'HwForm',
  component: HwForm
}

export const Login = () => ({
  components: { HwForm, HwFormItem, HwInput, HwButton },
  template: `
    <Hw-form class="form" ref="form" :model="user" :rules="rules">
      <Hw-form-item label="用户名" prop="username">
        <!-- <Hw-input v-model="user.username"></Hw-input> -->
        <Hw-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></Hw-input>
      </Hw-form-item>
      <Hw-form-item label="密码" prop="password">
        <Hw-input type="password" v-model="user.password"></Hw-input>
      </Hw-form-item>
      <Hw-form-item>
        <Hw-button type="primary" @click="login">登 录</Hw-button>
      </Hw-form-item>
    </Hw-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
