<template>
  <div>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">主页面</router-link>
    <router-view></router-view>
  </div>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import getHome from './service/modules/home'

onMounted(() => {
  getHome()
})
</script>

<style scoped lang="scss"></style>
