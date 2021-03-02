<template>
  <div>
    <div>MyProjects</div>
    <div>
      <el-card :body-style="{ padding: '0px' }">
      <img src="https://www.hualigs.cn/image/6028fb4a1d312.jpg" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>

    </div>
  </div>
</template>

<script>
export default {
  // https://www.hualigs.cn/image/6028fb4a1d312.jpg

  data () {
    return {
      projects: [
        {}
      ]

    }
  }
}
</script>

<style>

</style>
