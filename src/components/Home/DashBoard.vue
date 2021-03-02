<template>
  <div>
    <!-- <top-bar/> -->
    <div>
      <el-row class="card-box" :gutter="20">
        <el-col :span="24">
          <el-card class="card">进行中事项</el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="card">我的xx</el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="card">进行中的项目</el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import TopBar from '../TopBar'
export default {
  // components: {
  //   // TopBar
  // }

}
</script>

<style>
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

.card-box{
  padding: 20px;
}

.card{
  margin-top: 1rem;
  height: 14rem;
}
</style>
