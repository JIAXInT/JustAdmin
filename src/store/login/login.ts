import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import {
  loginRequest,
  getInfoById,
  getMenuByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { mapMenuToRoutes } from '@/utils/map-menus'
import { defineStore } from 'pinia'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async loginAction(account: IAccount) {
      // 获取token等信息
      const res = await loginRequest(account)
      const id = res.data.id
      const token = res.data.token
      localCache.setCache(LOGIN_TOKEN, token)

      // 获取登录用户的详细信息（role信息）
      const infoRes = await getInfoById(id)
      const userInfo = infoRes.data
      this.userInfo = userInfo

      // 根据角色请求菜单
      const menuRes = await getMenuByRoleId(this.userInfo.role.id)
      const userMenus = menuRes.data
      this.userMenus = userMenus

      // 本地缓存
      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenus', userMenus)

      // 动态添加路由
      const routes = mapMenuToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 页面跳转
      router.push('/main')
    },
    loadlocalCacheAction() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        // 动态添加路由
        const routes = mapMenuToRoutes(userMenus)
        routes.forEach((route) => {
          router.addRoute('main', route)
        })
      }
    }
  }
})

export default useLoginStore
