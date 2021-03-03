<template>
  <div>

    <div>
      <project-list-item
        class="animate__fadeInRightBig"
        v-for="project in projects" :key="project.id"
        :project="project"/>

      <el-card :body-style="{ padding: '0px' }">
      <div class="project-box" style="padding: 14px;">

        <p>mmp</p>

        <div class="bottom">
          <el-button round type="primary">操作按钮</el-button>
        </div>

      </div>
      </el-card>

    <h1 class="animate__animated animate__bounce">An animated element</h1>
    </div>
  </div>
</template>

<script>
import ProjectListItem from './MyProjects/ProjectListItem.vue'

export default {

  // 自定义组件
  components: {
    ProjectListItem
  },

  data () {
    return {
      projects: [
        {
          id: 1,
          name: '项目名称',
          tags: ['宣传部', '飞行计划', 'dzgg'],
          progress: 70
        },
        {
          id: 2,
          name: '项目名称',
          tags: ['宣传部', '飞行计划', 'dzgg'],
          progress: 30
        },

        {
          id: 4,
          name: '项目名称',
          tags: ['宣传部', '飞行计划', 'dzgg'],
          progress: 45
        }
      ]

    }
  }
}
</script>

<style lang="less" scoped>

</style>
