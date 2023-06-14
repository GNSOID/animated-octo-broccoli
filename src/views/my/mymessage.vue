<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getMyFirst } from "@/api/my/first";
const myFirstList =ref([])
onMounted(() => {
  getMyFirst().then((res) => {
    // console.log(res.data.data);
    myFirstList.value= res.data.data
    // console.log(myFirstList.value);
    
  });
});
</script>

<template>
  <div class="box">
    <header class="headers">
      <div class="inputBac">
        <van-icon name="arrow-left" size="30" @click="$router.back()" />
        <h2>我的</h2>
      </div>
    </header>
    <div class="content">
      <div class="my_one">
        <div>
          <img src="../imgs/yz.png" alt="" />
        </div>
        <div>
          <p>天河朱丽叶</p>
          <p>认识你们，很开心～～～</p>
        </div>
        <div>
          <van-icon name="passed" color="red" />
          <p class="student">学生认证</p>
        </div>
      </div>
      <div class="my_img">
        <div @click="$router.push('myonsale')">
          <van-icon size="30" name="shopping-cart-o" />
          <p>我的再售</p>
        </div>
        <div @click="$router.push('alreadysale')">
          <van-icon size="30" name="cart-circle-o" />
          <p>我的已售</p>
        </div>
        <div @click="$router.push('mybuy')">
          <van-icon size="30" name="add-o" />
          <p>我的买入</p>
        </div>
        <div @click="$router.push('mywant')">
          <van-icon size="30" name="shop-collect-o" />
          <p>我的想要</p>
        </div>
      </div>
       <div class="my_message" @click="$router.push('personone')">
          <p>个人信息</p>
          <p> <van-icon  size="20" name="setting-o" /></p>
        </div>
        <div class="my_message" @click="$router.push('shopaddress')">
          <p>收获地址</p>
          <p> <van-icon  size="20" name="location-o" /></p>
        </div>
      <van-list
        finished-text="没有更多了"
      >
        <van-cell v-for="item in myFirstList" :key="item" :title="item" >
         <van-icon name="gem-o" />
        </van-cell>
       
      </van-list>


    </div>
  </div>
</template>
<style lang="scss" scoped>
.inputBac {
  height: 100%;
  background-color: orange;
  border-radius: 0px 0px 50px 50px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  h2 {
    //    margin:0 auto;
    text-align: left;
    width: 230px;
  }
}
.my_one {
  display: flex;
  text-align: center;
  div {
    flex: 1;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
    .van-badge__wrapper {
      position:fixed;
      left: 265px;
      top: 80px;
    }
    .student{
      position:fixed;
      left: 280px;
      top: 65px;

    }
  }
}
.my_img {
  display: flex;
  height: 80px;
  width: 100%;
  border: 2px solid;
  border-radius: 10px;
  div {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.my_message{
  display:flex;
  padding:0 17px;
  justify-content: space-between;
}
</style>
