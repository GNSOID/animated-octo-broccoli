<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, Ref } from 'vue'
// 表单数据
const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const router = useRouter()
// 提交表单
const onSubmit = () => {
    router.push('/login')
}

</script>

<template>
    <div class="box">
      <div class="logo-container">
        <img src="../../images/4830/48304213/v2_qa2h05.png" alt="Logo">
      </div>
      <h1 class="title">自家书库</h1>
      <van-button type="warning" class="start-button" @click="$router.push('/login')">开始</van-button>
      <div class="register-link">
        <span>还没有登录?</span>
        <span class="register-link-text" @click="$router.push('/register/step1')">去注册</span>
      </div>
    </div>
  </template>
  
  <style scoped>
  .box {
    background-image: url(../../images/4828/48280107/v2_qa1yhb.jpg);
    background-size: 100% 100%;
  }
  
  .logo-container {
    position: relative;
    top: 1rem;
    left: 0.8rem;
  }
  
  .title {
    color: aliceblue;
    font-size: 1rem;
    position: absolute;
    top: 2.8rem;
    left: 0.8rem;
  }
  
  .start-button {
    width: 2rem;
    position: relative;
    top: 5rem;
    left: 0.9rem;
    border-radius: 0.5rem;
  }
  
  .register-link {
    font-size: 16px;
    color: aliceblue;
    position: absolute;
    top: 7.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .register-link-text {
    color: aqua;
  }
  
  @media screen and (max-width: 480px) {
    /* Styles for small screens */
    .title {
      font-size: 0.8rem;
    }
  
    .start-button {
      width: 100%;
      top: 7rem;
      left: 0;
      margin-top: 1rem;
    }
  
    .register-link {
      font-size: 14px;
      top: 9rem;
    }
  }
  </style>
  