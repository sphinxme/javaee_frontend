<template>
<div class="project-detail full-stand" :style="{backgroundColor: $globalStyles.lightBgColor}">
<!-- all start -->

  <!-- 最下面的一层是背景 -->
  <!-- z-index = 1 -->
  <!-- upside-box start -->
  <div class="upside-box animated slideInDown" :style="{backgroundColor: $globalStyles.deepBgColor}">

    <!-- detail-box start -->
    <div class="detail-box">

      <!-- left-part start -->
      <div class="left-part">
        <headline :text="projectData.name"/>

        <!-- tags start -->
        <div class="tags">
        <el-tag
          v-for="(tag, i) in projectData.tags"
          :key="tag"
          size="small"
          :type="['', 'success', 'danger'][i%3]"
          effect="dark">
          {{tag}}
        </el-tag>
        </div>
        <!-- tags end -->

        <!-- manager start -->
        <div class="manager">
          负责人: {{projectData.manager.name}}
        </div>
        <!-- manager end -->

      </div>
      <!-- left-part end -->

      <!-- right-part start -->
      <div class="right-part">
        <!-- progress-start -->
        <div class="progress">
            <el-progress type="dashboard" :width=100 :percentage="projectData.progress"></el-progress>
            <p>完成进度</p>
        </div>
        <!-- progress-end -->

      </div>
      <!-- right-part end -->

    </div>
    <!-- detail-box end -->

  </div>
  <!-- upside-box end -->

  <!-- downside-box start -->

  <div class="downside-box" >
  <overlay-scrollbars class="full-stand">
    <div style="height:28%"/>
    <!-- card-box start -->
    <div class="card-box animated fadeInUp">
    <el-row :gutter="20" >

      <!-- multi box start -->
      <el-col :span="18" v-show="!showIssues">

      <!-- desc-box start -->
      <float-card hover="up" style="margin-bottom:20px;">
      <template v-slot:content>
      <overlay-scrollbars style="height: 7.5rem;">
        <div class="card-title">项目描述</div>
        <div>{{projectData.desc}}</div>
      </overlay-scrollbars>
      </template>
      </float-card>
      <!-- desc-box end -->

      <div>
      <el-row :gutter="20">

      <el-col :span="logSpan" >
      <float-card hover="up">
      <template v-slot:content>
        <overlay-scrollbars style="height: 7.5rem;">
        <div class="card-title">日志记录</div>
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                更新 Github 模板
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
        </overlay-scrollbars>
      </template>
      </float-card>
      </el-col>

      <!-- partipants-box start -->
      <el-col :span="8">
      <float-card hover="up">
      <template v-slot:content>
      <overlay-scrollbars style="height: 7.5rem;">
        <div class="card-title">成员</div>

        <div
          class="participant-item"
          v-for="user in projectData.participants"
          :key="user.id"
        >
          <div class="avator all-center">
            <i class="el-icon-user"/>
          </div>
          <div class="username">
            {{user.name}}
          </div>
        </div>
      </overlay-scrollbars>
      </template>
      </float-card>
      </el-col>
      <!-- partipants-box end -->

      </el-row>
      </div>
      </el-col>
      <!-- multi box end -->

      <!-- workflow-box start -->
      <transition name="trans-045">
      <el-col :span="issuesSpan">
      <float-card @click.native="switchIssues()" hover="up">
      <template v-slot:content>
      <overlay-scrollbars :style="showIssues?'':'height: 20rem;'">
        <issues v-if="initSuccess" :projectId="projectData.id"/>
      </overlay-scrollbars>
      </template>
      </float-card>

      </el-col>
      </transition>
      <!-- workflow-box end -->

      <el-col :span="24">
      <float-card hover="up" style="margin-top: 20px;margin-bottom: 20px;">
      <template v-slot:content>
      <overlay-scrollbars style="height: 15rem;">

        资料区

        <div class="all-center">
        <el-upload
          class="upload-demo"
          drag
          :action=" 'http://127.0.0.1:7004/cos/cosfile/upload/project/' + projectData.id"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">文件大小不可超过50MB</div>
        </el-upload>

        <div>
          <div v-for="file in filelist" :key="file.filename">
            <a :href=file.url >{{file.filename}}</a>
            <el-button
              circle
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="deleteFile(file.filename)"
            />
          </div>
        </div>
        </div>
      </overlay-scrollbars>
      </template>
      </float-card>

      </el-col>

    </el-row>
    </div>
    <!-- card-box end -->
    </overlay-scrollbars>
  </div>

  <!-- downside-box end -->

  <div class="header-bar">
    <back-button />
  </div>

