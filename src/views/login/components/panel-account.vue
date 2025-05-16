<template>
  <div class="panel-account">
    <el-form
      ref="formRef"
      label-width="60px"
      size="large"
      :model="account"
      :rules="rules"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

const loginStore = useLoginStore()

const account = reactive<IAccount>({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

const rules: FormRules = {
  name: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    { min: 3, max: 10, message: '账号长度应为3到10个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 3, max: 10, message: '密码长度应为3到10个字符', trigger: 'blur' }
  ]
}

const formRef = ref<FormInstance>()

// 执行账号的登录逻辑
const loginAction = (isRemPwd: boolean) => {
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      // 获取用户名和密码
      const name = account.name
      const password = account.password
      // 发送网络请求
      loginStore.loginAction({ name, password }).then(() => {
        // 判断是否记住密码
        if (isRemPwd) {
          localCache.setCache('name', name)
          localCache.setCache('password', password)
        } else {
          localCache.deleteCache('name')
          localCache.deleteCache('password')
        }

        ElMessage.success('登录成功')
      })
    } else {
      console.error('验证失败', fields)
      ElMessage.error('请检查表单输入')
    }
  })
}

defineExpose({ loginAction })
</script>

<style scoped lang="scss"></style>
