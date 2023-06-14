<script setup lang="ts">
import { Value } from 'sass';
import  { ref} from 'vue'
import { useRouter} from 'vue-router'

const router = useRouter


const bookName = ref('')
const shopName = ref('')
function onSubmit() {
  console.log('提交');
  window.localStorage.setItem('tel',bookName.value)
  window.localStorage.setItem('jj',shopName.value)
  console.log(bookName.value);
  console.log(shopName.value);
  
  
}
</script>

<template #input>
  <div>
    <van-nav-bar 
        left-text="返回" 
        left-arrow 
        title="商品信息"
        @click-left="$router.back()" 
        />
        <h3>基本信息</h3>

     <van-form @click="onSubmit">
      <van-cell-group inset >
        <!-- 书名：<input type="text"> -->
        <van-field  v-model="bookName" label="书名" placeholder="必填" />
        <van-field   label="作者" placeholder="必填" />
        <van-field   label="出版社" placeholder="必填" />
        <van-field   label="ISBN" placeholder="必填" />
    </van-cell-group>
    

 

  <h3>添加照片1</h3>
        <van-uploader />

  <h3>商品描述</h3>
  <textarea cols="45" rows="5"  v-model="shopName" >
    11
  </textarea>
  <router-link to="/sellbook/book4">
    
    <van-button 
      @click="onSubmit"
      class="price" 
      type="warning" 
    
      >
      出价</van-button>
  </router-link>
    </van-form>

  </div>
</template>

<style lang="scss" scoped>
h3{
  margin-left: 20px;
  color: rgb(214, 138, 75);
}
textarea{
  margin-left: 20px;
}
.price{
  position: relative;
  left:150px;
  top: 20px;
}
.van-uploader{
  margin-left: 20px;
}
</style>