<!-- all end -->
</div>
</template>

<script>
import Issues from './Issues.vue'
export default {
  components: {
    Issues
  },
  props: ['id'],
  methods: {
    switchIssues () {
      if (this.showIssues) {
        this.showIssues = false
        this.issuesSpan = 6
      } else {
        this.showIssues = true
        this.issuesSpan = 24
      }
    },
    getFileList () {
      var that = this
      console.log('getFileList: 准备get')
      that.$axios
        .get('http://localhost:7004/cos/cosfile/getlist/project/' + this.projectData.id)
        .then((res) => {
          that.filelist = res.data.data.filelist
        })
    },
    deleteFile (filename) {
      var that = this
      that.$axios
        .delete(
          'http://localhost:7004/cos/cosfile/delete',
          { key: 'project/' + this.projectData.id + '/' + filename }
        )
    }
  },
  data () {
    return {
      initSuccess: false,
      issuesSpan: 6,
      logSpan: 16,
      showIssues: false,
      projectData: {
        id: 0,
        name: '',
        desc: '',
        tags: [],
        manager: {
          id: 0,
          name: ''
        },
        participants: [

        ]
      },
      filelist: []
    }
  },
  created () {
    var that = this
    console.log('ProjectDetail: 我开始加载了')
    console.log('ProjectDetail: 向后台获取数据中')
    this.$axios
      .get('/workflow/project/getFullyPro/' + this.id)
      .then((res) => {
        console.log(res)
        if (!res.data.success) {
          that.$message({
            message: res.data.message,
            type: 'false'
          })
        } else {
          that.projectData = res.data.data.projectData
          console.log('ProjectDetail: 数据要完了')
          that.initSuccess = true
          that.$axios
            .get('http://localhost:7004/cos/cosfile/getlist/project/' + this.projectData.id)
            .then((res) => {
              that.filelist = res.data.data.filelist
            })
        }
      })

    /*
    this.projectData = {
      id: 1,
      name: '未命名项目',
      desc: '项目描述不知道不知道不知道',
      tags: [
        '飞行计划',
        '宣传部',
        'dzgg'
      ],
      manager: {
        id: 100,
        name: '第100只dzgg'
      },
      participants: [
        { id: 101, name: '第101只dzgg' },
        { id: 102, name: '第102只dzgg' },
        { id: 103, name: '第103只dzgg' },
        { id: 104, name: '第104只dzgg' }
      ],
      progress: 75
    } */
  }
}

</script>

<style lang="less" scoped>
.project-detail {
  position: relative;
  // z-index: 1;
}

.upside-box {
  position: absolute;
  top: 0%;
  height: 40%;
  width: 100%;
  padding: 40px;

  .detail-box {
    display: flex;
    justify-content: space-between;

    .left-part {

      .el-tag {
          margin-right: 0.5rem;
          font-weight: 100;
      }

      .manager{
        color: aliceblue;
        font-weight: 100;
        margin-top: 0.5rem;
      }
    }

    .right-part {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      /deep/ .el-progress__text {
        color: azure;
      }

      p {
        color: azure;
        text-align:center;
        font-size:x-small;
        margin-top:-11px;
      }

    }
  }

}

.downside-box {
  height: 100%;
  width: 100%;
  z-index: 1;
  padding: 0;
  overflow-y: hidden;

  .card-box {
    // z-index: 3;
    padding: 40px;
    height: 70%;

    .card-title{
      font-weight: 100;
      margin-bottom: 1rem;
    }

    .participant-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      align-items: center;

      .avator {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        background-color: #1F2330;
        color: azure;
      }
      .username {
        font-weight: 100;
      }
    }
  }
}

.header-bar {
  top: 0%;
  position: absolute;
  z-index: 1;
  height: 3rem;
}

.trans-045 {
  transition: all 0.45s;
}

</style>
