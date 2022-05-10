<template>
  <div class="signin-container">
    <form class="signin" @submit.prevent="submitForm">
      <h2>LOGO</h2>
      <div class="input-data">
        <input v-model="id" type="text" name="floating_email" required />

        <label>账号</label>
      </div>
      <div class="input-data">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          required
        />
        <span class="seePass" @click="showPassHandler">
          <img src="@/assets/images/Vector.png" alt="see" />
        </span>

        <label>密码</label>
      </div>
      <div class="press">
        <button><img src="@/assets/images/right-arrow.png" alt="see" /></button>
        <div class="text">请按住滑块，拖动到最右端</div>
      </div>
      <div class="btns">
        <button class="btn" @click.prevent="cancelHandler()">取消</button>
        <button class="btn">登录</button>
      </div>
    </form>
  </div>
</template>
<script>
// import { mapMutations, mapState } from 'vuex'
export default {
  layout: 'SignForm',
  data() {
    return {
      id: '',
      password: '',
      showPassword: false,
      error: null,
    }
  },
  methods: {
    submitForm() {
      if (this.id === '1111' && this.password === 'admin') {
        localStorage.setItem(
          'auth',
          JSON.stringify({
            id: this.id,
            password: this.password,
            role: 'admin',
          })
        )
        this.$store.commit('SET_USER', {
          id: this.id,
          password: this.password,
          role: 'admin',
        })
        // this.$router.pust(pa)
      }
      if (this.id === '1111' && this.password === 'user') {
        localStorage.setItem(
          'auth',
          JSON.stringify({
            id: this.id,
            password: this.password,
            role: 'user',
          })
        )
        this.$store.commit('SET_USER', {
          id: this.id,
          password: this.password,
          role: 'uset',
        })
      }

      // try {

      //   // await console.log({
      //   //   id: this.id,
      //   //   password: this.password,
      //   //   role: 'admin',
      //   // })
      //   // await SET_USER({
      //   //   id: '1111',
      //   //   password: 'admin',
      //   //   role: 'admin',
      //   // })
      //   // if (this.email === '1111' && this.password === 'admin') {
      //   //   // await this.$store.dispatch('SIGNIN', {
      //   //   //   id: '1111',
      //   //   //   password: 'admin',
      //   //   //   role: 'admin',
      //   //   // })
      //   //   this.SET_USER({
      //   //     id: '1111',
      //   //     password: 'admin',
      //   //     role: 'admin',
      //   //   })
      //   //   // await this.$store.commit('SET_USER', {
      //   //   //   id: '1111',
      //   //   //   password: 'admin',
      //   //   //   role: 'admin',
      //   //   // })
      //   //   this.$router.push({
      //   //     path: '/',
      //   //   })
      //   //   // this.$store.dispatch('SIGNIN',)
      //   //   // SIGNIN({
      //   //   //   id: '1111',
      //   //   //   password: 'admin',
      //   //   //   role: 'admin',
      //   //   // })
      //   // }
      //   // if (this.email === '1111' && this.password === 'user') {
      //   //   await this.$store.dispatch('SIGNIN', {
      //   //     id: '1111',
      //   //     password: 'user',
      //   //     role: 'user',
      //   //   })
      //   // }
      // } catch (err) {
      //   this.error = err
      // }
    },
    showPassHandler() {
      this.showPassword = !this.showPassword
    },
    cancelHandler() {
      this.id = ''
      this.password = ''
    },
  },
}
</script>
<style lang="scss" scoped>
.signin-container {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background: url('@/assets/images/BG.png') center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and(max-width:600px) {
    background: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url('@/assets/images/BG.png') center center/cover;
  }
  .signin {
    width: 420px;
    height: 480px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    padding: 45px 40px;
    position: relative;
    border-radius: 15px;
    @media screen and(min-width:1820px) {
      width: 630px;
      height: 696px;
      padding: 70px 40px;
    }
    @media screen and(max-width:600px) {
      background: transparent;
      backdrop-filter: blur(0px);
      padding: 45px 25px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 15px;
      padding: 2px;
      background: linear-gradient(to bottom, #558cec, #6fcf97);
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      @media screen and(max-width:600px) {
        background: transparent;
      }
    }
    h2 {
      font-size: 23px;
      font-weight: 500;
      color: #ffffff;
      @media screen and(min-width:1820px) {
        font-size: 36px;
      }
    }
    .input-data {
      width: 100%;
      height: 30px;
      position: relative;
      margin: 50px 0;
      @media screen and(min-width:1820px) {
        height: 50px;
        margin: 70px 0;
      }
      input {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        font-size: 15px;
        background: transparent;
        border-bottom: 1px solid #fff;
        outline: none;
        &:focus ~ label,
        &:valid ~ label {
          transform: translateY(-18px);
          font-size: 11px;
          @media screen and(min-width:1820px) {
            font-size: 15px;
            transform: translateY(-35px);
          }
        }
        @media screen and(min-width:1820px) {
          font-size: 28px;
        }
      }
      &:nth-of-type(1) {
        input {
          font-family: 'Roboto', sans-serif;
          font-size: 19px;
          @media screen and(min-width:1820px) {
            font-size: 28px;
          }
        }
      }

      .seePass {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 7px;
        width: 25px;
        img {
          width: 16px;
          @media screen and(min-width:1820px) {
            width: 24px;
          }
        }
      }
      label {
        position: absolute;
        bottom: 10px;
        font-size: 15px;
        pointer-events: none;
        transition: all 0.3s ease;
        @media screen and(min-width:1820px) {
          font-size: 22px;
        }
      }
    }
    .press {
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      height: 35px;
      position: relative;
      @media screen and(min-width:1820px) {
        height: 48px;
      }
      button {
        background: linear-gradient(217.65deg, #558cec 4.14%, #6fcf97 94.35%);
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        width: 100px;
        height: 38px;
        line-height: 47px;
        @media screen and(min-width:1820px) {
          width: 98.93px;
          height: 56px;
          line-height: 65px;
        }
        img {
          width: 17px;
        }
      }
      div {
        width: 100%;
        padding: 10px;
        font-size: 13px;
        @media screen and(min-width:1820px) {
          font-size: 16px;
          padding-left: 40px;
        }
      }
    }
    .btns {
      margin-top: 50px;
      display: flex;
      justify-content: space-evenly;
      position: relative;
      .btn {
        padding: 10px 40px;
        background: transparent;
        outline: none;
        border: none;
        border-radius: 50px;
        cursor: pointer !important;
        &:nth-of-type(1) {
          border: 1px solid #fff;
          @media screen and(max-width:600px) {
            display: none;
          }
        }
        &:nth-of-type(2) {
          background: linear-gradient(266.86deg, #4e2ecf 0%, #558cec 99.46%);
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
          @media screen and(max-width:600px) {
            width: 100%;
          }
        }
        @media screen and(min-width:1820px) {
          width: 150px;
          height: 56px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
