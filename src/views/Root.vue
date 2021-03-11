<template>

<div class="root" :style="{backgroundColor: this.$globalStyles.lightBgColor}">

<el-container class="full-stand" :style="css" >

  <!-- all start -->
  <el-aside :width="naviBar.width + 'rem'" class="all-center" style="background-color: #1F2330;overflow: hidden;">

    <navi-bar class="animated fadeInRight faster" :bgColor="css.bgColor" :menuData="naviBar.menuList"/>

  </el-aside>
  <el-main>
    <overlay-scrollbars class="full-stand">
    <transition
      mode="out-in"
      class="main-box"
      enter-active-class="animated fadeInUp faster"
      leave-active-class="animated fadeOutRight faster"
    >

      <router-view  />

    </transition>
    </overlay-scrollbars>
  </el-main>

  <!-- all ended  -->
</el-container>

</div>

</template>

<script>

export default {
  data: () => {
    return {

      css: {
        bgColor: '#F4F7FF',
        foreColor: '#409EFF'
      },

      naviBar: {
        width: 3,
        menuList: [
          { icon: 'el-icon-s-marketing', path: '/root/dashboard', desc: '概览' },
          { icon: 'el-icon-s-custom', path: '/root/workflow', desc: '我的工作' },
          { icon: 'el-icon-s-comment', path: '/root/playground', desc: '广场' }
        ]
      }
    }
  }

}
</script>

<style lang="less" scoped>
.root {
  height: 100%;
  margin: 0;
  padding: 0;
  // background-color: #e4e4e4;
}

</style>
