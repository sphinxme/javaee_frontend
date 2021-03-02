<template>
  <div class='side-bar vertical-box'>
    <div class="vertical-box">
      <router-link to="/user">
      <div class="avatar"></div>
      </router-link>
    </div>
    <div style="height: 20px;"/>
    <div class="vertical-box">
      <div class="user-info vertical-box">
        <div class="info-text">dzgg 干事</div>
        <div class="info-text">xxx部门</div>
      </div>
    </div>

    <div style="height: 40px;"/>

    <div class="vertical-box">
      <div class="info-text">今日已搞定事项</div>
      <div class="fixed-num">67</div>
      <div class="info-text">可真是个小天才</div>
    </div>

    <div style="height: 40px;"/>

    <el-card>
      假装有一个日历
      <div style="height: 7rem;width:100%;"/>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>

.side-bar{
  background-color: #409EFF;
  height: 100%;

  // border-top-left-radius: 2em;
  // border-bottom-left-radius: 2em;

  box-shadow: 0px 0px 20px #409EFF;
}

.vertical-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar{
  background-color: white;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.315);
}

.horizontal-box {
  display: flex;
  justify-content: center;

}

.info-text {
  font-size: 15px;
  margin: 3px auto;
  color: white;
}

.fixed-num {
  color: whitesmoke;
  font-size: 50px;
}

</style>
