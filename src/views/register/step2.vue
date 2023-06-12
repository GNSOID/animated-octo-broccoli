<script setup lang="ts">

</script>

<template>
  <div>
<h1>验证码</h1>
<div class="content">

    <van-form @submit="onSubmit">
        <van-cell-group inset>
  <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
                >
            <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
            </template>
        </van-field>
        </van-cell-group>
  <!-- 下一步 -->
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit" class="btn">
      下一步
    </van-button>
  </div>
</van-form>

</div>

  </div>
  
</template>

<style lang="scss" scoped>
.van-form {
    position: relative;
    top: 50px;
    left: 10px;
    font-size: 16px;
}
 .van-cell-group{
        border: 1px rgb(83, 78, 78) solid;
    }
h1{
  margin-left: 20px;
}
</style>