<script setup lang="ts">
import { areaList } from '@vant/area-data';
import { useRouter } from 'vue-router'
import { showSuccessToast } from 'vant';
const router =useRouter()
function onSave(){
    showSuccessToast('保存成功');
     router.push('/my/mymessage')
}
function onDelete(){
    showSuccessToast('删除成功');
    
}
</script>
<template>
  <div class="box">
    <div class="title_box">
      <p><van-icon size="30" name="arrow-left" @click="$router.back()" /></p>
      <h3>添加收获地址</h3>
    </div>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
<style lang="scss" scoped>
.title_box {
  h3 {
    color: orange;
    margin: 0 10px;
  }
}
</style>
