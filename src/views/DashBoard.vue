<template>
<div class="dashboard">
  <headline text="Sphinx,  晚上好" :textColor="$globalStyles.plaintextColor"/>
  <div class="dashbox">
    <el-row :gutter="20">
      <el-col :span="16">
        <el-calendar>
          <template v-slot:dateCell="{date, data}">

              <date-issue-list :date="date" :data="data"/>

          </template>
        </el-calendar>
      </el-col>

      <el-col :span="8">
        <side-box/>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import DateIssueList from '../components/DashBoard/DateIssueList.vue'
import SideBox from '../components/DashBoard/SideBox.vue'
export default {
  components: { DateIssueList, SideBox },
  computed: {
    welcomeStr: () => {
      const hour = Date().getHours()
      if (hour <= 2 || hour > 22) {
        return '午夜好'
      } else if (hour > 3 || hour < 6) {
        return '凌晨好'
      } else if (hour < 11) {
        return '早上好'
      } else if (hour < 13) {
        return '中午好'
      } else if (hour < 17) {
        return '下午好'
      } else {
        return '晚上好'
      }
    }
  }

}
</script>

<style lang="less">
.dashboard {
  height: 100%;
  padding: 20px;
}
.dashbox{
  padding-top: 20px;
}

.el-calendar {
  border-radius: 20px;

  .el-calendar-table .el-calendar-day {
    height: 50px !important;
  }

  .el-calendar__body {
    padding: 12px 20px 20px !important;
  }
}
</style>
