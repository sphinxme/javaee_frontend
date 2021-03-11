
// 本文件引入axios

import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7001'
axios.defaults.headers.common.access_token = 1

// 配置全局拦截器
axios.interceptors.response.use(
  (res) => {
    if (!res.data.success) {
      Vue.prototype.message({
        message: res.data.message,
        type: 'false'
      })
    }
    return res
  },
  (err) => {
    Vue.prototype.message({
      message: '出错了,请检查网络',
      type: 'false'
    })
    return Promise.reject(err)
  }
)

Vue.prototype.$axios = axios
