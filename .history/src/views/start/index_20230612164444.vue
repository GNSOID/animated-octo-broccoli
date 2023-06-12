<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, Ref } from 'vue'
// 表单数据
const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const router = useRouter()
// 提交表单
const onSubmit = () => {
    router.push('/login')
}

</script>

<template>
    <div class="box">
        <div style="position: relative; top: 1rem; left: 0.8rem;"><img src="../../images/4830/48304213/v2_qa2h05.png" alt=""></div>
        <h1 style="color: aliceblue; font-size: 1rem; position: absolute; top: 2.8rem; left: 0.8rem;">自家书库</h1>
        <van-button type="warning" style="width: 2rem; position: relative; top: 5rem; left: 0.9rem; border-radius: 0.5rem;"
            @click="$router.push('/login')">开始</van-button>
        <div style="size: 16px; color: aliceblue; position: absolute; top: 7.5rem; left: 35%;">还没有登录?<span style="color: aqua;"
                @click="$router.push('/register/step1')">去注册</span></div>
    </div>
</template>

<style scoped>
.header {
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    color: black;
    font-size: 30px;
    font-weight: 600;
    top: 0;
    left: 0;

}

.input-field {
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 8px;
    margin-bottom: 12px;
}

.box {
    background-image: url(../../images/4828/48280107/v2_qa1yhb.jpg);
    background-size: 100% 100%;
}</style>
