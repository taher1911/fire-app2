<!-- Please remove this file from your project -->
<template>
  <section class="home">
    <DevicesList />
    <ul class="state state1">
      <li v-for="state in states.state1" :key="state.prop">
        <span>{{ state.prop }}</span> <span>{{ state.value }}</span>
      </li>
    </ul>
    <div class="video-container">
      <h3 class="title">耐高温机器人1（21MPA3)</h3>
      <div class="show">
        <div class="vid">
          <video
            src="https://res.cloudinary.com/freelancer3223/video/upload/v1650470787/pharaohs/yt1s.com_-_Nocopyright_INTRO_Video_NCIO_01_1_d9b5h4.mp4"
            preload="metadata"
            poster="https://res.cloudinary.com/freelancer3223/image/upload/v1651229131/fire-robot/vid-poster_ipw4ij.jpg"
            controls
          ></video>
        </div>
        <div class="check">
          <button>
            <img src="@/assets/images/check.svg" alt="check" />
            <span>车身摄像头</span>
          </button>
          <div class="time-container">
            <span class="date">04/02/2022 </span>
            <span class="time"> 09:43PM</span>
          </div>
        </div>
        <div class="video-details">
          <ul class="state state1">
            <li v-for="state in states.state3" :key="state.prop">
              <span>{{ state.prop }}</span> <span>{{ state.value }}</span>
            </li>
          </ul>
          <div class="operations">
            <button>水位正在复位</button>
            <button>已急停禁止操作</button>
            <button><span>1）图传断开 </span><span>2）数传断开</span></button>
          </div>
          <ul class="state state1">
            <li v-for="state in states.state4" :key="state.prop">
              <span>{{ state.prop }}</span> <span>{{ state.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="state state2">
      <li v-for="state in states.state2" :key="state.prop">
        <span>{{ state.prop }}</span> <span>{{ state.value }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import DevicesList from '../components/ui/DevicesList.vue'

export default {
  name: 'NuxtHome',
  components: {
    DevicesList,
  },
  computed: {
    ...mapState(['states']),
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Noto Sans SC';

  .state {
    width: 203px;
    height: calc(15vh + 10rem);
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    border: 1px solid #fff;
    border-radius: 15px;
    transform: translateY(-11vh);
    overflow: hidden;
    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: calc(100% / 6);
      font-size: calc(0.8vw + 0.1rem);
      &:nth-child(even) {
        background: rgba(85, 140, 236, 0.5);
      }
    }
  }
  .video-container {
    width: 55%;
    text-align: center;

    h3 {
      font-weight: 500;
      margin-bottom: 15px;
    }
    .show {
      position: relative;
      .vid {
        width: 100%;
        height: calc(45vh + 14rem);

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .check {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        button {
          background: transparent;
          outline: none;
          border: none;
          display: flex;
          align-items: center;
          cursor: pointer;
          img {
            width: 22px;
          }
        }
        .time-container {
          font-size: 14px;
        }
      }
      .video-details {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        transform: translateY(50px);
        .state {
          transform: translateY(0px);
          width: 195px;
          height: auto;
          background: rgba(0, 0, 0, 0.75);
          margin: 0 20px;
          border: none;
          li {
            font-size: calc(0.8vw + 0.08rem);
            height: 52px;
            &:nth-child(even) {
              background: transparent;
            }
            &:not(:last-child) {
              border-bottom: 0.1px solid #fff;
            }
          }
        }
        .operations {
          display: flex;
          flex-direction: column;
          width: calc(13vw + 10rem);

          button {
            border: none;
            outline: none;
            padding: 15px;
            margin-bottom: 30px;
            border-radius: 15px;
            font-size: calc(0.8vw + 0.1rem);
            cursor: pointer;
            &:nth-of-type(1) {
              background: rgba(76, 175, 80, 0.9);
            }
            &:nth-of-type(2) {
              background: rgba(255, 152, 0, 0.9);
            }
            &:nth-of-type(3) {
              background: rgba(244, 67, 54, 0.9);
              span {
                display: block;
                &:first-of-type {
                  margin-bottom: 1px;
                }
              }
            }
          }
        }
      }
    }
    // max-width: 700px;
  }
}
</style>
