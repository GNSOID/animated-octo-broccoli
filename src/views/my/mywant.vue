<script setup lang="ts">
 import { getMyWant } from "@/api/my/want.js"
 import { ref ,onMounted } from 'vue'

 const wantList = ref({})
 onMounted(() => {
      getMyWant({
        userid:123456,
        username:'admin'
      }).then(res=>{
        //  console.log(res.data);
         wantList.value=res.data.data
         console.log(wantList.value);
         
      })
 })

</script>

<template>
  <div class="box">
    <div class="title_box">
      <p><van-icon  size="30" name="arrow-left" @click="$router.back()"/></p>
      <h2>我想要的</h2>
    </div>
     <ul>
      <li class="li_box">在售商品</li> 
      <li>失效商品</li> 
      
  </ul>
    <div class="onsale">
      <div>
        <img src="../imgs/17.jpg" alt="" />
      </div>
      <div>
        <p>天河朱丽叶</p>
      </div>
      <div class="top_box">
        <p><van-icon  size="20" name="shield-o" color="orange" /></p>
        <p>学生认证</p>
      </div>
    </div>
     <div class="boot_box">
         <div>
            <img src="../imgs/16.jpg" alt="">
         </div>
         <div>
            <p>{{wantList.title}}</p>
            <p>{{wantList.desc}}</p>
            <p><van-icon name="location"  />{{wantList.wantress}}</p>
            <p class="p_box">{{wantList.price}}</p>
            <p >{{wantList.discout}}</p>
            <div>
               <van-button  type="success">联系卖家</van-button >
              <van-button  type="warning">马上买</van-button >
            </div>
         </div>
           
         
    </div>
    <div class="storage">
       <p>收藏书单</p>
       <p><van-icon size="20" name="arrow" /></p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.onsale {
  box-shadow:black 0px 0px 10px;
  display: flex;
  height: 50px;
  div {
    flex: 1;
    box-sizing: border-box;
    img {
      width: 40px;
      padding: 10px 20px;
      border-radius: 50%;
    }
  }
}
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
.boot_box{
  border-top:0px;
   box-shadow:grey 0px 0px 10px;
  display:flex;
  div{
    flex:1;
    padding:10px;
    img{
      margin-left:30px;
      width:150px;
    }
    div{
      display:flex;
      justify-content: space-evenly;

    }
  }
  .p_box{
    color:orange;
  }
}
.van-button{
    width:80px;
    font-size:8px;
}
ul,li{
    list-style:none;
    
}
ul{
    display:flex;
    justify-content: space-around;
    height:30px;
    box-shadow:grey 0px 0px 8px;
    border-radius:15px;
}
.li_box{
    color:orange;
}
.storage{
    // height:30px;
    display:flex;
    justify-content: space-between;
    box-shadow:grey 0px 0px 8px;
    border-radius:15px;
    // position:absolute;
    // bottom:10px;
    // left:10px;
    margin-top:200px;
}
.box{
    box-sizing:border-box;
}

</style>
