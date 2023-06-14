<script setup lang="ts">
import { computed,onMounted ,ref,watch} from 'vue'
import { useRouter} from 'vue-router'
const router = useRouter()

    const flag = ref(false)

    function change () {
    flag.value = !flag.value
    }
//  watch (
//     flag,
//      () => {
//         flag.value = !flag 
//         console.log(flag);
        
//     }
//  )
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
    <div class="dz">
        <van-icon name="location" color="orange" size="30px"/>
        <span>北京市-昌平区-沙河-沙阳路18号</span>
    </div>
    <div class="pic">
        <img src="../imgs/20.jpg" alt="">
        <img src="../imgs/19.jpg" alt="">
        <img src="../imgs/20.jpg" alt="">
    </div>
    <div class="jj">
        <p>作者：王小波</p>
        <p>出版社：北京十月文艺出版社</p>
        <p>ISBN 9784532015684</p>
        <p>品相：九成新</p>
    </div>
    <h3>商品简介</h3>
    <div class="xq">
        之前看完后一直在书架上，最近打算把他出掉。<br>
        只看过一边，基本上是全新，有需要的朋友可以联系我<br>
        本校学上可以自提
    </div>
   <footer>
        <van-icon name="like"  @click="change" v-if="flag" color="red" size="40px" />
        <van-icon name="like-o" @click="change" v-else="!flag"   size="40px" />

        <van-icon name="shopping-cart-o" size="40px"/>
        <van-button color="yellowgreen">聊一聊</van-button>
        <van-button color="orange" @click="$router.push('/sellbook/book7')">马上买</van-button>
   </footer>
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
.dz{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url(../imgs/dz.png);
    border-radius: 15px;
}
.pic{
    width: 100%;
    height: 200px;
    overflow-x: auto;
    display: flex;
img{
    width: 160px;
    height: 170px;
    border: 1px solid rgb(57, 54, 54);
    margin: 5px;
    border-radius: 5px;
}
}
.jj{
    margin-top: 10px;
    margin-left: 5%;
    border: 1px solid rgb(57, 54, 54);
    border-radius: 10px;
}
h3{
    color: rgb(212, 113, 37);
}
.xq{
    border: 1px solid rgb(181, 177, 177);
    border-radius: 10px;
}
footer{
    display: flex;
    align-items: flex-end;
    margin-top: 110px;
    justify-content: space-evenly
}


</style>