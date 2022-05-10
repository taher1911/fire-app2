<template>
  <div class="settings">
    <DevicesList />
    <div class="slider">
      <div class="image">
        <img src="@/assets/images/image1.png" alt="imagee" />
      </div>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div
            v-for="i in 3"
            :key="i"
            class="swiper-slide"
            :class="`slide--${i}`"
          >
            <img src="@/assets/images/image1.png" alt="image" />
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="slider-info">
      <div>
        <div class="input-data">
          <input
            v-model="versions[0].title"
            type="text"
            name="floating_email"
            required
          />
          <label>名称</label>
          <button class="edit">
            <img src="@/assets/images/edit.svg" alt="edit" />
          </button>
        </div>
        <div class="input-data">
          <input
            v-model="versions[0].note"
            type="text"
            name="floating_email"
            required
          />
          <label>备注</label>
          <button class="edit">
            <img src="@/assets/images/edit.svg" alt="edit" />
          </button>
        </div>
      </div>
      <div class="about-product">
        <div class="data">
          <h3 class="title">型号</h3>
          <p class="inf-data">{{ versions[0].model }}</p>
        </div>
        <div class="data">
          <h3 class="title">编号</h3>
          <p class="inf-data">{{ versions[0].numbering }}</p>
        </div>
        <div class="data">
          <h3 class="title">Serial Number</h3>
          <p class="inf-data">{{ versions[0].serialNumber }}</p>
        </div>
      </div>

      <div class="more-info">
        <div v-for="data in versions[0].moreInfo" :key="data.id" class="data">
          <h3 class="title">{{ data.title }}</h3>
          <h3 class="title">{{ data.desc }}</h3>
          <p>{{ data.version }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import { mapState } from 'vuex'
import DevicesList from '../components/ui/DevicesList.vue'

// import 'swiper/css'
export default {
  name: 'IndexPage',
  components: { DevicesList },
  computed: {
    ...mapState(['versions']),
  },
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([Navigation, Pagination, Autoplay])

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 70,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed

      // Autoplay if needed
      //   autoplay: {
      //     delay: 3000,
      //   },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Configure other options. Not tested
    })
  },
}
</script>

<style lang="scss" scoped>
.settings {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Noto Sans SC';
  .slider {
    width: 55%;
    text-align: center;
    margin-bottom: 20px;
    .image {
      img {
        object-fit: cover;
        width: 80%;
        max-width: 500px;
      }
    }
    .swiper {
      //   height: 300px;
      overflow: hidden;
      position: relative;
      width: 700px;
      padding: 50px 70px 0;
      .swiper-slide {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 140px;
        height: 140px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 15px;
        cursor: pointer;
        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
      }
      .swiper-button-prev,
      .swiper-button-next {
        color: #fff;
        &::after {
          font-size: 25px;
        }
      }
      .swiper-button-prev {
        left: 0px;
        top: 64%;
      }
      .swiper-button-next {
        right: 0px;
        top: 64%;
      }
    }
  }
  .slider-info {
    width: 520px;
    margin-right: 70px;
    .input-data {
      width: 100%;
      height: 50px;
      margin: 70px 0;
      position: relative;

      input {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        font-size: 28px;
        background: transparent;
        border-bottom: 1px solid #fff;
        outline: none;
      }
      &:nth-of-type(1) {
        input {
          font-family: 'Roboto', sans-serif;
          font-size: 28px;
        }
      }
      label {
        position: absolute;
        bottom: 10px;
        pointer-events: none;
        transition: all 0.3s ease;
        transform: translateY(-35px);
        font-weight: 400;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
      }
      .edit {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        position: absolute;
        right: 4px;
        top: 12px;
      }
    }
    .about-product,
    .more-info {
      margin-top: 90px;
      .data {
        margin-bottom: 15px;
        .title {
          font-weight: 400;
          font-size: 14px;
          margin-bottom: 4px;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.6);
        }
        .inf-data {
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          line-height: 150%;
          color: #fff;
        }
      }
    }
    .more-info {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-top: 80px;
      p {
        font-size: 25px;
        font-weight: 500;
        margin-top: 12px;
      }
    }
  }
}
</style>
