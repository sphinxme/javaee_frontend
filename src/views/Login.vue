<template>
    <div class="login">
      <div class="left">
        <p class="first">DEPARTMENT</p>
        <p >MANAGEMENT</p>
        <p>SYSTEM</p>
        <div class="line"></div>
        <p class="words">Welcome to use the Department Management System！</p>
      </div>
        <div class="right">
            <div class="sign">SIGN IN</div>
            <el-input  prefix-icon="el-icon-user-solid" v-model="user.username" placeholder="Please input Username" class="input"/>
            <el-input  prefix-icon="el-icon-lock" v-model="user.password" placeholder="Please input Password" class="input" show-password/>
            <div class="button"><el-button type="primary" @click="onSubmit" round>sign in</el-button>
            </div>
        </div>
    </div>
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

<style lang='less' scoped>
  .login{
    width: 100%;
    height: 100%;
  }
  .left{
    background-image: url("../utils/imgs/3.png");
    background-size:cover;
    width:50%;
    height:100%;
    border:solid;
    border-width:10px;
    float: left;
  }
  p{
    text-indent: 10%;
    margin: 20px;
    color:#B8B8B8;
    font-family: Georgia;
    font-size: 25px;
  }
  .first{
    margin-top: 25%;
  }.line{
    border:#B8B8B8 solid;
    width: 150px;
    margin-left:78px;
  }
  .words{
    font-size: 15px;
  }
  .right{
    width:50%;
    height:100%;
    border:solid;
    border-width:10px;
    border-left:none;
    float:right;
  }
  .sign{
    margin-top:25%;
    margin-left:38%;
    font-size: 30px;
    margin-bottom: 20px;
    font-family: Georgia;
  }
  .input{
    width:80%;
    margin-left:50px;
    margin-top: 15px;
  }
  .button{
    margin-left:60%;
    margin-top:20px;
  }
</style>
