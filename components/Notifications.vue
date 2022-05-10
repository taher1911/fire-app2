<template>
  <div class="notification">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="noti"
    >
      <div class="image">
        <img
          :src="require(`@/assets/images/${notification.image}`)"
          :alt="notification.title"
        />
      </div>
      <div class="text">
        <h3 class="title">{{ notification.title }}</h3>
        <p>{{ notification.message }}</p>
      </div>
      <button class="remove">x</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NotificationsPage',
  computed: {
    ...mapState(['notifications']),
  },
}
</script>

<style lang="scss" scoped>
.notification {
  padding: 35px;
  .noti {
    padding: 25px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 10px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      padding: 1px;
      background: linear-gradient(
        to left,
        rgb(157, 157, 157),
        rgb(157, 157, 157)
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      @media screen and(max-width:600px) {
        background: transparent;
      }
    }
    .image {
      margin-right: 20px;
    }
    .text {
      h3 {
        font-weight: 500;
        font-size: 22px;
        color: #ffffff;
        margin-bottom: 8px;
      }
      p {
      }
    }
    .remove {
      position: absolute;
      top: 15px;
      right: 20px;
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      font-size: 20px;
    }
  }
}
</style>
