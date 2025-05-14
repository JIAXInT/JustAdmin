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
      component: () => import('../views/main/Main.vue') // 主页面
    },
    {
      path: '/:pathMatch(.*)*', // 匹配所有未定义的路由
      name: 'NotFound', // 定义一个名为NotFound的路由
      component: () => import('../views/not-found/NotFound.vue') // 未找到页面
    }
  ]
})

export default router
