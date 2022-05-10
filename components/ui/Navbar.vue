<template>
  <nav>
    <div class="logo">LOGO</div>
    <div v-if="user.role == 'admin'" class="nav">
      <nuxt-link to="/">
        <img src="@/assets/images/Client.svg" alt="market" />
        远程查看</nuxt-link
      >
      <nuxt-link to="/admin/videos">
        <img src="@/assets/images/video.svg" alt="video" /> 远程查看</nuxt-link
      >

      <nuxt-link to="/admin/profile"
        ><img src="@/assets/images/user.svg" alt="video" /> 用户信息</nuxt-link
      >
      <nuxt-link to="/admin/notifications">
        <img src="@/assets/images/notification.svg" alt="video" />
        系统消息</nuxt-link
      >
    </div>
    <div v-if="user.role != 'admin'" class="nav">
      <nuxt-link to="/">
        <img src="@/assets/images/video.svg" alt="video" /> 远程查看</nuxt-link
      >
      <nuxt-link to="/setting"
        ><img src="@/assets/images/settings.svg" alt="video" />
        设备管理</nuxt-link
      >
      <nuxt-link to="/profile"
        ><img src="@/assets/images/user.svg" alt="video" /> 用户信息</nuxt-link
      >
      <nuxt-link to="/notifications">
        <img src="@/assets/images/notification.svg" alt="video" />
        系统消息</nuxt-link
      >
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'NuxtNavbar',
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style lang="scss" scoped>
nav {
  position: absolute;
  top: 48px;
  left: 0;
  width: 100vw;
  .logo {
    position: absolute;
    left: 112px;
    top: -18px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: rgba(255, 255, 255, 0.9);
  }
  .nav {
    display: flex;
    justify-content: center;
    a {
      width: 200px;
      height: 60px;
      background: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.6);
      font-family: 'Noto Sans SC';
      font-size: 22px;
      font-weight: 700;
      border-radius: 15px 15px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin: 0 15px;
      transition: all 0.3s ease;
      &.nuxt-link-exact-active {
        color: rgba(255, 255, 255, 1);
        border: 3px solid #558cec;
        border-bottom-color: rgba(0, 0, 0, 0.8);
        border-bottom-width: 4px;
        background: rgba(0, 0, 0, 0.6);
        img {
          filter: none;
        }
      }
      img {
        margin-right: 10px;
        width: 31px;
        filter: brightness(0) invert(1);
      }
    }
  }
}
</style>
