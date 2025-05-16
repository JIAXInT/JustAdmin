import { localCache } from '@/utils/cache'
import { BASE_URL, TIMEOUT } from './config'
import Request from './request/index'
import { LOGIN_TOKEN } from '@/global/constants'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  // 请求拦截器
  interceptors: {
    requestSuccessFn: (config) => {
      // 给每个请求都携带token
      config.headers.Authorization = `Bearer ${localCache.getCache(LOGIN_TOKEN)}`
      return config
    }
  }
})

export default request
