import { type RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  // 1. 初始化本地路由数组
  const localRoutes: RouteRecordRaw[] = []
  // 2. 使用vite的import.meta.glob动态导入router/main目录下的所有路由模块
  // eager: true表示立即加载所有匹配的模块
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })
  // 3. 遍历所有导入的路由模块
  // 将每个模块的默认导出(路由配置)添加到本地路由数组中
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }

  return localRoutes
}

export let firstMenu: any = null
export function mapMenuToRoutes(userMenus: any[]) {
  // 加载本地路由
  const localRoutes = loadLocalRoutes()

  // 根据菜单匹配正确的路由
  const routes: RouteRecordRaw[] = []

  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        // 给route的顶层菜单增加重定向功能
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({
            path: menu.url,
            redirect: route.path
          })
        }

        routes.push(route) // 匹配到的路由添加到最终路由数组中，否则不添加
      }
      //   记录第一个被匹配到的菜单
      if (!firstMenu && route) firstMenu = submenu
    }
  }

  return routes
}

/**
 * 根据当前的路径，匹配需要显示的菜单
 * @param path 当前的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}

export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  // 定义面包屑数组
  const breadCrums: any[] = []
  // 遍历面包屑层级
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        breadCrums.push({ name: menu.name, path: menu.url })
        breadCrums.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadCrums
}
