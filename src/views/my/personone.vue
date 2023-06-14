<script setup lang="ts">
</script>

<template>
  <div class="box">
        <van-icon  size="30" name="arrow-left" @click="$router.back()" />
        <h3 >个人信息</h3>
        <div>
             <img src="../imgs/17.jpg" alt="">
        </div>
        <div class="person_box">
             <p>昵称</p>
             <p>天河朱丽叶</p>
        </div>
        <div class="person_box">
             <p>个性签名</p>
             <p>千峰扛把子</p>
        </div>
        <div class="person_box">
             <p>手机号</p>
             <p>178-6666-8888</p>
        </div>
        <div class="person_box">
             <p>邮箱</p>
             <p>123456@qq.com</p>
        </div>
        <div class="person_box">
             <p>学生认证</p>
            <p><van-icon size="20" name="arrow" /></p>
        </div>
  </div>
    
  
</template>
<style lang="scss" scoped>
    h3{
       color:orange;   
    }
    img{
        width:80px;
        margin-left:150px;
        border-radius:50%;
    }
    .person_box{
        display:flex;;
        justify-content: space-between;
    }
</style>