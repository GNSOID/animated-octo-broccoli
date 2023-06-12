<!-- 欢迎页 -->
<template>
  <div class="start">
    <div class="start__logo"></div>
    <div class="start__text">欢迎使用</div>
    <div class="start__text">Vue Admin</div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
    }
  },
  mounted () {
    setTimeout(() => {
      this.$router.push('/login')
    }, 1000)
  }
}
</script>