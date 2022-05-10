<template>
  <div class="app">
    <Navbar />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Navbar from '../components/ui/Navbar.vue'
export default {
  name: 'DefaultLayout',
  components: { Navbar },
}
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/main-bg.png') center center/cover;
  overflow: hidden;
  .container {
    background: rgba(0, 0, 0, 0.6);
    border: 3px solid #558cec;
    border-radius: 30px;
    width: 89%;
    height: 86vh;
    overflow-y: auto;
    margin: 105px auto 0;
    padding: 0 40px;
    &::selection {
      background: #999;
      color: #000;
    }
    /* width */
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
}
</style>
