<template>
  <div class="issues">
    <div>MyIssues</div>
    <div class="table">
      <el-table border :data="datas" max-height="400">
        <el-table-column label="时间" prop="date"/>
        <el-table-column label="名称" prop="name"/>
        <el-table-column label="所属项目" prop="project"/>
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
        { date: '2021-1-1', name: 'clickout', project: 'meandmydokky' },
        { date: '2021-1-1', name: 'clickout', project: 'meandmydokky' },
        { date: '2021-1-1', name: 'clickout', project: 'meandmydokky' },
        { date: '2021-1-1', name: 'clickout', project: 'meandmydokky' },
        { date: '2021-1-1', name: 'clickout', project: 'meandmydokky' },
        { date: '2021-1-1', name: 'clickout', project: 'meandmydokky' },
        { date: '2021-1-1', name: 'clickout', project: 'meandmydokky' },
        { date: '2021-1-1', name: 'clickout', project: 'meandmydokky' }
      ]
    }
  },
  methods: {
    jumpToDetail (row) {
      console.log(row)
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
