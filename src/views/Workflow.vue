<template>
<div class="workflow">
  <headline text="我的工作流" :textColor="$globalStyles.plaintextColor" />
  <div class="all-center">
  <el-radio-group @change="jump" v-model="tabPosition" style="margin-top: 30px;">
    <el-radio-button label="issues">事务</el-radio-button>
    <el-radio-button label="projects">项目</el-radio-button>
  </el-radio-group>
  </div>
  <router-view/>
</div>
</template>

<script>

export default {
  data () {
    return {
      tabPosition: 'issues'
    }
  },
  methods: {
    jump (tabPosition) {
      this.$router.push('/root/workflow/' + tabPosition)
    }
  }

}
</script>

<style>
.workflow {
  height: 100%;
  padding: 20px;
}
.nothing {
    height: 300px;
    background-color: tomato;
}
</style>
