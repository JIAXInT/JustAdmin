import type { IAccount } from '@/types'
import request from '..'

export function loginRequest(account: IAccount) {
  return request.post({
    url: '/login',
    data: account
  })
}

export function getInfoById(id: number) {
  return request.get({
    url: `/users/${id}`
    // headers: {
    //   Authorization: localCache.getCache(LOGIN_TOKEN)
    // }
  })
}

export function getMenuByRoleId(id: number) {
  return request.get({
    url: `/role/${id}/menu`
  })
}
