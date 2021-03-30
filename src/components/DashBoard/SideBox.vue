<template>
<float-card bgColor="#409EFF" >
<template v-slot:content>
  <div class='vertical-box'>
    <div class="vertical-box">
      <router-link to="/user">
      <div class="avatar">
        <img class="avatar" src="https://s3.ax1x.com/2021/03/09/63xkfe.jpg"/>
      </div>
      </router-link>
    </div>
    <div style="height: 20px;"/>
    <div class="vertical-box">
      <div class="user-info vertical-box">
        <div class="info-text">Sphinx 干事</div>
        <div class="info-text">宣传部 部门</div>
      </div>
    </div>

    <div class="vertical-box">
      <div style="height: 2rem;"/>
      <div class="info-text">今天也要加油鸭!</div>
    </div>
    <div style="height: 20px;"/>
  </div>

</template>
</float-card>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.side-bar{
  background-color: #409EFF;
  height: 100%;
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

.count-text {
  font-size: 13px;
  margin: 3px auto;
  color: white;
  font-weight: 100;
}

.fixed-num {
  color: whitesmoke;
  font-size: 50px;
}

</style>
