<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const value1: Ref<string> = ref("");
</script>

<template>
  <div class="box">
    <header class="headers">
      <div class="inputBac">
        <van-cell-group inset>
          <van-field
            v-model="value1"
            label="欢迎您"
            size="40"
            label-align="center"
            left-icon="smile-o"
            placeholder="输入你喜欢的书籍"
          />
        </van-cell-group>
      
      </div>
    </header>
      <div class="content"> 
        <van-icon name="chat-o" dot size="45px" color="white" id="van-badge" />
     
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
           <img src="" alt="">>
        </van-swipe-item>
        <van-swipe-item></van-swipe-item>
        <van-swipe-item></van-swipe-item>
        <van-swipe-item></van-swipe-item>
      </van-swipe>
      <div class="bookKind">
        <van-icon size="60px" color="orange" name="hot-sale"></van-icon>
        <van-icon size="60px" color="orange" name="new-arrival"></van-icon>
        <van-icon size="60px" color="orange" name="map-marked"></van-icon>
        <van-icon size="60px" color="orange" name="bars"></van-icon>
      </div>
      <div class="bookList">书单推荐</div>
      <div class="middle">
        <div class="nearSale">附近在售</div>
        <div class="hotSearch">热搜榜单</div>
      </div>
      <h3>猜你喜欢</h3>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in 6" :key="item" :title="item" />
      </van-list>
        <van-back-top right="5vw" bottom="18vh" />
      </div>
  </div>
</template>
<style lang="scss" scoped>
.van-field {
  border-radius: 20px;
  width: 300px;
  border: 2px;
  position: absolute;
  top: 0.425rem;
  left: 0.0125rem;
}
.inputBac {
  height: 1.25rem;
  background-color: orange;
  border-radius: 0px 0px 50px 50px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
#van-badge {
  position: absolute;
  left: 3.2rem;
  top: 0.4rem;
}
.bookKind {
  height: 100px;
  width: 360px;
  border: 2px inset;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
}
.bookList {
  height: 100px;
  width: 360px;
  border: 2px outset;
  border-radius: 10px;
  margin: 0 auto;
}
.middle {
  height: 105px;
  width: 100%;
}
.nearSale {
  height: 100px;
  width: 100px;
  border: 2px inset;
  border-radius: 10px;
  margin-left: 10px;
  float: left;
}
.hotSearch {
  height: 100px;
  width: 230px;
  border: 2px outset;
  border-radius: 10px;
  float: left;
  margin-left: 10px;
}
.hitLike {
  width: 100px;
  height: 50px;
}
</style>