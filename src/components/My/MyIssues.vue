<template>
  <div class="issues">
    <div>MyIssues</div>
    <div class="table">
      <el-table border :data="datas" max-height="400">
        <el-table-column label="截止时间" prop="dead_time"/>
        <el-table-column label="名称" prop="issue_name"/>
        <el-table-column label="所属项目" prop="project.name"/>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="jumpToDetail(scope.row)" type="text" size="small">查看详情</el-button>
            <el-button @click="completeIssue(scope.row)" type="text" size="small">完成任务</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: [
        {
          issue_id: 124453,
          issue_name: '前期宣发',
          dead_time: '2021-3-2',
          project: { project_id: 12, name: 'meandmydokky' }
        },
        {
          issue_id: 124454,
          issue_name: '前期宣发',
          dead_time: '2021-3-2',
          project: { project_id: 12, name: 'meandmydokky' }
        },
        {
          issue_id: 124455,
          issue_name: '前期宣发',
          dead_time: '2021-3-2',
          project: { project_id: 12, name: 'meandmydokky' }
        }
      ]
    }
  },
  methods: {
    jumpToDetail (row) {
      console.log(row)
      // { path: '/my/issue-details/:id', component: Issues }
      this.$router.push({ path: '/my/issue-details/' + row.issue_id })
    },
    completeIssue (row) {
      this.$message({ type: 'success', message: '删除成功' })
    }

  }
}
</script>

<style>
.table {
  margin:20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
