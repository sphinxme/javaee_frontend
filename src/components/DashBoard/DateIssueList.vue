<template>
<div class="data-issue-list">

<el-popover placement="top-start" trigger="hover">

  <el-table v-if="initSuccess" :data="issueList">
    <el-table-column width="150" property="issueName" label="事项"/>
    <el-table-column width="150" property="project.name" label="所属项目"/>
  </el-table>

  <div class="cell-box" style="height=100%;" slot="reference">
    {{data.day.split('-').slice(2).join('-')}}
    <div class="dot-box all-center">
      <div v-for="item in issueList" :key="item.issueid" class="dot"/>
    </div>
  </div>
</el-popover>

</div>
</template>

<script>
import { toDataString } from '../../utils/function/utils'
export default {
  props: ['date', 'data'],
  created () {
    console.log('DataIssueList: 我被创建了')
    var that = this
    this.$axios.get('/workflow/issue/myissuesindate', {
      params: { date: toDataString(this.date) }
    }).then(res => {
      that.issueList = res.data.data.issues
      this.initSuccess = true

      console.log('DataIssueList: 我获取到数据了')
      console.log(res)
    })
  },
  data () {
    return {
      initSuccess: false,
      issueList: []
    }
  }
}
</script>

<style lang="less" scoped>
.dot {
  height: 5px;
  width: 5px;
  margin: 1px;
  border-radius: 50%;
  background: red;
}

.cell-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
