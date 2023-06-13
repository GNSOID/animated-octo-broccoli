<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import { getKind } from "@/api/kind/kind.js";
const active = ref("");
const kindList = ref([]);
const rightList = ref([]);
const list = ref([]);
onMounted(() => {
  getKind().then((res) => {
    // console.log(res.data);
    kindList.value = res.data.data;
    // console.log(kindList.value[0]);
    rightList.value = kindList.value[0].kind;
    // console.log(rightList.value);
  });
});
</script>

<template>
  <div class="box">
    <header class="headers">
      <div class="inputBac">
        <van-icon name="arrow-left" size="30" @click="$router.back()" />
        <h2>全部分类</h2>
      </div>
    </header>

    <div class="content">
      <div class="kind_box">
        <van-sidebar v-model="active">
          <van-sidebar-item v-for="item in kindList" :title="item.leftname" />
        </van-sidebar>
        <van-tabs v-model:active="active">
          <van-tab v-for="value in rightList" :title="value.name"></van-tab>
        </van-tabs>
        <!-- <van-tree-select
        v-for="value in rightList"
          v-model:active-id="activeId"
          v-model:main-active-index="activeIndex"
          :items="items"
        /> -->
        <van-cell v-for="item in list" :key="item" :title="item" />

        <van-back-top />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.kind_box {
  display: flex;
}
</style>
