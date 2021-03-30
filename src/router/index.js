import Vue from 'vue'
import VueRouter from 'vue-router'

// 页面导入
import Root from '../views/Root.vue'
import Workflow from '../views/Workflow.vue'
import DashBoard from '../views/DashBoard.vue'
import Playground from '../views/Playground.vue'
import ProjectDetail from '../views/Workflow/ProjectDetail.vue'

import Login from '../views/Login.vue'
import UserCenter from '../views/UserCenter.vue'

import UserInfo from '../components/UserCenter/UserInfo.vue'
import Department from '../components/UserCenter/Department.vue'

//
import MyProjects from '../views/Workflow/MyProjects.vue'
import MyIssues from '../views/Workflow/MyIssues.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/root' },
  { path: '/login', component: Login },
  { path: '/root/workflow/project-detail/:id', component: ProjectDetail, props: true },
  {
    path: '/root',
    redirect: '/root/dashboard',
    component: Root,
    children: [
      {
        path: '/root/workflow',
        redirect: '/root/workflow/issues',
        component: Workflow,
        children: [
          { path: '/root/workflow/projects', component: MyProjects },
          { path: '/root/workflow/issues', component: MyIssues }
        ]
      },
      { path: '/root/dashboard', component: DashBoard },
      { path: '/root/playground', component: Playground }
    ]
  },
  {
    path: '/user',
    component: UserCenter,
    redirect: '/user/info',
    children: [
      { path: '/user/info', component: UserInfo },
      { path: '/user/department', component: Department }
    ]
  }

]

const router = new VueRouter({
  routes
})

// 挂载路由导航卫士

router.beforeEach((to, from, next) => {
  // 直接放行列表
  if (to.path === '/login') { return next() }

  // 如果没有token 跳转登录
  const token = localStorage.getItem('token')
  if (!token || token === 'null' || token === '') { return next('/login') }

  return next()
})

export default router
