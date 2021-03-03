<template>
  <div class="issues">
    <h2 class="title">{{title}}</h2>
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

    <!-- 新建事项对话框  -->
    <div class="dialog" >
      <el-dialog title="新建事项"  :visible.sync="Visible">
      <div >
      <el-form v-loading="loading" label-width="80px">
          <!-- 新建Issue表单 -->

          <el-form-item label="事项名称">
          <el-input v-model="newIssue.issue_name" placeholder="事项名称"></el-input>
          </el-form-item>

          <el-form-item label="起止日期">
            <el-date-picker
              v-model="newIssue.time"
              type="daterange"
              align="center"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>

          <el-form-item label="总负责人">
            <el-input v-model="newIssue.manager" placeholder="总负责人"/>
          </el-form-item>

          <el-form-item label="事项描述">
            <el-input
              type="textarea"
              autosize
              placeholder="事项描述"
              v-model="newIssue.desc"
            />
          </el-form-item>

          <!-- 子事项列表 -->
          <el-table

            :data="newIssue.sub_issues"
            max-height="200"
          >
            <el-table-column prop="name"  label="子事项" />
            <el-table-column prop="manager" label="负责人" />
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  round
                  size="mini"
                  @click="deleteSubIssue(scope.$index)"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <div class="sub-issue-input">
            <el-input v-model="newSubIssue.name" width="200px" placeholder="请输入事项名称"/>
            <el-input v-model="newSubIssue.manager" placeholder="请输入负责人"/>
            <div class="add-issue-box">
              <el-button @click="createSubIssue" type="primary" size="mini" circle icon="el-icon-plus"/>
              <div>添加子事项</div>

            </div>
          </div>
      </el-form>

        </div>
      <div slot="footer" class="dialog-footer">
          <el-button @click="Visible = false">取 消</el-button>
          <el-button type="primary" @click="submitIssue">确 定</el-button>
      </div>
      </el-dialog>
    </div>
    <!-- 新建事项对话框  -->

    <el-button @click="Visible = true" >+++</el-button>
  </div>
</template>

<script>
import IssueDetail from '../components/Issues/IssueDetail.vue'
import { toDataString } from '../utils/function/utils'

export default {
  components: { IssueDetail },
  data () {
    return {
      loading: false,
      Visible: false,
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
          // { name: '', manager: '' }
        ]
      },
      newSubIssue: {
        name: '',
        manager: ''
      }

    }
  },
  props: [
    // rootIssueId
  ],
  created: function () {
    console.log(this.$route.params.id)
  },
  methods: {
    addList () {
      this.stepList.push({
        title: '步骤' + (this.stepList.length + 1),
        description: '这是一段很长很长很长的描述性文字'
      })
    },
    createSubIssue () {
      this.newIssue.sub_issues.push(this.newSubIssue)
      this.newSubIssue = { name: '', manager: '' }
    },
    deleteSubIssue (index) {
      this.newIssue.sub_issues.splice(index, 1)
    },
    submitIssue () {
      console.log(this.newIssue)
      // this.Visible = false
      console.log(toDataString(this.newIssue.time[0]))
      // 在此上传
      // Loading.service({ body })
      console.log(this.loading)
      this.loading = true
      console.log('改了啊' + this.loading)
    }
  }
}
</script>

<style lang='less' scoped>

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.issues{
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

.sub-issue-input {
  display: flex;
  div{
    margin: 10px;
  }
}

.add-issue-box {
  min-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
