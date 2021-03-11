<template>
  <div class="issue_detail" v-if=initSuccess >
      <div class="title">{{issueDetail.issueName}}</div>
      <div class="description">
        <div class="manager" >
            总负责人:
            <span
             v-for="person in issueDetail.manager"
             :key="person.id"
            > {{person.name}} </span>
        </div>
        <div class="time">起止时间：{{issueDetail.startTime + '\xa0\xa0'}}  To  {{'\xa0\xa0'  + issueDetail.endTime}}</div>
        <div>任务描述: {{issueDetail.description}}</div>
      </div>
      <div class="sub-issues">
          <el-table
            :data="issueDetail.subIssues"
            style="width: 100%"
            height="250"
            :row-class-name="tableRowClassName"
          >
            <el-table-column
            prop="issueName"
            label="事项名"
            width="120">
            </el-table-column>
            <el-table-column
            prop="description"
            label="描述"
            width="240">
            </el-table-column>
            <el-table-column
            prop="manager[0].name"
            label="负责人">
            </el-table-column>
            <el-table-column
            label="状态">
            <template slot-scope="scope">
              <el-tag effect='dark' :type="scope.row.status?'success':'danger'">
                {{scope.row.status?"已完成":"未完成"}}
              </el-tag>
            </template>
            </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
export default {
  props: ['issueId', 'editable'],
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      // console.log(row)
      if (row.status === '1') {
        // console.log('我被设置成fininshed了')
        return 'finished '
      }
      return ''
    }
  },
  data () {
    return {
      initSuccess: false,
      issueDetail: null
    }
  },
  created () {
    // 假装在这里 通过issueId 向后台要了数据
    // this.issueId
    console.log('IssueDetail: 向后端请求数据 issueId=' + this.issueId)
    // 现在得到数据了
    var that = this
    this.$axios
      .get('/workflow/issue/by/issue/' + this.issueId + '/detail')
      .then((res) => {
        if (!res.data.success) {
          that.$message({
            message: res.data.message,
            type: 'false'
          })
        }
        that.issueDetail = res.data.data.issueDetail
        that.initSuccess = true
      })

    /*
    this.issueDetail = {
      issueId: 124453,
      issueName: '前期宣发',
      startTime: '2021-3-1',
      endTime: '2021-3-11',
      description: '就前期宣发呗',
      manager: [
        { name: 'dzgg01', id: 10000 },
        { name: 'dzgg02', id: 10001 },
        { name: 'dzgg03', id: 10002 }
      ],
      subIssues: [
        {
          issueId: 1244555,
          issueName: '制作易拉宝',
          desc: '从dzgg那边拿到设计稿，然后dzgg会跟你说到哪个店铺去打印一下，发票抬头记得写dzgg',
          status: 0,
          master: { name: 'dzgg01', id: 10000 }
        },
        {
          issueId: 1244556,
          issueName: '发推文',
          desc: '让dzgg教你',
          status: 1,
          master: { name: 'dzgg02', id: 10001 }
        },
        {
          issueId: 1244557,
          issueName: '发传单',
          desc: '你们两只dzgg去， 能多拉几个拉几个',
          status: 0,
          master: { name: 'dzgg01', id: 10002 }
        }
      ]
    } */
  }

}
</script>

<style lang='less' scoped>
  .el-table .finished {
    background: #ff0000;
  }
</style>
