<template>
<el-card :body-style="{ padding: '0px'}" style="margin-top:10px;">
<div class="project-box">

    <div class="logo-box">

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
</el-card>
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
        tags: ['宣传部', '飞行计划', 'dzgg']
      }
    }
  }

}
</script>

<style lang="less" scoped>

.project-box {
    display: flex;
    justify-content: space-between;

    .logo-box {
        background: #00c6ff;  /* fallback for old browsers */
        background: linear-gradient( 90deg, #308dff, #00c6ff);

        width: 110px;
        border-radius: 3px;
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
