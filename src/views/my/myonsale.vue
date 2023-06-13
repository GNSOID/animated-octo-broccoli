<script setup lang="ts">
 import { getMyAdd } from "@/api/my/address.js"
 import { ref ,onMounted } from 'vue'

 const addList = ref({})
 onMounted(() => {
      getMyAdd({
        userid:123456,
        username:'admin'
      }).then(res=>{
        //  console.log(res.data);
         addList.value=res.data.data
         console.log(addList.value);
         
      })
 })

</script>

<template>
  <div class="box">
    <div class="title_box">
      <p><van-icon  size="30" name="arrow-left" @click="$router.back()"/></p>
      <h2>在售商品</h2>
    </div>
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
            <img src="../imgs/25.jpg" alt="">
         </div>
         <div>
            <p>{{addList.title}}</p>
            <p>{{addList.desc}}</p>
            <p><van-icon name="location"  />{{addList.address}}</p>
            <p class="p_box">{{addList.price}}</p>
            <p >{{addList.discout}}</p>
            <div>
              <van-button size="10" type="warning">下架</van-button >
              <van-button size="10" type="warning">编辑</van-button >
              <van-button size="10" type="warning">改价</van-button >
            </div>
         </div>
           
      
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
</style>
