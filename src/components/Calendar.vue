<template>
<div class="calendar">

  <float-card class="all-box" :raw="true">
  <template v-slot:raw-content>
    <float-card class="date-box" :raw="true" :bgColor="$globalStyles.lightForeColor">
      <template v-slot:raw-content>
        <div class="date-line">
        <div
         class="date-circle"
         v-for="day in days"
         :key="day"
        >
          {{day}}
        </div>
        </div>
      </template>
    </float-card>

    mmp
  </template>
  </float-card>
</div>
</template>

<script>
export default {
  created () {

  },
  data () {
    return {
      today: '2021-3-9',
      monday: '2021-3-8',
      days: [8, 9, 10, 11, 12, 13, 14]
    }
  }

}
</script>

<style lang="less" scoped>
.calendar {

  .date-line{
    display: flex;
    justify-content: space-around;

    .date-circle {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;

    }

  }
}
</style>
