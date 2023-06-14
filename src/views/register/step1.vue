<script setup lang="ts">
import { ref,computed } from 'vue'
import { setRegister } from '../../api/register'
import { useRouter} from 'vue-router'
const router = useRouter()

// setRegister().then(res => {
//   console.log(res.data);
  
// })

const phoneNum = ref('')
const btnShow = computed(() =>{
  return !/^(?:(?:\+|00)86)?1\d{10}$/.test(phoneNum.value)
  
}) 
 function last() {
  router.push('step2')
  window.localStorage.setItem('phone',phoneNum.value)
 }
</script>

<template>
  <!-- <img src="../imgs/bg.jpg" alt=""> -->
  <div>
    <header class="header">注册</header>
<div class="content">

    <van-form >
  <van-cell-group inset>
    <van-field
      v-model="phoneNum"
      name="请输入手机号"
      label="请输入手机号"
      placeholder="请输入手机号"
      :rules="[{ required: true, message: '请输入手机号' }]"
    />
  </van-cell-group>
  <!-- 下一步 -->
  <div style="margin: 16px;">
    <van-button 
    @click="last"
    round block 
    type="primary" 
    native-type="submit"
    :disabled="btnShow"
    >
      下一步
    </van-button>
  </div>
</van-form>

</div>

    <!-- <span>已有账号？</span> <span class="dl">去登陆</span> -->
    <div class="tip">已有账号？<span class="dl" @click="$router.push('/login')">去登陆</span></div>
  </div>
  
</template>



<style lang="scss" scoped>

.header{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 30px;
}
.content{
    margin: 50px;
    .van-cell-group{
        border: 1px rgb(83, 78, 78) solid;
    }
}
.tip{
    position: relative;
    top: 100px;
    left: 130px;
    font-size: 16px;
}
.dl{    
    color: rgb(53, 190, 217);
        
}
h1{
  margin-left: 20px;
}
</style>
