<script setup lang="ts">
import{ ref } from 'vue'
const value1 =ref('')
import { useRouter} from 'vue-router'
const router = useRouter()

</script>

<template>
  <div class="box">
    <header class="headers">
      <div class="inputBac">
        <van-cell-group inset>
          <van-field
            label="欢迎您"
            size="40"
            label-align="center"
            left-icon="smile-o"
            placeholder="输入你喜欢的书"
          />
        </van-cell-group>
      
      </div>
    </header>

    <div class="content">
      <van-icon name="chat-o" dot size="45px" color="white" id="van-badge" @click="$router.push('/bigkind/message')"/>
      
    <div class="lc">
      <h3>1.填写详细信息</h3> 
      <img src="../imgs/yz.png" alt="">
      <h3>2.开始发货</h3>
      <img src="../imgs/mao.png" alt="">
      <h3>3.收到货款</h3>
      <img src="../imgs/kd.png" alt="">
    </div>
    
    <div class="btnSell">
      <van-button type="warning" @click="$router.push('/sellbook/book2')">扫码卖书</van-button>
    <van-button type="primary" @click="$router.push('/sellbook/book3')">手动输入</van-button>

    </div>
    </div>


  </div>
</template>
<style lang="scss" scoped>

</style>
<style lang="scss" scoped>
.btnSell{
  margin-top: 100px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  border-radius: 30%;

}
 .van-button {
  width: 120px;
 }
h3{
  color: rgb(214, 138, 75);
  margin-top: 50px;
  margin-left: 30px;
}
.inputBac {
  height: 1.25rem;
  background-color: orange;
  border-radius: 0px 0px 50px 50px;
}
.van-field {
  border-radius: 20px;
  width: 300px;
  border: 2px;
  position: absolute;
  top: 0.425rem;
  left: 0.0125rem;
}
#van-badge {
  position: absolute;
  left: 3.2rem;
  top: 0.4rem;
}
img{
  width: 200px;
  height: 180px;
  margin-right: 5px;
}
.lc{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center
}
</style>



