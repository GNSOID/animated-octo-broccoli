<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { useRouter } from 'vue-router'
const value1 = ref("");
const router = useRouter()
const content = () => {
  router.push('/confirm')
}
interface cartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  selected: boolean;
}

</script>
<template>
  <div class="content">
    <header class="headers">
      <van-icon name="arrow-left" size="30" @click="$router.back()" />
         <span style="margin-left: 1rem;">确认下单</span> 
    </header>
    <div class="box">
      <button @click="$router.push('/my/addmap')">
        <p>
          张三&nbsp;178-666-8888<br />
          广东省-广州市-天河区&nbsp;天河路888号<br/>
        </p>
      </button></div>
    <div class="lx" @click="$router.push('')">
      <div class="xx">老笔斋的老猫</div>
      <div class="rz">学生认证</div>
    </div>
    <div class="sp">
      <img src="../imgs/25.jpg" alt="" style="width: 100px; height: 100px; margin-left: 100px;">
      <div class="s">
        <p>一只特立独行的猪</p>
        <p style="margin-left: 50px;">七折优惠</p>
    </div>
    <div style="margin-top: 0.5rem;">
      <p>配送方式:自提 <span style="margin-left: 100px;">运费:￥0.00</span>
      </p>
      <hr>
      <p>共计1件商品&nbsp;&nbsp;&nbsp;&nbsp;小计:￥16.00</p></div>
    
    <div class="zf">
      <div class="zf1" style="display: flex; margin-top: 1.5rem;">支付方式: <span
          style="margin-left: 2rem; color: gainsboro;">微信支付&numsp;></span></div>
      <hr>
      <van-button type="warning" class="botton" @click="$router.push('/cart/settlement')">立即支付</van-button>
    </div>
  </div>
  </div>
</template>
<style>
.headers {
  width: 100%;
  height: 0.8rem;
  color: white;
  font-size: 0.25rem;
  background-color: orange;
  border-radius: 0px 0px 50px 50px;
  line-height: 0.8rem;
  margin-right: 1;
}

.box {
  margin-top: 10px;
}

.lx {
  display: flex;
  right: 50px;
  margin-top: 10px;
}

.xx {
  font-size: 0.2rem;
  color: orange;
  border-radius: 0.5rem;
  padding: 0.1rem;
  margin-top: 0.1rem;
  margin-right: 0.5rem;
}

.rz {
  font-size: 16px;
  color: orange;
  border: 1px solid orange;
  border-radius: 0.5rem;
  padding: 0.1rem;
  margin-top: 0.1rem;
  margin-right: 1rem;
  height: 100%;
}

.sp {
  font-size: 16px;
  color: orange;
  padding: 0.1rem;
  margin-top: 0.1rem;
}

.s {
  display: flex;
}

.botton {
  width: 100%;
  font-size: 0.2rem;
  padding: 0.1rem;
  margin-top: 0.1rem;
  margin-right: 1rem;
}
</style>