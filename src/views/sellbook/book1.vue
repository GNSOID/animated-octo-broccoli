<script setup lang="ts">

</script>

<template>
  <div class="box">
    <header class="headers">
      <div class="inputBac">
        <van-cell-group inset>
          <van-field
            v-model="value1"
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
      <van-icon name="chat-o" dot size="45px" color="white" id="van-badge" />
      
    <h3>1.填写详细信息</h3>
    <h3>2.发货</h3>
    <h3>3.收到货款</h3>
    
    <div class="btnSell">
      <van-button type="warning">扫码卖书</van-button>
    <van-button type="primary">手动输入</van-button>

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
  margin-top: 80px;
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
</style>



