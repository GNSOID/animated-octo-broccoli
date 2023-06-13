<script setup lang="ts">

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

      <van-cell-group inset>
        <van-field v-model="value"  label="书名" placeholder="必填" />
        <van-field v-model="value"  label="作者" placeholder="必填" />
        <van-field   label="出版社" placeholder="必填" />
        <van-field   label="ISBN" placeholder="必填" />
    </van-cell-group>

 

  <h3>添加照片1</h3>
        <van-uploader v-model="value1" />

  <h3>商品描述</h3>
  <textarea cols="45" rows="5">
    1111
  </textarea>

  <van-button class="price" type="warning" @click="$router.push('/sellbook/book4')">出价</van-button>

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