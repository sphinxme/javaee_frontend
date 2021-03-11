<template>
<div class="headline" :style="{color: textColor}">
    {{text}}
</div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: 'HEADLINE大标题' },
    textColor: { type: String, default: '#409EFF' }
  }

}
</script>

<style lang="less" scoped>
.headline {
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 3rem;
    font-weight: 100;
    // text-align: center;
}
</style>
