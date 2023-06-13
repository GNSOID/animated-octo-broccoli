<script setup lang="ts">
import {ref,computed,Ref} from 'vue'
import { useRouter} from 'vue-router'
const router = useRouter()
const password:any = ref('')
const rpassword:any = ref('')
const btnShow = computed(() =>{
  if(password.value === rpassword.value && password.value !== '' ){
    return false
  }else{
    return true
  }
})
</script>

<template>
  <div>
  <h1>注册</h1>
<div class="content">
    <van-form @submit="onSubmit">
      <van-field
      v-model="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="rpassword"
      name="重复密码"
      label="重复密码"
      placeholder="重复密码"
      :rules="[{ required: true, message: '请填重复密码' }]"
    />
    <!-- 注册 -->
  <div style="margin: 16px;">
    <van-button 
    :disabled="btnShow"
    round block 
    type="primary" 
    native-type="submit"
    @click="$router.push('/login')"
    >
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
 .tip:hover {
  color: skyblue;
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