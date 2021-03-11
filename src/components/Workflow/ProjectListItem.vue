<template>
<float-card :raw="true" hover="hover-down" style="margin-top:20px;" @click.native="onClick()">
<template v-slot:raw-content >
<div class="project-box">

    <div class="logo-box all-center">
        <img
            :src="project.imgPath"
            style="
                color: white;
                height:100%;
                border-top-left-radius:20px;
                border-bottom-left-radius:20px;"
        />
    </div>

    <div class="main-box">

        <div class="left-box">
            <p class="project-name">{{project.name}}</p>
            <div class="tags">
                <el-tag
                    v-for="(tag, i) in project.tags" :key="tag"
                    class="tag" effect="dark" size="small"
                    :type="color[i%3]"
                >
                    {{tag}}
                </el-tag>
            </div>
        </div>
        <div class="right-box">
            <el-progress type="dashboard" :width=75 :percentage="project.progress"></el-progress>
            <p style="text-align:center; font-size:xx-small; margin-top:-11px;" >完成进度</p>
        </div>

    </div>

</div>
</template>
</float-card>
</template>

<script>
export default {
  props: ['project'],

  data: () => {
    return {
      color: ['', 'success', 'danger'],
      fproject: {
        id: 1,
        name: '项目名称',
        tags: ['宣传部', '飞行计划', 'dzgg'],
        imgPath: '../../assets/pic/2.png'
      }
    }
  },
  methods: {
    onClick () {
      this.$router.push('/root/workflow/project-detail/' + this.project.id)
    }
  }

}
</script>

<style lang="less" scoped>

.project-box {
    cursor:pointer;
    display: flex;
    justify-content: space-between;

    .logo-box {
        background: #00c6ff;  /* fallback for old browsers */
        background: linear-gradient( 90deg, #308dff, #00c6ff);

        width: 110px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        // border-radius: 20px;
    }

    .main-box {
        flex-grow: 1;
        padding: 14px;
        display: flex;
        justify-content: space-between;

        .left-box{
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .project-name {
                font-size: x-large;
                margin-bottom: 7px;
            }
            .tag {
                margin-right: 5px;
            }

        }
    }
}
</style>
