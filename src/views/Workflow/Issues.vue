<template>
  <div class="issues">

    <div class="top-box">
      <div class="card-title">项目工作流</div>
      <el-button
      icon="el-icon-plus"
      @click="Visible = true"
      circle
      />
    </div>
    <div class="steps-box" v-if=initSuccess >
      <el-steps class="steps" :space="150" :active="m" direction="vertical" >
        <el-step v-for='item in issue_parent_list' :key='item.issueId'
          :title='subTime(item.endTime)' :description="item.issueName">
          <template slot="icon">
            <el-popover
            placement="left"
            trigger="hover"
            >
            <i slot="reference" class="el-icon-star-off"/>
            <issue-detail :issueId="item.issueId" />
            </el-popover>
          </template>
        </el-step>
      </el-steps>
    </div>

    <!-- 新建事项对话框  -->
    <div class="dialog" >
      <el-dialog title="新建事项" :append-to-body="true" :visible.sync="Visible">
      <div >
      <el-form v-loading="loading" label-width="80px">
          <!-- 新建Issue表单 -->

          <el-form-item label="事项名称">
          <el-input v-model="newIssue.issueName" placeholder="事项名称"></el-input>
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

              <el-select
                v-model="newIssue.manager"
                multiple
                filterable
                remote
                reserve-keyword
                value-key="id"
                placeholder="请输入负责人"
                :remote-method="searchUsers"
                :loading="searchLoading">
                <el-option
                  v-for="item in userOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item">
                </el-option>
              </el-select>

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
            <el-table-column prop="desc" label="描述" />
            <el-table-column label="负责人">
              <template slot-scope="scope">
                <div v-for="item in scope.row.manager" :key="item.id">
                  {{item.name + ' '}}
                </div>
              </template>
            </el-table-column>
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
            <el-input style="width:100px;" v-model="newSubIssue.name" placeholder="事项名称"/>
            <el-input style="width:150px;" v-model="newSubIssue.desc" placeholder="描述"/>

            <el-select
                style="width:150px;"
                v-model="newSubIssue.manager"
                multiple
                filterable
                remote
                reserve-keyword
                value-key="id"
                placeholder="请输入负责人"
                :remote-method="searchUsers"
                :loading="searchLoading">
                <el-option
                  v-for="item in userOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item">
                </el-option>
              </el-select>

            <!-- <el-input v-model="newSubIssue.manager" placeholder="请输入负责人"/> -->
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
    <!-- 新建事项对话框 -->

  </div>
</template>

<script>
import IssueDetail from '../../components/Workflow/IssueDetail'

export default {
  components: { IssueDetail },
  props: ['projectId'],
  created () {
    var that = this
    console.log('Issues: 我开始加载了')
    console.log('Issues: 向后台获取数据中')
    console.log('Issues: projectId = ' + this.projectId)
    this.$axios
      .get('/workflow/issue/by/project/' + this.projectId + '/outline')
      .then((res) => {
        if (!res.data.success) {
          that.$message({
            message: res.data.message,
            type: 'false'
          })
        }
        console.log(res)
        that.issue_parent_list = res.data.data.issue_outline_list
        that.initSuccess = true
        console.log('数据要完了')
      })
  },
  data () {
    return {
      test: [],
      searchLoading: false,
      initSuccess: false,
      userOptions: [],
      loading: false,
      Visible: false,
      m: 3,
      height: 200,
      title: '这是标题',
      issue_parent_list: null,
      /* [
        {
          issueId: 124453,
          issueName: '前期宣发',
          endTime: '2021-3-2',
          status: 1
        },
        {
          issueId: 124454,
          issueName: '场地布置',
          endTime: '2021-3-12',
          status: 1
        },
        {
          issueId: 124455,
          issueName: '后期总结',
          endTime: '2021-3-20',
          status: 1
        }
      ], */
      newIssue: {
        issueName: '',
        time: ['', ''],
        manager: [],
        desc: '',
        sub_issues: [
          // { name: '', manager: '' }
        ]
      },
      newSubIssue: {
        name: '',
        desc: '',
        manager: [
          // {name:'', id:''}
        ]
      }

    }
  },
  methods: {
    nothing (r) {
      console.log(r)
    },
    addList () {
      this.stepList.push({
        title: '步骤' + (this.stepList.length + 1),
        description: '这是一段很长很长很长的描述性文字'
      })
    },
    searchUsers (query) {
      console.log(query)
      var that = this
      if (query === '') {
        this.userOptions = []
      } else {
        this.searchLoading = true
        this.$axios.get('/workflow/user/search', { params: { name: query } })
          .then(res => {
            that.userOptions = res.data.data.userList
            that.searchLoading = false
          })
      }
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
      this.newIssue.projectId = this.projectId

      // if (this.issue_parent_list) { this.issue_parent_list.push(this.newIssue) }
      // this.Visible = false
      // console.log(toDataString(this.newIssue.time[0]))
      this.Visible = false
      // 在此上传
      this.$axios
        .put('/workflow/issue/parent-issue', this.newIssue)
        .then((res) => {
          console.log(res)
        })
      // Loading.service({ body })
      // console.log(this.loading)
      // this.loading = true
      // console.log('改了啊' + this.loading)
    },
    subTime (timeStr) {
      const s = String(timeStr)
      return s.substr(5)
    }
  }
}
</script>

<style lang='less' scoped>

// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

.issues{
  // position: relative;
  .title{
    text-align: center;
    margin: 20px;
    font-size: larger;
  }
}

.top-box {
  display: flex;
  justify-content: space-between;
  padding-right: 20px;

  .card-title{
      font-weight: 100;
      margin-bottom: 1rem;
    }

}

// .steps-box{
//     height: 100%;
//     display: flex;
//     justify-content: center;
// }

.steps{
  margin-left: 50%;
}

.sub-issue-input {
  display: flex;
  justify-content: space-between;
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

.float-plus {
  position: absolute;
  top: 3%;
  bottom: 3%;
}

</style>
