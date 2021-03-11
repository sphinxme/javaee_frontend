<template>
  <div class="project-detail full-stand" :style="{backgroundColor: $globalStyles.lightBgColor, padding:'40px'}">
    <headline text="用户中心" :textColor="$globalStyles.plaintextColor"/>
    <div class="main-box">
      <el-row :gutter="20">

      <el-col :span="4">
      <float-card :raw="true">
      <template v-slot:raw-content>
        <el-menu
          :router="true"
          style="border-radius:20px;"
        >
          <el-menu-item index="/user/info">个人信息</el-menu-item>
          <el-menu-item index="/user/avator">更换头像</el-menu-item>
          <el-menu-item index="/user/department">部门信息</el-menu-item>
        </el-menu>
      </template>
      </float-card>
      </el-col>

      <el-col :span="20">
      <float-card>
      <template v-slot:content>
        <router-view/>
      </template>
      </float-card>
      </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.main-box {
  padding-top: 20px;

}

</style>
