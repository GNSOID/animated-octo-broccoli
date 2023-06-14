<script setup lang="ts">
import { getPeAdd } from "@/api/my/peaddress.js";
import { ref, onMounted } from "vue";
const peList = ref({});
onMounted(() => {
  getPeAdd().then((res) => {
    peList.value = res.data.data;
    // console.log(peList.value);
  });
});
</script>

<template>
  <div class="box">
    <div class="title_box">
      <p><van-icon size="30" name="arrow-left" @click="$router.back()" /></p>
      <h2>收获地址</h2>
    </div>
    <div class="add_box">
      <p>{{ peList.name }}</p>
      <p>{{ peList.phone }}</p>
      <p>{{ peList.address }}</p>
    </div>
    <div class="bottom_box">
      <p><van-icon color="green" name="checked" />默认地址</p>
      <van-button type="success">编辑</van-button>
      <van-button type="danger">删除</van-button>
    </div>
    <div class="but_box" @click="$router.push('addmap')">
      <van-button color="orange">添加收货地址</van-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title_box {
  h2 {
    color: orange;
    margin: 0 10px;
  }
}
.add_box {
  margin: 0 10px;
  box-shadow: grey 0px 0px 10px;
  padding: 10px;
  p {
    border-bottom: 1px solid;
  }
}
.bottom_box {
  display: flex;
  justify-content: flex-start;
  .van-button{
    width:140px;
  }
}
.but_box {
  margin-top: 300px;
  .van-button {
    width: 300px;
    margin-left: 40px;
    border-radius: 15px;
  }
}
</style>
