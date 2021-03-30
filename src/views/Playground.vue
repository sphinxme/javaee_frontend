<template>
  <div class="playground">
    <!-- <div style="display:flex;justify-content:space-between;align-items:center;">
    <headline text="广场" :textColor="$globalStyles.plaintextColor"/>
    <i class="el-icon-plus plus" @click="createVisible=true"/>
    </div> -->
    <headline text="广场" :textColor="$globalStyles.plaintextColor"/>
    <div style="height:20px;"/>
    <div class="projects">
    <float-card>
    <template v-slot:content>
      <p class="card-title">全部活动</p>
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
        <div class="radio-box">
        <el-radio-group @change="getProjectsByTag" v-model="currentTag">
          <el-radio label="" border>All</el-radio>
          <el-radio v-for="tag in Alltags" :key="tag" :label="tag" border>{{tag}}</el-radio>
        </el-radio-group>
        </div>
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

    <el-dialog title="新建项目" :append-to-body="true" :visible.sync="createVisible">
      <el-form label-position="right" label-width="80px" :model="newProjectData">

        <el-form-item label="名称">
          <el-input v-model="newProjectData.name"></el-input>
        </el-form-item>

        <el-form-item label="项目描述">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows:7}" v-model="newProjectData.desc"></el-input>
        </el-form-item>

        <el-form-item label="标签">

           <el-select
            v-model="newProjectData.tags"
            multiple
            filterable
            allow-create
            placeholder="请选择或输入标签">
            <el-option
              v-for="item in availableTags"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm()">立即创建</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>

    <el-tooltip content="新建项目" placement="top-end">
    <el-button @click="createVisible=true" class="create-button" style="font-size:2rem;" type="primary" icon="el-icon-plus" circle ></el-button>
    </el-tooltip>

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
      createVisible: false,
      Alltags: [],
      projects: [],
      currentTag: '',
      searchName: '',
      newProjectData: {
        name: '',
        desc: '',
        tags: []
      },
      availableTags: ['宣传部', '飞行计划', 'dzgg']
    }
  }
}
</script>

<style lang="less">
.playground {
  padding: 20px;

  .card-title {
    text-align: center;
    padding-bottom: 20px;
  }

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

  .el-radio.is-bordered+.el-radio.is-bordered {
    margin: 10px !important;
  }

  .el-radio {
    margin-right: 10px !important;
  }

}

.create-button {
  z-index: 1;
  position: fixed;
  right: 7%;
  bottom: 7%;
  font-size: 3rem;
  box-shadow: 0 0 50px #409EFF;

  .el-button.is-circle{
    font-size: 2rem !important;
  }
}

.plus {
  font-size:3rem;
  margin-right: 30px;
  border-radius: 50%;

}

.plus:hover {
  cursor: pointer;
}

</style>
