<script setup lang="ts">
import {ref,computed,onMounted} from 'vue'
import { useRouter} from 'vue-router'
import { getUserSms } from '../../api/sms.js'
import { showSuccessToast, showFailToast } from 'vant';


//test(sms.value)
const router = useRouter()

const sms = ref('')
const nums = ref('')
const btnShow = computed(() =>{
    return !/^\d{5,}$/.test(sms.value)
})
const btnTime = ref(5)
const btnText = ref('发送验证码')

  function getsms () {
    btnTime.value--
    btnText.value = `${btnTime.value}秒后重新获取`

  
    let timeid = setInterval(() =>{
    btnTime.value--
    btnText.value = `${btnTime.value}秒后重新获取`

    if(btnTime.value === 0) {
      clearInterval(timeid)
      btnText.value = '发送验证码'
      btnTime.value = 5
    }
    },1000)

    getUserSms().then(res => {
      // console.log(res.data);
      nums.value = res.data.number
      console.log(nums.value);
      
    })
}
function nextStep () {
 console.log(sms.value);
 if (Number(sms.value) !== Number(nums.value)){
   
   return showFailToast('验证码错误!');
  }else{
    showSuccessToast('进行下一步');

    router.push('step3')
  }
}


</script>

<template>
  <div>
<h1>验证码</h1>
<div class="content">

    <van-form >
        <van-cell-group inset>
      <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
                >
            <template #button>

            <van-button 
            @click="getsms"
            size="small" 
            type="primary"
            :disabled="btnTime !== 5"
            >
            {{btnText}}
          </van-button>
            </template>
        </van-field>
        </van-cell-group>
  <!-- 下一步 -->
  <div style="margin: 16px;">
    <van-button 
    v-model="sms"
    round block 
    type="primary" 
    native-type="submit" 
    class="btn"
    :disabled="btnShow"
    @click="nextStep"
    >
      下一步
    </van-button>
  </div>
</van-form>

</div>

  </div>
  
</template>

<style lang="scss" scoped>
.van-form {
    position: relative;
    top: 50px;
    left: 10px;
    font-size: 16px;
}
 .van-cell-group{
        border: 1px rgb(83, 78, 78) solid;
    }
h1{
  margin-left: 20px;
}
</style>