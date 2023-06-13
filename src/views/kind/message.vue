<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="box">
  <header class="headers">
      <div class="inputBac">
      <van-icon name="arrow-left" size="30"  @click="$router.back()" />
          <h2>消息中心</h2>
      </div>
    </header>
    <div class="content">
         <div class="message_box">
            <div id="onepictrue">
              <img src="../imgs/13.jpg" alt="">
            </div>
            <div>
              <p>老毛</p>
              <p>可以</p>
            </div>
            <div>
              <img src="../imgs/27.jpg" alt="">
            </div>

         </div>
         <div class="message_box">
            <div id="onepictrue">
              <img src="../imgs/16.jpg" alt="">
            </div>
            <div>
              <p>一条咸鱼</p>
              <p>不包邮</p>
            </div>
            <div>
              <img src="../imgs/18.jpg" alt="">
            </div>

         </div>
      
    </div>
  </div>
</template>
<style lang="scss" >
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
.message_box{
  display:flex;
   div{
     flex:1;
     img{
       width:100%;
       height:100%;
     }
     p{
       text-align:center;
     }
   }
}
#onepictrue{
  width:60px;
  height:60px;

}
</style>
