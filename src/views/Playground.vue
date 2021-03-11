<template>
  <div class="playground">

    <headline text="广场" :textColor="$globalStyles.plaintextColor"/>

    <div style="height:20px;"/>
    <div class="projects">
    <float-card>
    <template v-slot:content>
      <p align="center">全部活动</p>
      <div class="search-box">
        <div class="title">活动名称:</div>

        <el-input
          placeholder="请输入标题"
          prefix-icon="el-icon-search"
          v-model="searchName">
        </el-input>
        <el-button type="primary" @click="filterName()" icon="el-icon-search"/>
      </div>
      <div class="tag-box">
        <div class="title">活动标签:</div>

        <el-radio-group @change="getProjectsByTag" v-model="currentTag">
          <el-radio label="" border>All</el-radio>
          <el-radio v-for="tag in Alltags" :key="tag" :label="tag" border>{{tag}}</el-radio>
        </el-radio-group>
      </div>
    </template>
    </float-card>

    <project-list-item

      v-for="(project, i) in projects" :key="project.id"
      v-show="project.display"
      :class="'animated fadeInRight'"
      :style="'animation-delay: ' + i * 0.1 + 's;'"
      :project="project"/>
    </div>

  </div>
</template>

<script>
import ProjectListItem from '../components/Workflow/ProjectListItem'
export default {
  components: {
    ProjectListItem
  },
  methods: {
    filterName () {
      var that = this
      if (this.searchName !== '') {
        this.projects.forEach(project => {
          console.log('search')

          if (project.name.search(that.searchName) !== -1) {
            project.display = true
          } else {
            project.display = false
          }
        })
      } else {
        this.projects.forEach(project => { project.display = true })
      }
    },
    getProjectsByTag () {
      const url = this.currentTag !== '' ? ('/workflow/project/findall/tag/' + this.currentTag) : ('/workflow/project/findall/')
      var that = this
      this.$axios
        .get(url)
        .then((res) => {
          if (!res.data.success) {
            that.$message({
              message: res.data.message,
              type: 'false'
            })
          }
          that.projects = res.data.data.projects
        })
    }
  },
  created () {
    console.log('playground: 我开始加载了')
    console.log('playground: 我开始获取数据了')
    var that = this
    this.$axios
      .get('/workflow/project/findall')
      .then((res) => {
        if (!res.data.success) {
          that.$message({
            message: res.data.message,
            type: 'false'
          })
        }

        that.projects = res.data.data.projects
        console.log('playground: 我获取完数据了')

        that.$axios.get('/workflow/tag/findall')
          .then((res) => {
            that.Alltags = res.data.data.tags
          })
      })
  },
  data () {
    return {
      Alltags: [],
      projects: [],
      currentTag: '',
      searchName: ''
    }
  }
}
</script>

<style lang="less">
.playground {
  padding: 20px;

  .search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .tag-box {
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }

  .title {
    min-width: 100px;
  }

  .el-radio__input{
    display: none !important;
  }

}

</style>
