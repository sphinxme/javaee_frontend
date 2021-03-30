<template>
<div class="back-button all-center" @click="$router.go(goto)">
  <i class="el-icon-back animated " :style="'color: ' + color"></i>
</div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    },
    goto: {
      type: String,
      default: -1
    }
  }

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

}

</style>
