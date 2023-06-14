<template>
  <div class="box">
    <header class="headers">
      <div class="inputBac">
        购物车
      </div>
    </header>
    
    <!-- 商品列表 -->
    <div class="content">
      <div class="lx">
        <div>
          <p class="studen">老笔寨的老猫</p>
        </div>
        <div>
          <van-icon name="passed" color="red" class="students" />
          <p class="student">学生认证</p>
        </div>
      </div>
    <div class="items">
      <div class="item" v-for="item in Items" :key="item.id">
        <input type="checkbox" :checked="item.selected" class="checkbox" @change="toggle(item)" />
        <img :src="item.image" alt="image" class="image" />
        <!-- 商品详情 -->
        <div class="details">
          <div class="name">{{ item.name }}</div>
          <div class="price">{{ item.price }}</div>
        </div>
        <button @click="collect(item)" class="collect">移入收藏</button>
      </div>
      
    </div>
    <!-- 底部 -->
      <div class="bottom">
        <van-checkbox v-model="selectAll" @change="changed" class="botto">全选</van-checkbox>
      </div>
      <van-button type="warning" class="botton" @click="$router.push('/cart/confirm')" :disabled="!Selected">结算</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";//引入vue

const Selected = computed(() => {//计算属性
  return Items.value.some((item) => item.selected);//some() 方法用于检测数组中的元素是否满足指定条件。
});

const Items = ref([
  {
    id: 1,
    name: "一只特立独行的猪",
    price: '￥：16',
    image: "https://th.bing.com/th/id/R.f4cf65a3dced2048a2e3c081bf60cbde?rik=7lS9481B84zQ6w&riu=http%3a%2f%2fbooklibimg.kfzimg.com%2fdata%2fbook_lib_img_v2%2fisbn%2f0%2f63ce%2f63ce8a81fa99fcc213187fca99df5ddf_0_0_0_0.jpg&ehk=Z5mActsAGkOn20OH3eV%2bbz23xHZGlHR6eCXYsmW%2bvdM%3d&risl=&pid=ImgRaw&r=0",
    selected: false,
  }
]);

const selectAll = ref(false);//全选按钮默认处于非选中状态

function collect(item) {//移入收藏
  console.log(item);
}

onMounted(() => {//生命周期
  console.log("mounted");
});

const ais = computed(() => {//计算属性 ais 为 Items 中的每一项 item 的 selected 属性组成的数组
  return Items.value.every((item) => item.selected);
});

watch(ais, (value) => {//监听
  selectAll.value = value;//当 ais 的值发生变化时，将 selectAll 的值设置为 value
});

const toggle = (item) => {//切换选中状态 toggleItemSelection 函数会在每一项 item 的选中状态发生变化时被调用
  item.selected = !item.selected;
  selectAll.value = Items.value.every((item) => item.selected);

};

const changed = () => {//全选  selectAllChanged 函数会在全选按钮的状态发生变化时被调用
  SelectAll();
};

const SelectAll = () => { //全选 SelectAll 函数会将 Items 中的每一项 item 的 selected 属性设置为 selectAll 的值
  Items.value.forEach((item) => {
    item.selected = selectAll.value;
  });
};

</script>



<style lang="scss" scoped>
.box{
  width: 100%;
}
.van-field {
  border-radius: 20px;
  width: 300px;
  border: 2px;
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
.lx{
  display: flex;
  right: 50px;
  top: 50px;
}
.studen{
  position:fixed;
  left: 65px;
  top: 80px;
}
.student{
  position:fixed;
  left: 280px;
  top: 80px;
}
.students{
  position:fixed;
  left: 260px;
  top: 100px;
}
.bottom {
  bottom: 63px;
  width: 100%;
  height: 0.5rem;
  background-color: rgb(235, 232, 232);
  text-align: right;
  color: white;
  font-size: 0.22rem;
  position: absolute;
}

.botto {
  bottom: 1px;
  width: 0.8rem;
  height: 0.5rem;
  color: white;
  font-size: 0.22rem;
  position: relative;
  left: 20px;
  bottom: 0.03rem;
  float: left;
}

.van-button {
  bottom: 62px;
  width: 1.1rem;
  height: 0.5rem;
  background-color: orange;
  text-align: right;
  color: white;
  font-size: 0.22rem;
  border-radius: 0.5rem;
  position: absolute;
  left: 70%;
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
}
</style>
