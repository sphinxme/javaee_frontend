<template>
<div>

<div
    class="navi-bar"
    :style="{
        width: width + unit,
        height: height*5.0 + unit,
        flexDirection: vertical?'column':'row',
        backgroundColor: bgColor
    }"
>

    <div
        class="nav-begin"
        :style="{
            flexBasis: height*(activeId+1) + unit,
            borderBottomRightRadius: 0.5 + unit,
            backgroundColor: tabBgColor
        }"
    >
        b
    </div>

    <div
        class="nav-active"
        :style="{
            flexBasis: height + unit,
            backgroundColor: tabBgColor
        }"
    >
    <div
        class="nav-active-mask"
        :style="{
            borderTopLeftRadius: height/2.0 + unit,
            borderBottomLeftRadius: height/2.0 + unit,
            borderTopRightRadius: height/2.0,
            borderBottomRightRadius: height/2.0,
            backgroundColor: bgColor
        }"
    >
        k
    </div>
    </div>

    <div
        class="nav-end"
        :style="{
            flexBasis: height + unit,
            borderTopRightRadius: 0.5 + unit,
            backgroundColor: tabBgColor
        }"
    >
        e
    </div>

    <div
        class="nav-item hover-hand all-center"
        v-for="(item, i) in menuData" :key="item.icon"
        v-show="!(i === activeId)"
        :style="{
            top: height*1.0*(i+1) + unit,
            height: height + unit,
            width: width + unit
        }"
    >
        <el-tooltip :content="item.desc" placement="right">
        <i @click="activeTo(i)" :class="item.icon" style="font-size: x-large;"></i>
        </el-tooltip>
    </div>

    <div
        class="nav-item-active hover-hand animated bounceIn slow all-center"
        v-for="(item, i) in menuData" :key="item.icon + '0'"
        v-show="(i === activeId)"
        :style="{
            top: height*1.0*(i+1) + unit,
            height: height + unit,
            width: width + unit
        }"
    >
        <i :class="item.icon" style="font-size: x-large;"></i>
    </div>

</div>

</div>
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 3 },
    menuData: { type: Array, required: true },
    tabBgColor: { type: String, default: '#1F2330' },
    bgColor: { type: String, default: '#F4F7FF' }
  },
  data: () => {
    return {
      vertical: true,
      activeId: 0,
      unit: 'rem'// 单位 px/em/rem
    }
  },
  computed: {
    height: function () {
      return this.width + 0.1
    },
    normalWidth: function () {
      return this.width + this.unit
    },
    normalHeight: function () {
      return this.height + this.unit
    },
    getBgColor: function () {
      return { backgroundColor: this.bgColor }
    },
    getTabBgColor: function () {
      return { backgroundColor: this.tabBgColor }
    }
  },
  methods: {
    activeTo (i) {
      this.activeId = i
      this.$router.push(this.menuData[i].path)
    }
  }

}
</script>

<style lang="less" scoped>
*{
    overflow-x: hidden;
}

.navi-bar {

    position: relative;
    // background-color: white;
    color: #40a0ff00;

    display: flex;
    flex-direction: column;/* todo:改成变量 */
    justify-content: space-between;
    align-items: stretch;

    .nav-item {
        position: absolute;
        color: white;
        // background-color: violet;
        vertical-align: middle;
        text-align: center;

        z-index: 1;
    }
    .nav-item-active {
        position: absolute;
        color: #409EFF;
        text-align: center;

        z-index: 3;
    }

    .nav-begin {
        // background-color: #1F2330;
        transition: all .45s;
        text-align: center;
    }

    .nav-active {
        // background-color: #1F2330;
        flex-shrink: 0;
        z-index: 2;
        text-align: center;
    }
    .nav-active-mask {
        height: 100%;
        // background-color: white;
        z-index: 2;
        text-align: center;
    }

    .nav-end {
        // background-color: #1F2330;
        flex-shrink: 1;
        flex-grow: 1;
        text-align: center;
    }

}

</style>
