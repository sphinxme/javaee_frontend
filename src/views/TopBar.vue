<template>
  <div class="top-bar" >
    <div class="logo">社联logo</div>
    <el-menu  mode='horizontal' :router="true" >
      <el-menu-item index="/home">概览</el-menu-item>
      <el-menu-item index="/my/myprojects">我的</el-menu-item>
      <el-menu-item index="/board">广场</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.top-bar{
  display: flex;
  justify-content: flex-start;
  justify-items: center;
}
.logo{
  color: #409EFF;
  padding: 1.1rem;
  margin-right: 2rem;
  margin-left: 1rem;
}
</style>
