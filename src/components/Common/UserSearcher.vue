<template>
  <el-select
    width="100px"
    v-model="managerId"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="请输入负责人"
    :remote-method="searchUsers"
    :loading="searchLoading">
    <el-option
      v-for="item in userList"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: [
    'managerId'
  ],
  data () {
    return {
      searchLoading: false,
      userList: []
    }
  },
  methods: {
    searchUsers (query) {
      console.log(query)
      var that = this
      if (query === '') {
        this.userList = []
      } else {
        this.searchLoading = true
        this.$axios.get('/workflow/user/search', { params: { name: query } })
          .then(res => {
            that.userList = res.data.data.userList
            that.searchLoading = false
          })
      }
    }
  }
}
</script>
