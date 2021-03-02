<template>
  <div class="issues">
    <h2 class="title">{{title}}</h2>
    <el-button @click="addList">+</el-button>
    <div class="steps">
      <el-steps :space="150" :active="m" direction="vertical" >
        <el-step v-for='item in issue_parent_list' :key='item.issue_id'
          :title='item.dead_time' :description="item.issue_name">
          <template slot="icon">
            <el-popover
            placement="left"
            trigger="hover"
            >
            <i slot="reference" class="el-icon-star-off"/>
            <issue-detail></issue-detail>
            </el-popover>
          </template>
        </el-step>
      </el-steps>
    </div>
    <div class="dialog">
      <el-dialog title="新建事项" :visible.sync="Visible">
        <div>
          <el-form>
          <!-- 新建Issue表单 -->
          <el-input v-model="newIssue.issue_name" placeholder="事项名称"></el-input>
          <el-date-picker
            v-model="newIssue.time"
            format="yyyy-M-d"
            type="daterange"
            align="center"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-input v-model="newIssue.manager" placeholder="总负责人"/>
          <el-input
            type="textarea"
            autosize
            placeholder="事项描述"
            v-model="newIssue.desc">
          </el-input>
          </el-form>
        </div>
      <div slot="footer" class="dialog-footer">
          <el-button @click="Visible = false">取 消</el-button>
          <el-button type="primary" @click="Visible = false">确 定</el-button>
      </div>
      </el-dialog>
    </div>
    <el-button @click="Visible = true" >+++</el-button>
  </div>
</template>

<script>
import IssueDetail from '../components/Issues/IssueDetail.vue'

export default {
  components: { IssueDetail },
  data () {
    return {
      Visible: true,
      m: 3,
      height: 200,
      title: '这是标题',
      stepList: [
        { title: '步骤1', description: '这是一段很长很长很长的描述性文字' },
        { title: '步骤2', description: '这是一段很长很长很长的描述性文字' },
        { title: '步骤3', description: '这是一段很长很长很长的描述性文字' },
        { title: '步骤4', description: '这是一段很长很长很长的描述性文字' }
      ],
      issue_parent_list: [
        {
          issue_id: 124453,
          issue_name: '前期宣发',
          dead_time: '2021-3-2',
          status: 1
        },
        {
          issue_id: 124454,
          issue_name: '场地布置',
          dead_time: '2021-3-12',
          status: 1
        },
        {
          issue_id: 124455,
          issue_name: '后期总结',
          dead_time: '2021-3-20',
          status: 1
        }
      ],
      newIssue: {
        issue_name: '',
        time: ['', ''],
        manager: '',
        desc: '',
        sub_issues: [
        ]
      }

    }
  },
  methods: {
    addList () {
      this.stepList.push({
        title: '步骤' + (this.stepList.length + 1),
        description: '这是一段很长很长很长的描述性文字'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.issues{
  height: 100%;
  .title{
    text-align: center;
    margin: 20px;
    font-size: larger;
  }
}

.steps{
    // height: 100%;
    display: flex;
    justify-content: center;
}
</style>
