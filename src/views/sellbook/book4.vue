<script setup lang="ts">
import { ref } from 'vue'
import { useRouter} from 'vue-router'

const router = useRouter()

const name = ref('')
const shop = ref('')
name.value = window.localStorage.getItem('tel')  || ''
shop.value = window.localStorage.getItem('jj')  || ''
</script>

<template>
    <div>
        <van-nav-bar left-text="返回" left-arrow title="发布" @click-left="$router.back()" />
    </div>
    <div class="bz">
        <img src="../imgs/25.jpg" alt="">
        <span>
            <h6>{{ name }}</h6>
            {{ shop }}
        </span>
    </div>
    <van-cell-group inset>
        <van-field  label="￥" placeholder="请输入价格" />
        <van-field  label="原价" placeholder="请输入价格" />
        <van-field  label="运费" placeholder="请输入价格" />
        <van-field  label="几成新" placeholder="请输入价格" />


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