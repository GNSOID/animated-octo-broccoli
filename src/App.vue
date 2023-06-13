<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterView />
    <!-- $router.meta  路由元信息 -->
    <!-- 组件中不需要添加this，所以就可以使用 $router.meta.hidden-->
    <footer class="footer" key="item.bannerid" v-if="!$route.meta.hidden">
        <RouterLink to="/home" >
                <span class="iconfont icon-shouye" ></span>
                <p>首页</p>           
        </RouterLink>
          <RouterLink to="/sellbook/book1" >
                <span class="iconfont icon-fenlei"></span>
                <p>卖书</p>           
        </RouterLink>
          <RouterLink to="/cart/firstcart" >
                <span class="iconfont icon-gouwuche"></span>
                <p>购物车</p>           
        </RouterLink>
          <RouterLink to="/my/mymessage" >
                <span class="iconfont icon-My"></span>
                <p>个人页</p>             
        </RouterLink>
          
    </footer>
  </div>
</template>

<style lang="scss">
html,
body,
#app,
.container {
    width: 100%;
    height: 100%;
}

html {
    font-size: 26.66666666666666vw;
    body {
        font-size: 14px;
    }
}

.container {
    display: flex;
    flex-direction: column;
    .box {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: auto;

        .header {
            width: 100%;
           
        }

        .content {
            overflow: auto;
        }
    }

    .footer {
        height: 0.5rem;
        // border-top: 1px solid gray;
        display: flex;
        a {
            flex: 1;
            text-decoration: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            color: black;
        }
        a.router-link-active {
            color: #f66;
        }
    }
}
</style>

