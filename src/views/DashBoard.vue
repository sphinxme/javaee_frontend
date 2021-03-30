<template>
<div class="dashboard">
  <headline text="Sphinx,  下午好" :textColor="$globalStyles.plaintextColor"/>
  <div class="dashbox">
    <el-row :gutter="20">
      <el-col :span="16">
        <float-card :raw="true">
        <template v-slot:raw-content hover="down">
        <el-calendar>
          <template v-slot:dateCell="{date, data}">

              <date-issue-list :date="date" :data="data"/>

          </template>
        </el-calendar>
        </template>
        </float-card>
      </el-col>

      <el-col :span="8">
        <side-box/>
      </el-col>

      <el-col :span="4">
        <div class="gcard gcard-green">
          <div class="card-text">
            今日已完成事项
          </div>
          <div class="card-num">3</div>
        </div>
      </el-col>

      <el-col :span="4">
        <div class="gcard gcard-red">
          <div class="card-text">
            今日待完成事项
          </div>
          <div class="card-num">2</div>
        </div>
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

.gcard {
  height: 130px;
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px;
  background: linear-gradient(-45deg, #ff5e62, #ff9966);
  transition: all 0.45s;

  &:hover{
    box-shadow: 0 0 30px #ff828e;
  }
}

.gcard-red{
  background: linear-gradient(-45deg, #ff5e62, #ff9966);

  &:hover{
    box-shadow: 0 0 30px #ff828e;
  }
}

.gcard-green{
  background: linear-gradient(135deg, #6dec9c, #19c086);

  &:hover{
    box-shadow: 0 0 30px #3be278;
  }
}

.card-text {
  color: white;
}
.card-num {
  color: white;
  text-align: right;
  font-size: 3rem;
  font-weight: 100;
}
</style>
