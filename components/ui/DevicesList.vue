<template>
  <div class="device-list">
    <button class="btn top">
      <img src="@/assets/images/top.svg" alt="top" />
    </button>
    <button class="btn bottom">
      <img src="@/assets/images/bottom.svg" alt="top" />
    </button>
    <ul>
      <li
        v-for="device in devices"
        :key="device"
        :class="active == device ? 'active' : ''"
        @click="setActive(device)"
      >
        {{ device }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devices: ['耐高温1', '耐高温2', '耐高温3', '防爆1'],
      active: '耐高温3',
    }
  },
  methods: {
    setActive(active) {
      this.active = active
    },
  },
}
</script>
<style lang="scss" scoped>
.device-list {
  width: 200px;
  height: 90%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    padding: 2px;
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
  .btn {
    background: transparent;
    outline: none;
    border: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
  .top {
    top: 16px;
  }
  .bottom {
    bottom: 16px;
  }
  ul {
    text-align: center;
    padding: 50px 3px;
    position: relative;
    max-width: 100%;
    li {
      height: 48px;
      line-height: 48px;
      cursor: pointer;
      font-family: 'Noto Sans SC';
      font-weight: 500;
      font-size: 18px;
      color: #ffffff;
      &.active {
        background: linear-gradient(266.86deg, #4e2ecf 0%, #558cec 99.46%);
      }
    }
  }
}
</style>
