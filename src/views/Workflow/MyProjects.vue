<template>
<div :class="'my-projects animated' + destoryAnimate ">

    <div>
      <project-list-item

        v-for="(project, i) in projects" :key="project.id"

        :class="'animated fadeInRight' + destoryAnimate"
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
    <el-button @click="createVisible=true" class="create-button" type="primary" icon="el-icon-plus" circle ></el-button>
    </el-tooltip>
</div>
</template>

<script>
import ProjectListItem from '../../components/Workflow/ProjectListItem'

export default {

  // 自定义组件
  components: {
    ProjectListItem
  },
  created () {
    var that = this
    this.$axios.get('/workflow/project/findmy/' + 1 + '/')
      .then((res) => {
        that.projects = res.data.data.projects
      })
  },
  data () {
    return {
      createVisible: false,
      destoryAnimate: '',
      projects: [],
      // create a new project
      newProjectData: {
        name: '',
        desc: '',
        tags: []
      },
      availableTags: ['宣传部', '飞行计划', 'dzgg']
    }
  },

  methods: {
    submitForm () {
      console.log(this.newProjectData)
      var that = this
      this.$axios({
        method: 'put',
        url: '/workflow/project/newProject',
        data: this.newProjectData
      }).then(function (res) {
        console.log(res)
        that.$message({
          message: res.data.message,
          type: res.data.success ? 'success' : 'false'
        })
        that.createVisible = false
        that.$options.methods.resetForm()
        that.$router.push('/root/workflow/project-detail/' + res.data.data.projectId)
      })
    },
    resetForm () {
      this.newProjectData = {
        name: '',
        desc: '',
        tags: []
      }
    }

  },
  beforeDestroy () {
    console.log('我被destoryed了')
    this.destoryAnimate = ' fadeOut'
  }
}
</script>

<style lang="less" scoped>
.my-projects {
  overflow-x: hidden;
  overflow-y: auto;
}

.create-button {
  z-index: 1;
  position: fixed;
  right: 7%;
  bottom: 7%;
  font-size: 2rem;
  box-shadow: 0 0 50px #409EFF;
}
</style>
