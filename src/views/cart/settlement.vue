<script setup lang="ts">
import { ref } from "vue";
const value1 = ref("");
</script>


<template>
    <div class="content">
        <h1>支付成功</h1>
        <van-icon name="checked" color="green" size="3rem"/>
        <van-button style="width: 65%; margin-top: 60px" type="warning" @click="$router.push('/my/mybuy')">前往个人页</van-button>
        <van-button style="width: 65%; margin-top: 20px;" type="warning" @click="$router.push('/home')">返回首页</van-button>
    </div>
   
</template>
<style>
.content{
    text-align: center;
}
h1{
    margin-top: 50px;
    font-size: 50px;
    color: orange;
}
</style>