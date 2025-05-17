<template>
  <div class="header">
    <div class="menu-icon" @click="handleMenuIconClick()">
      <el-icon size="24px">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <header-crumb></header-crumb>
      <header-info></header-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerInfo from './components/header-info.vue'
import headerCrumb from './components/header-crumb.vue'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)
const handleMenuIconClick = () => {
  isFold.value = !isFold.value

  // 发送事件
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
