<template>
  <el-button type="primary" @click="handleExitClick">退出登录</el-button>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleExitClick = () => {
  localCache.deleteCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style scoped lang="scss"></style>
