<template>
    <el-card shadow="hover">
        <div>登录</div>
        <el-input v-model="user.username" placeholder="用户名" class="input"/>
        <el-input v-model="user.password" placeholder="密码" class="input"/>
        <el-button class="button" type="primary" @click="onSubmit" >登录</el-button>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this)
      console.log('执行登录操作并取回token')

      // 假装执行了后台登录请求操作
      const token = 'this is a token'

      this.$store.commit('setToken', { token: token })
      localStorage.token = token

      this.$message({
        message: '登录成功or失败',
        type: 'success'
      })
      this.$router.push('/home')
    }
  }
}
</script>

// <style lang='less' scoped>
*{
    display: flex;
    justify-content: center;
}
.inputbox{
    padding-top: 1rem;
}
</style>
