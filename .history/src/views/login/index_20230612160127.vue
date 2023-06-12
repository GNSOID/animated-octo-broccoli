<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import type { Ref } from 'vue'
// 表单数据
const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const router = useRouter()
// 提交表单
const onSubmit = () => {
  router.push('/home')
}
// 表单验证规则
const rules = {
  username: [
    { required: true, message: '请填写手机号或邮箱' },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: '手机号或邮箱格式不正确,请重新输入',
    }
  ],
  password: [
    { required: true, message: '请填写密码' },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}[\]:;"'<>,.?/|\\]).{8,}$/,
      message: '密码必须包含大写字母、小写字母、数字和特殊符号，并且长度至少为8位'
    }
  ]
}

</script>

<template>
  <div class="box">
    <!-- 头部 -->
    <header class="header">您好</header>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username" placeholder="手机号" :rules="rules.username" class="input-field" />
        <van-field v-model="password" type="password" placeholder="密码" :rules="rules.password" class="input-field" />
      </van-cell-group>
      <div class="btn1">
        <van-button round block type="success" native-type="submit">
          登录
        </van-button>

        <van-button class="btn2" round block type="warning" @click="$router.push('/register/step1')">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  color: black;
  font-size: 30px;
  font-weight: 600;
  top: 0;
  left: 0;
}

.input-field {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  margin-bottom: 12px;
}

.btn2 {
  margin-top: 20px;
}
</style>
