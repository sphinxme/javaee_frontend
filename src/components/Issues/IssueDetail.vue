<template>
  <div class="issue_detail">
      <div class="title">{{issue_details.issue_name}}</div>
      <div class="description">
        <div class="manager" >
            总负责人:
            <span
             v-for="person in issue_details.mananger"
             :key="person.user_id"
            > {{person.name}} </span>
        </div>
        <div class="time">起止时间：{{issue_details.time[0] + '\xa0\xa0'}}  To  {{'\xa0\xa0'  + issue_details.time[1]}}</div>
        <div>任务描述: {{issue_details.description}}</div>
        <!-- <el-date-picker
        v-model="issue_details.time"
        format="yyyy-M-d"
        type="daterange"
        align="center"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker> -->
      </div>
      <div class="sub-issues">
          <el-table
            :data="issue_details.sub_issues"
            style="width: 100%"
            height="250"
            :row-class-name="tableRowClassName"
          >
            <el-table-column
            prop="name"
            label="事项名"
            width="120">
            </el-table-column>
            <el-table-column
            prop="desc"
            label="描述"
            width="240">
            </el-table-column>
            <el-table-column
            prop="master.name"
            label="负责人">
            </el-table-column>
            <el-table-column
            label="状态">
            <template slot-scope="scope">
                {{scope.row.status?"已完成":"未完成"}}
            </template>
            </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
export default {
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
      editable: true,
      issue_details: {
        issue_id: 124453,
        issue_name: '前期宣发',
        time: ['2021-2-1', '2021-3-5'],
        description: '就前期宣发呗',
        mananger: [
          { name: 'dzgg01', user_id: 10000 },
          { name: 'dzgg02', user_id: 10001 },
          { name: 'dzgg03', user_id: 10002 }
        ],
        sub_issues: [
          {
            issue_id: 1244555,
            name: '制作易拉宝',
            desc: '从dzgg那边拿到设计稿，然后dzgg会跟你说到哪个店铺去打印一下，发票抬头记得写dzgg',
            status: 0,
            master: { name: 'dzgg01', user_id: 10000 }
          },
          {
            issue_id: 1244556,
            name: '发推文',
            desc: '让dzgg教你',
            status: 1,
            master: { name: 'dzgg02', user_id: 10001 }
          },
          {
            issue_id: 1244557,
            name: '发传单',
            desc: '你们两只dzgg去， 能多拉几个拉几个',
            status: 0,
            master: { name: 'dzgg01', user_id: 10002 }
          }
        ]
      }
    }
  }

}
</script>

<style lang='less' scoped>
  .el-table .finished {
    background: #ff0000;
  }
</style>
