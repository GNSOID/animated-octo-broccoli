<script setup lang="ts">

</script>

<template>
  <div>
  <h1>注册</h1>
<div class="content">
    <van-form @submit="onSubmit">
      <!-- v-model="password" -->
      <van-field
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <!-- v-model="rpassword" -->
    <van-field
      name="重复密码"
      label="重复密码"
      placeholder="重复密码"
      :rules="[{ required: true, message: '请填重复密码' }]"
    />
    <!-- 注册 -->
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      同意并注册
    </van-button>
  </div>
</van-form>
</div>

    <span class="tip">《注册协议》</span>
  </div>
  
</template>

<style lang="scss" scoped>
.van-form {
    position: relative;
    top: 50px;
    left: 10px;
    font-size: 16px;
}
 .tip{
    position: relative;
    top: 130px;
    left: 130px;
    font-size: 16px;
 }
 .van-cell-group{
        border: 1px rgb(83, 78, 78) solid;
    }
.rp{
  margin-top: 15px;
}
h1{
  margin-left: 20px;
}
</style>