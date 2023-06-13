<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import { getHot } from "@/api/kind/hotsearch.js";
const hotList = ref([]);
const list = ref([]);

onMounted(() => {
  getHot().then((res) => {
    console.log(res.data.data);
    hotList.value = res.data.data;
  });
});
</script>

<template>
  <div class="box">
    <header class="headers">
      <div class="inputBac">
        <van-icon name="arrow-left" size="30" @click="$router.back()" />
        <h2>热搜榜单</h2>
        
      </div>
    </header>
    <van-grid :column-num="1">
      <van-grid-item v-for="value in hotList" :key="value.id" icon="photo-o" :text="value.desc" />
    </van-grid>
    <van-cell v-for="item in list" :key="item" :title="item" />

    <van-back-top />
  </div>
</template>
<style lang="scss">
.inputBac {
  height: 100%;
  background-color: orange;
  border-radius: 0px 0px 50px 50px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  h2 {
    //    margin:0 auto;
    text-align: left;
    width: 230px;
  }
}
</style>
