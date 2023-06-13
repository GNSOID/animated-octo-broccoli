<script setup lang="ts">
import {ref,computed,Ref} from 'vue'
import { useRouter} from 'vue-router'
//test(sms.value)
const router = useRouter()
const sms: Ref<string> = ref('')

const btnShow = computed(() =>{
    return !/^\d{5,}$/.test(sms.value)
})
const btnTime: Ref<number> = ref(5)
const btnText: Ref<string> = ref('发送验证码')

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

    
}
</script>

<template>
  <div>
<h1>验证码</h1>
<div class="content">

    <van-form @submit="onSubmit">
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
    @click="$router.push('/register/step3')"
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