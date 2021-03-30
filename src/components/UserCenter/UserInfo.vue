<template>
<div class="user-info">
  <el-drawer
    title="拖拽上传"
    :visible.sync="drawer"
    direction="ttb"
    size="50%"
  >
    <el-upload
      class="avatar-uploader all-center"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
    >
      <i class=" el-icon-plus avatar-uploader-icon"/>
    </el-upload>
  </el-drawer>
  <el-row :gutter="20">
    <el-col :span="12">
    <el-form ref="info" :model="info" label-width="80px">

      <el-form-item label="头像">
        <div class="a-box">
          <el-avatar :size="100" src="https://s3.ax1x.com/2021/03/09/63xkfe.jpg"/>
          <el-button @click="drawer=true" style="margin-left:20px;" type="primary" icon="el-icon-upload">上传头像</el-button>
        </div>
      </el-form-item>

      <el-form-item label="名称">
        <el-input :disabled="editable" v-model="info.name"/>
      </el-form-item>

      <el-form-item label="用户名">
        <el-input :disabled="editable" v-model="info.username"></el-input>
      </el-form-item>

      <el-form-item label="联系方式">
        <el-input :disabled="editable" v-model="info.email"/>
      </el-form-item>
    </el-form>
    </el-col>
  </el-row>

  <el-button type="primary" @click="editable=!editable">{{buttonText[editable?0:1]}}</el-button>
</div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      editable: true,
      info: {
        name: 'sphinx',
        username: 'sphinx',
        email: 'myandmydokky@hotmail.com'
      },
      buttonText: ['编辑', '保存']
    }
  }
}
</script>

<style lang="less">
.a-box {
  display:flex;
  align-items: center;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
