<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import type { Ref } from "vue";

const value1 = ref("");

interface cartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  selected: boolean;
}

const Items: Ref<cartItem[]> = ref([
  {
    id: 1,
    name: "你好,钟南山",
    price: 10,
    image: "../../images/4832/48321350/v2_qa3xty.jpg",
    selected: false,
  },
  {
    id: 2,
    name: "人类大瘟疫",
    price: 20,
    image: "../../images/4832/48321352/v2_qa3xu4.jpg",
    selected: false,
  },
  {
    id: 3,
    name: "深度学习",
    price: 30,
    image: "../../images/4832/48321356/v2_qa3xua.jpg",
    selected: false,
  },
]);

const selectAll = ref(false);

function collect(item: cartItem) {
  console.log(item);
}

onMounted(() => {
  console.log("mounted");
});

const ais = computed(() => {
  return Items.value.every((item) => item.selected);
});

watch(ais, (value) => {
  Items.value.forEach((item) => {
    item.selected = value;
  });
});
</script>

<template>
  <div class="box">
    <header class="headers">
      <div class="inputBac">
        购物车
      </div>
    </header>
    <!-- 商品列表 -->
    <div class="items">
      <div class="item" v-for="item in Items" :key="item.id">
        <input type="checkbox" v-model="item.selected" class="checkbox" />
        <img :src="item.image" alt="image" class="image" />
        <!-- 商品详情 -->
        <div class="details">
          <div class="name">{{ item.name }}</div>
          <div class="price">{{ item.price }}</div>
        </div>
        <button @click="collect(item)" class="collect">移入收藏</button>
      </div>
    </div>
    <div class="bottom">
      <van-checkbox v-model="selectAll" class="botto">全选</van-checkbox>
      <van-button type="warning" class="botton">结算</van-button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.van-field {
  border-radius: 20px;
  width: 300px;
  border: 2px;
  position: absolute;
  top: 0.425rem;
  left: 0.0125rem;
}

.inputBac {
  height: 0.8rem;
  color: white;
  font-size: 0.25rem;
  background-color: orange;
  border-radius: 0px 0px 50px 50px;
  text-align: center;
  line-height: 0.8rem;
}

.bottom {
  position: fixed;
  bottom: 1px;
  width: 100%;
  height: 0.5rem;
  background-color: rgb(235, 232, 232);
  text-align: right;
  color: white;
  font-size: 0.22rem;
  position: absolute;
}

.botto {
  position: fixed;
  bottom: 1px;
  width: 1rem;
  height: 0.5rem;
  text-align: right;
  color: white;
  font-size: 0.22rem;
  position: relative;
  left: 20px;
  bottom: 0.03rem;
  float: left;
}

.botton {
  position: fixed;
  bottom: 1px;
  width: 1rem;
  height: 0.5rem;
  background-color: orange;
  text-align: right;
  color: white;
  font-size: 0.22rem;
  border-radius: 0.5rem;
  position: relative;
  right: 20px;
}

.items {
  margin-top: 1rem;
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.checkbox {
  margin-right: 0.5rem;
}

.image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 0.5rem;
}

.details {
  flex-grow: 1;
}

.name {
  font-size: 0.22rem;
  font-weight: bold;
}

.price {
  font-size: 0.2rem;
  color: gray;
}

.collect {
  font-size: 0.18rem;
  color: rgb(78, 60, 27);
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}</style>
