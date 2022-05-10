<template>
  <div class="home">
    <div class="button">
      <button class="adminMainButton" @click="createData()">添加设备</button>
    </div>
    <div class="content">
      <div class="items-titles">
        <span>索引</span>
        <span>Subject</span>
      </div>
      <div v-for="d in getNotifications" :key="d.id" class="item">
        <span>{{ d.id }}</span>
        <span>{{ d.subject }}</span>

        <div class="buttons">
          <button class="delete">
            <img src="@/assets/images/delete.svg" alt="delete" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="popup" class="popUp">
      <form class="form" @submit.prevent="handleUpdateData()">
        <h3 class="title">
          <span>新消息</span>
          <span class="close" @click="handleClosePopup()">
            <img src="@/assets/images/close.svg" alt="close" />
          </span>
        </h3>
        <div class="input-data">
          <input v-model="subject" required />
          <label>Subject<span>*</span></label>
        </div>
        <div class="input-data">
          <textarea v-model="message" required />

          <label>Message</label>
        </div>
        <div
          class="drag"
          :class="{ active: active }"
          @dragover.prevent="dragEnterHandler()"
          @dragleave="dragLeaveHandler()"
          @drop.prevent="dropHandler($event)"
        >
          <div v-if="!uploadedFile" class="content">
            <img src="@/assets/images/upload.svg" alt="upload" />
            <h3 class="drop">
              Drop image or video here, or
              <span type="input" @click="BrowseBtnHandler()"> Browse </span>
              <input
                type="file"
                hidden
                class="file-input"
                @change="browseHandler($event)"
              />
            </h3>
            <p>Support: JPG, PNG & MP4</p>
            <p>Max. file size: 20 MB</p>
          </div>
          <p v-if="uploadedFile" class="uploaded">
            {{ uploadedFileName }} <span>uploaded</span>
          </p>
        </div>

        <div class="buttons">
          <button class="cancel" @click="handleClosePopup()">取消</button>
          <button class="save" type="submit">发布消息</button>
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
      subject: '',
      message: '',
      file: [],
      popup: false,
      active: false,
      uploadedFile: false,
      uploadedFileName: '',
    }
  },
  computed: {
    getNotifications() {
      return this.$store.getters.getNotifications()
    },
  },
  methods: {
    dragEnterHandler() {
      this.active = true
    },
    dragLeaveHandler() {
      this.active = false
    },
    dropHandler($event) {
      this.file = $event.dataTransfer.files[0]
      const validExtensions = ['image/png', 'image/jpg', 'video/mp4']
      if (validExtensions.includes(this.file.type)) {
        if (this.file.size / 1000000 <= 20) {
          this.uploadedFile = true
          this.uploadedFileName = this.file.name
        } else {
          alert('file should be less than 20MB')
          this.file = []
        }
      } else {
        alert('file should be png,jpg or mp4')
        this.file = []
      }
    },
    BrowseBtnHandler() {
      document.querySelector('.file-input').click()
    },
    browseHandler($event) {
      this.file = $event.target.files[0]
      const validExtensions = ['image/png', 'image/jpg', 'video/mp4']
      if (validExtensions.includes(this.file.type)) {
        if (this.file.size / 1000000 <= 20) {
          this.uploadedFile = true
          this.uploadedFileName = this.file.name
        } else {
          alert('file should be less than 20MB')
          this.file = []
        }
      } else {
        alert('file should be png,jpg or mp4')
        this.file = []
      }
    },
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
      this.subject = ''
      this.message = ''
      this.file = []
      this.uploadedFile = false
      this.uploadedFileName = ''
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
      grid-template-columns: 1fr 9fr;
      font-size: 17px;
      color: #ffffff;
      font-weight: 500;
    }
    .item {
      padding: 15px 10px;
      display: grid;
      grid-template-columns: 1fr 9fr 1fr;
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
      height: 725px;
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
        textarea {
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
        textarea {
          font-size: 16px;
          resize: none;
          min-height: 100px;
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
          background: transparent;
          outline: none;
          border: none;
          border-radius: 50px;
          cursor: pointer !important;
          min-width: 150px;
          height: 53px;
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
    .drag {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 530px;
      height: 208px;
      margin: 100px auto 50px;
      border: 1px dashed rgba(15, 39, 48, 0.65);
      border-radius: 15px;
      &.active {
        border: 1px solid rgba(15, 39, 48, 0.65);
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 64px;
          margin: 20px auto;
        }
        h3 {
          font-size: 18px;
          line-height: 26px;
          text-align: center;
          color: #000000;
          span {
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            color: #558cec;
            font-size: 18px;
            font-weight: 600;
          }
        }
        p {
          color: #888;
          line-height: 1.8;
          font-weight: 400;
        }
      }
      p {
        color: #000;
        font-weight: bold;
        width: 80%;
        text-align: center;
        span {
          color: rgb(2, 193, 2);
        }
      }
    }
  }
}
</style>
