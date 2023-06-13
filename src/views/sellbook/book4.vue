<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <div>
        <van-nav-bar left-text="返回" left-arrow title="发布" @click-left="$router.back()" />
    </div>
    <div class="bz">
        <img src="../imgs/mao.png" alt="">
        <span>
            <h6>一只特例独行的猪</h6>
            你说的的对，但是...是一款米家开发以宇宙探索为主题，的回合制游戏
        </span>
    </div>
    <van-cell-group inset>
        <van-field v-model="value" label="￥" placeholder="请输入价格" />
        <van-field v-model="value1" label="原价" placeholder="请输入价格" />
        <van-field v-model="value2" label="运费" placeholder="请输入价格" />
        <van-field v-model="value3" label="几成新" placeholder="请输入价格" />


        <input type="checkbox"> 支持自提

    </van-cell-group>

    <van-button class="price" type="warning" @click="$router.push('/sellbook/book5')">发布</van-button>
</template>

<style lang="scss" scoped>
.bz {
    width: 300px;
    height: 100px;
    display: flex;
    justify-self: start;

    p {
        font-size: 12px
    }

    ;
}

img {
    width: 120px;
    height: 120px;
}

.price {
    margin-top: 270px;
}
</style>