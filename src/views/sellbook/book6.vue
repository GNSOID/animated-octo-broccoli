<script setup lang="ts">
import { useRouter} from 'vue-router'
const router = useRouter()
</script>

<template>
    <div>
        <header>
            <van-nav-bar 
        left-text="返回" 
        left-arrow 
        title="沉默的大多数"
        @click-left="$router.back()" 
        />         
    </header>
    <div class="user">
        <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" />
        <p>老斋的猫</p>
        <span>学生认证</span>
    </div>
    <div class="price">
    <p> ￥16</p> 
    <span>原价22.88</span>
    <span>支持自提</span>
    </div>
    </div>
</template>

<style lang="scss" scoped>
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
.price{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center
}
.price p {
        font-size: 22px;
        color: rgb(212, 113, 37);
}

</style>