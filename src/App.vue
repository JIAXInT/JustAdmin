<template>
  <div>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">主页面</router-link>
    <router-view></router-view>
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
