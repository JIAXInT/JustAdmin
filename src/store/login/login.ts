import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import {
  loginRequest,
  getInfoById,
  getMenuByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'

interface ILoginState {
  token: string
  userInfo: any
  userMenu: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) || '',
    userInfo: {},
    userMenu: []
  }),
  actions: {
    async loginAction(account: IAccount) {
      // 获取token等信息
      const res = await loginRequest(account)
      const id = res.data.id
      this.token = res.data.token

      // 本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 获取登录用户的详细信息（role信息）
      const infoRes = await getInfoById(id)
      this.userInfo = infoRes.data
      console.log(this.userInfo.role)

      // 根据角色请求菜单
      const menuRes = await getMenuByRoleId(this.userInfo.role.id)
      this.userMenu = menuRes.data

      // 页面跳转
      router.push('/main')
    }
  }
})

export default useLoginStore
