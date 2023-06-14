<script setup lang="ts">
import { computed,onMounted ,ref,watch} from 'vue'
import { showToast } from 'vant';
import { useRouter} from 'vue-router'
import { Button } from 'vant';


const router = useRouter()


</script>

<template>
      <header>
            <van-nav-bar 
        left-text="返回" 
        left-arrow 
        title="确认下单"
        @click-left="$router.back()" 
        />         
    </header>
    <div class="dz" @click="$router.push('/sellbook/address')">
        <van-icon class="address" name="location" color="orange" size="30px"/>
        <p>张三：17817788861</p>
        <p>北京市-昌平区-沙河-沙阳路18号</p>
    </div>
    <div class="user">
        <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" />
        <p>老斋的猫</p>
        <span>学生认证</span>
    </div>
    <div class="centent">
        <div class="book">
            <img src=".././imgs/20.jpg" alt="">

        </div>
        <div class="js">
            <p>沉默的大多数</p>
            <p>9成新</p>
            <p>支持自提</p>
            <h1>￥16</h1>
        </div>
    </div>
    <footer>
        <h1>合计 ￥16</h1>
        <van-button color="orange">点击付款</van-button>
        
    </footer>
</template>

<style lang="scss" scoped>

.dz{
    width: 100%;
    margin-left: 80px;
}
.address {
    position: relative;
    top: 50px;
    right: 50px;
}
.user{
    margin-left: 13px;
    width: 350px;
    height: 50px;
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center
}
.book {
    float: left;
    width: 150px;
}
img{
    width: 150px;
}
.js{
    width: 100px;
    float: left;
    margin-left: 20px;
 
    h1{
        color: orange;
    }
}
.centent{
margin-top: 20px;
margin-left: 20px;
border: 1px solid rgb(84, 80, 80);
border-radius: 10px;
}
footer{
    border-top: 1px solid rgb(138, 130, 130);
    color: orange;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 350px;
    
}
</style>