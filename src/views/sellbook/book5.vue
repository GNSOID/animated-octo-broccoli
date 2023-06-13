<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <div>
        <van-nav-bar left-text="返回" left-arrow title="发布成功" @click-left="$router.back()" />
    </div>
    <div class="pic">
        <div class="btn" @click="$router.push('/sellbook/book6')">
            查看更多
        </div>
    </div>
    <van-button class="price" type="warning" @click="$router.push('/sellbook/book1')">继续阅读</van-button>
    <van-button class="price" type="success" @click="$router.push('/home')">返回主页</van-button>
</template>

<style lang="scss" scoped>
.pic {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    margin-left: 90px;
    margin-top: 75px;

    .btn {
        width: 100%;
        height: 30px;
        margin-top: 170px;
        background-color: black;
        opacity: 0.5;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center
    }
}

.van-button {
    margin-top: 20px;
}
</style>