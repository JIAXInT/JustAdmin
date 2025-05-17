import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main' // 默认重定向到main页面
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue') // 登录页面
    },
    {
      path: '/main',
      name: 'main', // 主页面
      component: () => import('../views/main/Main.vue') // 主页面
    },
    {
      path: '/:pathMatch(.*)*', // 匹配所有未定义的路由
      name: 'NotFound', // 定义一个名为NotFound的路由
      component: () => import('../views/not-found/NotFound.vue') // 未找到页面
    }
  ]
})

const localRoutes = [
  {
    path: '/main/analysis/overview', // 分析页面
    component: () => import('../views/main/analysis/overview/overview.vue') // 分析页面
  },
  {
    path: '/main/analysis/dashboard', // 分析页面
    component: () => import('../views/main/analysis/dashboard/dashboard.vue') // 分析页面
  },
  {
    path: '/main/system/user', // 用户管理页面
    component: () => import('../views/main/system/user/user.vue') // 用户管理页面
  },
  {
    path: '/main/system/role', // 角色管理页面
    component: () => import('../views/main/system/role/role.vue') // 角色管理页面
  }
]

router.addRoute('main', localRoutes[0])
router.addRoute('main', localRoutes[1])

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) {
    return '/login' // 如果没有token，跳转到登录页面
  }

  if (to.path === '/main') {
    return firstMenu?.url // 如果有token，跳转到第一个匹配到的菜单
  }
})

export default router
