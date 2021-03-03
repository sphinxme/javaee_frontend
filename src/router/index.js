import Vue from 'vue'
import VueRouter from 'vue-router'

// 页面导入
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Board from '../views/Board.vue'
import UserCenter from '../views/UserCenter.vue'
import Issues from '../views/Issues.vue'

//
import My from '../views/My.vue'
import MyProjects from '../components/My/MyProjects.vue'
import MyIssues from '../components/My/MyIssues.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/board', component: Board },
  { path: '/user', component: UserCenter },
  // { path: '/issues', component: Issues },
  {
    path: '/my',
    component: My,
    children: [
      { path: '/my/myprojects', component: MyProjects },
      { path: '/my/myissues', component: MyIssues },
      { path: '/my/issue-details/:id', component: Issues }
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
