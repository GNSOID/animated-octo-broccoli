<script setup lang="ts"></script>
<template>
  <div class="box">
    <div class="title_box">
      <p><van-icon size="30" name="arrow-left" @click="$router.back()" /></p>
      <h2>已售商品</h2>
    </div>
    <img src="../imgs/yz.png" alt="">
      <div>空无一物～～</div>
      <van-button  color="orange"  @click="$router.push('/sellbook/book1')">去读书</van-button>
  </div>
</template>
<style lang="scss" scoped>
 .top_box {
  display: flex;
 
}
.title_box{
  display:flex;
   justify-content: flex-start;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
    h2{
      margin-left:100px;
    }

}
.box{
    box-sizing:border-box;
     div{
         text-align:center;
     }
}
    
</style>