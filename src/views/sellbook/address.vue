<script setup lang="ts">
import { computed,onMounted ,ref,watch} from 'vue'
import { showToast } from 'vant';
import { useRouter} from 'vue-router'
import { Button } from 'vant';

const chosenAddressId = ref('1');
    const list = [
      {
        id: '1',
        name: '张三',
        tel: '178-177-888-61',
        address: '北京市-昌平区-沙河-沙阳路18号',
        isDefault: true,
      },
    ]

const router = useRouter()


</script>

<template>
      <header>
            <van-nav-bar 
        left-text="返回" 
        left-arrow 
        title="修改地址"
        @click-left="$router.back()" 
        />         
    </header>
    <div class="dz">
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        />

    </div>
</template>

<style lang="scss" scoped>


</style>