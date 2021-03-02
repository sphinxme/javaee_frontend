// 项目结构:
//    views -> 主页面等
//    components -> 自己编写的组件(估计没有)
//    store ->  全局变量区(估计也就只存个token)
//    utils -> 自己写一些工具函数之类的

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式表
import './assets/css/global.css'

//
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
