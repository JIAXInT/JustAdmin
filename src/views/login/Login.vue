<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import loginPanel from './components/login-panel.vue'
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login-bg.svg');
}
</style>
