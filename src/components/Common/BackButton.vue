<template>
<div class="back-button all-center" @click="$router.go(-1)">
  <i class="back-icon el-icon-back animated  "></i>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.back-button {
  height: 40px;
  width: 40px;
  // background-color: blanchedalmond;
  font-size: 1.5rem;
  :hover{
    cursor: pointer;
  }

  .back-icon {
    color: rgb(255, 255, 255);
  }

}

</style>
