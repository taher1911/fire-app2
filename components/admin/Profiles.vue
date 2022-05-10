<template>
  <div class="home">
    <div class="button">
      <button class="adminMainButton" @click="createData()">添加设备</button>
    </div>
    <div class="content">
      <div class="items-titles">
        <span>索引</span>
        <span>账号</span>
        <span>名称</span>
        <span>密码</span>
        <span>备注</span>
        <span>所属单位（编号)</span>
        <span>SN</span>
      </div>
      <div v-for="d in profilesData" :key="d.id" class="item">
        <span>{{ d.id }}</span>
        <span>{{ d.acc_num }}</span>
        <span>{{ d.name }}</span>
        <span>{{ d.password }}</span>
        <span>{{ d.note }}</span>
        <span>{{ d.unit }}</span>
        <div>
          <div v-for="s in d.sn" :key="s">{{ s }}</div>
        </div>

        <div class="buttons">
          <button class="edit" @click="handleEdit(d)">
            <img src="@/assets/images/edit.svg" alt="edit" />
          </button>
          <button class="delete">
            <img src="@/assets/images/delete.svg" alt="delete" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="popup" class="popUp">
      <form class="form" @submit.prevent="handleUpdateData()">
        <h3 class="title">
          <span>添加用户</span>
          <span class="close" @click="handleClosePopup()">
            <img src="@/assets/images/close.svg" alt="close" />
          </span>
        </h3>
        <div class="input-data">
          <input v-model="acc_num" required />
          <label>账号<span>*</span></label>
        </div>
        <div class="input-data">
          <input v-model="name" required />

          <label>名称<span>*</span></label>
        </div>
        <div class="input-data">
          <input v-model="password" required />

          <label>初始密码<span>*</span></label>
        </div>
        <div class="input-data">
          <input v-model="note" required />

          <label>备注<span>*</span></label>
        </div>

        <div class="input-data">
          <!-- <select v-model="unit_num" required /> -->
          <select id="devides" name="devices_sn">
            <option v-for="s in sn" :key="s" value="s">{{ s }}</option>
          </select>
          <label> 可查看设备 </label>
        </div>
        <div class="input-data">
          <select id="devides" name="devices_sn">
            <option value=" 点击选择">点击选择</option>
          </select>

          <label>所属单位<span>*</span></label>
        </div>

        <div class="buttons">
          <button class="cancel" @click="handleClosePopup()">取消</button>
          <button class="save" type="submit">保存</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminProfiles',
  data() {
    return {
      acc_num: '',
      name: '',
      password: '',
      note: '',
      unit: '',
      sn: [],
      popup: false,
    }
  },
  computed: {
    profilesData() {
      return this.$store.getters.getProfiles()
    },
  },
  methods: {
    createData() {
      this.popup = true
    },
    handleEdit(d) {
      this.acc_num = d.acc_num
      this.name = d.name
      this.password = d.password
      this.note = d.note
      this.unit = d.unit
      this.sn = d.sn
      this.popup = true
    },
    handleClosePopup() {
      this.acc_num = ''
      this.name = ''
      this.password = ''
      this.note = ''
      this.unit = ''
      this.sn = []
      this.popup = false
    },
    handleUpdateData() {},
  },
}
</script>
<style lang="scss" scoped>
.home {
  font-family: 'Noto Sans SC';
  .button {
    display: flex;
    justify-content: flex-end;
    margin: 30px 0;
  }
  .content {
    .items-titles,
    .item {
      border-bottom: 2px solid rgb(131, 131, 131);
    }
    .items-titles {
      padding: 15px 10px;
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 2fr 3fr 2.5fr 3fr 2fr;
      font-size: 17px;
      color: #ffffff;
      font-weight: 500;
    }
    .item {
      padding: 15px 10px;
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 2fr 3fr 2.5fr 3fr 2fr;
      transition: all 0.3s;
      align-items: center;
      &:hover {
        background: rgba(85, 140, 236, 0.5);
        box-shadow: inset 0px -1px 0px #e0e0e0;
      }
      .buttons {
        display: flex;
        justify-content: center;
        button {
          background: transparent;
          outline: none;
          border: none;
          cursor: pointer;
          margin: 0 14px;
        }
      }
    }
  }

  .popUp {
    color: #000 !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    .form {
      color: #000 !important;
      width: 676px;
      height: 864px;
      background: #ffffff;
      box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
      border-radius: 20px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 13px 20px;
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 70px;
        span {
          color: #000 !important;
          font-size: 22px;
          &:last-of-type {
            cursor: pointer;
          }
        }
      }
      .input-data {
        width: 80%;
        height: 40px;
        position: relative;
        margin: 65px auto;

        input,
        select {
          font-family: 'Noto Sans SC';
          display: block;
          width: 100%;
          height: 100%;
          border: none;
          font-size: 28px;
          background: transparent;
          border-bottom: 1px solid rgba(0, 0, 0, 0.23);
          outline: none;
          color: #000;
          padding-bottom: 10px;
          font-weight: 600;
        }
        select {
          font-size: 24px;
          color: rgb(62, 62, 62) !important;
        }
        option {
          color: rgb(62, 62, 62) !important;
        }
        label {
          position: absolute;
          bottom: 10px;
          font-size: 16px;
          pointer-events: none;
          transition: all 0.3s ease;
          transform: translateY(-35px);
          color: rgba(0, 0, 0, 0.8);
          span {
            font-size: 17px;
            color: rgba(242, 26, 26, 0.8);
          }
        }
      }
      .buttons {
        display: flex;
        justify-content: center;
        button {
          font-family: 'Noto Sans SC';
          padding: 10px 40px;
          background: transparent;
          outline: none;
          border: none;
          border-radius: 50px;
          cursor: pointer !important;
          width: 150px;
          height: 56px;
          font-size: 18px;
          margin: 0 30px;
          font-weight: 700;
          &:nth-of-type(1) {
            border: 1px solid #000;
            color: #000;
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
        }
      }
    }
  }
}
</style>
