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
