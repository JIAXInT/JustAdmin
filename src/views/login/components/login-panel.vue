<template>
  <div class="login-panel">
    <h1 class="title">JustAdmin</h1>

    <!-- tab栏 -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><User /></el-icon>
              <span>账号登录</span>
            </div>
          </template>
          <panel-account ref="accountRef"></panel-account>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </div>
          </template>
          <panel-phone></panel-phone>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 底部 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginBtn"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import panelAccount from './panel-account.vue'
import panelPhone from './panel-phone.vue'
import { localCache } from '@/utils/cache'

const activeName = ref('account')
const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false)
watch(isRemPwd, (newVal) => {
  console.log('记住密码', newVal)
  localCache.setCache('isRemPwd', newVal)
})
const accountRef = ref<InstanceType<typeof panelAccount>>()

const handleLoginBtn = () => {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isRemPwd.value)
    if (isRemPwd.value) {
      console.log('记住密码')
    }
  } else {
    console.log('手机登录')
  }
}
</script>

<style scoped lang="scss">
.login-panel {
  width: 333px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  .login-btn {
    height: 40px;
    margin-top: 10px;
    width: 100%;
  }
}
</style>
