<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="box">
    <header class="headers">
      <div class="inputBac">
        <van-icon name="arrow-left" size="30" @click="$router.back()" />
        <h2>书单推荐</h2>
      </div>
    </header>
    <div calss="content">
       <div class="img_box">
           <img src="../imgs/2.jpg" alt="">
           <p>那些有趣的历史</p>
         </div>
         <div class="img_box">
           <img src="../imgs/1.jpg" alt="">
           <p>我最爱的文学作品</p>
         </div>
         <div class="img_box">
           <img src="../imgs/3.jpg" alt="">
           <p>爱你不是两三天</p>
         </div>
         <div class="img_box">
           <img src="../imgs/5.jpg" alt="">
           <p>奋斗的人生</p>
         </div>
    </div>
         
  </div>
</template>
<style lang="scss"  scoped>
.inputBac {
  height: 100%;
  background-color: orange;
  border-radius: 0px 0px 50px 50px;
  display:flex;
  flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  h2 {
    //    margin:0 auto;
    text-align: left;
    width:230px;
  
  }
  
  
}
.img_box{
       width:100%;
       height:200px;
       img{
         height:70%;
         width:100%;
       }
       p{
         text-align:center;
       }
    }
</style>
