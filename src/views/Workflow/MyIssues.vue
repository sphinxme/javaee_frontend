<template>
<div class="issues animated fadeInRight">
    <!-- <div>MyIssues</div> -->
    <div class="table">
      <el-table border :data="datas" max-height="400">
        <el-table-column label="截止时间" prop="endTime"/>
        <el-table-column label="名称" prop="issueName"/>
        <el-table-column label="所属项目" prop="project.name"/>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="showIssueDetail(scope.row)" type="text" size="small">查看详情</el-button>
            <el-button @click="jumpToDetail(scope.row)" type="text" size="small">查看所属项目</el-button>
            <el-button @click="completeIssue(scope.row)" type="text" size="small">完成任务</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 显示详细内容的对话框 -->
    <el-dialog title="事务详情" :append-to-body="true" :visible.sync="detailDialogVisible">
      <issue-detail :issueId="detailDialogData.issueId"/>
    </el-dialog>
</div>
</template>

<script>
import IssueDetail from '../../components/Workflow/IssueDetail'

export default {
  components: { IssueDetail },
  created () {
    var that = this
    this.$axios
      .get('workflow/issue/myissues')
      .then((res) => {
        console.log(res)
        that.datas = res.data.data.issues
      })
  },
  data () {
    return {
      detailDialogVisible: false,
      detailDialogData: {
        issueId: ''
      },
      datas: [
        {
          issueId: 124453,
          issueName: '前期宣发',
          parent_issueId: 12,
          endTime: '2021-3-2',
          project: { id: 12, name: 'meandmydokky' }
        },
        {
          issueId: 124454,
          issueName: '前期宣发',
          parent_issueId: 12,
          endTime: '2021-3-2',
          project: { id: 12, name: 'meandmydokky' }
        },
        {
          issueId: 124455,
          issueName: '前期宣发',
          parent_issueId: 12,
          endTime: '2021-3-2',
          project: { id: 12, name: 'meandmydokky' }
        }
      ]
    }
  },
  methods: {
    jumpToDetail (row) {
      console.log(row)
      // { path: '/my/issue-details/:id', component: Issues }
      this.$router.push({ path: '/root/workflow/project-detail/' + row.project.id })
    },
    completeIssue (row) {
      var that = this
      this.$axios.post('/workflow/issue/finish/' + row.issueId).then(res => {
        if (res.data.success) {
          that.$message({ type: 'success', message: '成功' })

          that.$axios
            .get('workflow/issue/myissues')
            .then((res) => {
              console.log(res)
              that.datas = res.data.data.issues
            })
        }
      })
    },
    showIssueDetail (row) {
      this.detailDialogData = row
      this.detailDialogVisible = true
    }

  }
}
</script>

<style>
.issues{
    overflow-x: hidden;
}
.table {
  margin:20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
