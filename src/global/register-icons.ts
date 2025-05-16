import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'

/**
 * @description: 注册Element Plus图标
 * @param {App} app
 * @return {void}
 * @author: justic
 */
function registerIcons(app: App<Element>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default registerIcons
