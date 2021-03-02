<template>
  <div>
    <top-bar/>
    <el-container>
      <el-aside width="200px" class="aside">
        <div class="side-title">随便列表</div>
        <el-menu :router="true">
          <el-menu-item index='/my/myprojects'>
            <i class="el-icon-menu"></i>
            <span slot="title">我的项目</span>
          </el-menu-item>
          <el-menu-item index='/my/myissues'>
            <i class="el-icon-menu"></i>
            <span slot="title">我的事项</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TopBar from './TopBar.vue'

export default {
  components: { TopBar }

}
</script>

<style lang="less" scoped>
.aside {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.side-title {
  font-size: 15px;
  color: grey;
  padding: 25px;
}
</style>
