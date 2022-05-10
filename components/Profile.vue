<template>
  <div class="profile">
    <div class="container">
      <div class="account-number">
        <span>账号</span>
        <p>{{ info.account }}</p>
      </div>
      <div class="input-data">
        <input
          v-model="info.password"
          type="password"
          name="floating_email"
          required
        />
        <label>密码</label>
        <button class="edit" @click="!editPass">
          <img src="@/assets/images/edit.svg" alt="edit" />
        </button>
      </div>
      <div class="input-data">
        <input v-model="info.name" type="text" name="floating_email" required />
        <label>名称</label>
        <button class="edit" @click="editNameHandler()">
          <img src="@/assets/images/edit.svg" alt="edit" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      info: {
        account: '62785354',
        password: '12345678901',
        name: '蒋长洲',
        editPass: false,
        editName: false,
      },
    }
  },
  methods: {
    EditPassword() {
      this.editPass = !this.editPass
    },
    editNameHandler() {
      this.editName = !this.editName
    },
  },
}
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 530px;
    .account-number {
      margin-bottom: -10px;
      p {
        margin-top: 8px;
        font-size: 28px;
        font-weight: 700;
        font-family: 'Roboto';
      }
    }
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
  }
}
</style>
