/**
 * 缓存类型枚举
 * Local - 本地存储
 * Session - 会话存储
 */
enum CacheType {
  Local,
  Session
}

/**
 * 缓存工具类
 * 封装了localStorage和sessionStorage的操作
 */
class Cache {
  /** 存储对象实例 */
  storage: Storage

  /**
   * 构造函数
   * @param type 缓存类型
   */
  constructor(type: CacheType) {
    this.storage =
      type === CacheType.Local ? window.localStorage : window.sessionStorage
  }

  /**
   * 设置缓存
   * @param key 键名
   * @param value 值
   */
  setCache(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  /**
   * 获取缓存
   * @param key 键名
   * @returns 缓存值或undefined
   */
  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  /**
   * 删除指定缓存
   * @param key 键名
   */
  deleteCache(key: string) {
    this.storage.removeItem(key)
  }

  /**
   * 清空所有缓存
   */
  clearCache() {
    this.storage.clear()
  }
}

// 本地存储实例
const localCache = new Cache(CacheType.Local)
// 会话存储实例
const sessionCache = new Cache(CacheType.Session)

export { localCache, sessionCache }
