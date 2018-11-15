<template>
  <div class="footer-page">
    <div class="footer">
      <div class="w">
        <div class="footer-group">
          <div class="group-item">
            <div class="infoBox">
              <div class="title">{{ $t("footer.footer1") }}</div>
              <div class="infoBox-info">{{ $t("footer.footer2") }}{{ $t("footer.footer9") }}</div>
              <div class="infoBox-info">{{ $t("footer.footer3") }}{{ $t("footer.footer10") }}</div>
              <div class="infoBox-info">{{ $t("footer.footer4") }}</div>
            </div>
            <div class="line">
              <img src="../../assets/line.png" alt="">
            </div>
          </div>
          <div class="consult-item">
            <div class="title">{{ $t("footer.footer5") }}</div>
            <div class="from">
              <div class="info-name">
                <div class="name-l">
                  <div  class="name">{{ $t("footer.footer6") }}</div>
                  <div class="input"><input v-model="userName" type="text"></div>
                </div>
                <div class="phone-r">
                  <div class="phone">{{ $t("footer.footer2") }}</div>
                  <div class="input"><input v-model="userTel" type="text" :maxlength="11"></div>
                </div>
              </div>
              <div class="mailbox">
                <div class="email">{{ $t("footer.footer3") }}</div>
                <div class="input"><input v-model="userMail" type="text"></div>
              </div>
              <div class="write">
                <textarea :placeholder="$t('footer.footer13')" v-model="textContent"></textarea>
              </div>
              <div @click="sendMail([$i18n.locale])" class="submit">{{ $t("footer.footer7") }}</div>
            </div>
            <div class="line">
              <img src="../../assets/line.png" alt="">
            </div>
          </div>
          <div class="attention-item">
            <div class="title">{{ $t("footer.footer8") }}</div>
            <div class="attention">
              <div class="attention-code">
                <img src="../../assets/code.jpg" alt="">
              </div>
              <div class="attention-info">
                <div class="design"><img src="../../assets/facebook.png" alt=""></div>
                <div class="design"><img src="../../assets/twitter.png" alt=""></div>
                <div class="design"><img src="../../assets/linkedin.png" alt=""></div>
                <div class="design"><img src="../../assets/weixi.png" alt=""></div>
                <div class="design"><img src="../../assets/qq.png" alt=""></div>
                <div class="design"><img src="../../assets/weibo.png" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span>{{ $t("footer.footer11") }}</span>
      <span>{{ $t("footer.footer12") }}</span>
    </div>
    <Hooltip v-if="hooltip.isShow" 
    :tipTitle="hooltip.tipTitle"
    :cancel="hooltip.cancel"
    :ensure="hooltip.ensure"
    :tipContent="hooltip.tipContent"
    @abolish="abolish"
    @confirm="confirm"></Hooltip>

  </div>
</template>
<script>
import Hooltip from '../hint/tooltip.vue';
export default {
  data() {
    return {
      hooltip:{
        isShow:false,
        cancel:'',
        ensure:'确定',
        tipTitle:'提示',
        tipContent:'成功'
      },
      userName:null,
      userTel:null,
      userMail:null,

      textContent:'',

      screenWidth: document.body.clientWidth
    };
  },
  methods:{
    abolish(){
      this.hooltip.isShow = false
      this.$emit('confirm');
    },
    confirm(){
      this.hooltip.isShow = false
      this.$emit('confirm');
    }, 
    sendMail([lang]){
      if(lang == 'en') {
        if(this.userName==null||this.userName==''){
          this.hooltip={
            isShow:true,
            cancel:'',
            ensure:'OK',
            tipTitle:'Tips',
            tipContent:'Please enter the name!'
          } 
          return        
        }

        if(this.userTel==null||this.userTel==''){
          this.hooltip={
            isShow:true,
            cancel:'',
            ensure:'OK',
            tipTitle:'Tips',
            tipContent:'Please enter the phone!'
          }  
          
          return 
        }

        if(this.userMail==null||this.userMail==''){
          this.hooltip={
            isShow:true,
            cancel:'',
            ensure:'OK',
            tipTitle:'Tips',
            tipContent:'Please enter the contact mailbox!'
          }  
          
          return 
        }
      }
      else {
        if(this.userName==null||this.userName==''){
          this.hooltip={
            isShow:true,
            cancel:'',
            ensure:'确定',
            tipTitle:'提示',
            tipContent:'请输入姓名!'
          } 
          return        
        }

        if(this.userTel==null||this.userTel==''){
          this.hooltip={
            isShow:true,
            cancel:'',
            ensure:'确定',
            tipTitle:'提示',
            tipContent:'请输入联系电话!'
          }  
          
          return 
        }

        if(this.userMail==null||this.userMail==''){
          this.hooltip={
            isShow:true,
            cancel:'',
            ensure:'确定',
            tipTitle:'提示',
            tipContent:'请输入联系邮箱!'
          }  
          
          return 
        }
      }
            

      let p = {
        'userName':this.userName,
        'userTel':this.userTel,
        'userMail':this.userMail,
        'textContent':this.textContent
      }

      this.axios.post(`${this.api.baseURL}/home/emailData`,p)
      .then(res => {
        if(lang == 'en') {
          this.hooltip={
            isShow:true,
            cancel:'',
            ensure:'OK',
            tipTitle:'Tips',
            tipContent:'Your information has been submitted and we will contact you as soon as possible!'
          }
        }else {
          this.hooltip={
            isShow:true,
            cancel:'',
            ensure:'确定',
            tipTitle:'提示',
            tipContent:'您的信息已提交，我们会尽快联系您!'
          }
        }
      })
    } 
  },
  mounted () {
     if(this.screenWidth < 980) {
        window.location.href = this.api.h5burl;
      }
      const that = this
      window.onresize = () => {
          return (() => {
              window.screenWidth = document.body.clientWidth
              that.screenWidth = window.screenWidth
          })()
      }
  },
  watch: {
      screenWidth (val) {
          if (!this.timer) {
              this.screenWidth = val
              this.timer = true
              let that = this
              setTimeout(function () {
                  // that.screenWidth = that.$store.state.canvasWidth
                  console.log(that.screenWidth)
                  if(that.screenWidth < 980) {
                    window.location.href = that.api.h5burl;
                  }
                  that.timer = false
              }, 400)
          }
      }
  },
  components: {
    Hooltip
  }
};
</script>
<style lang="less">
.footer-page {
  width: 100%;
  height: 100%;

  .footer {
    width: 100%;
    height: 280px;
    // background-color: #252533;
    background: url('../../assets/footer.png') no-repeat;
    background-size: 100% 100%;

    .w {
      padding: 0;
      min-height: 100%;

      .footer-group {
        width: 100%;
        height: 280px;
        display: flex;
        justify-content: space-between;

        .group-item {
          position: relative;
          flex: 1;
          height: 100%;

          .infoBox {
            padding-left: 80px;
            width: 90%;

            .title {
              margin-top: 58px;
              margin-bottom: 20px;
              font-size: 14px;
              color: #fff;
            }

            .infoBox-info {
              margin-bottom: 20px;
              font-size: 14px;
              color: #fff;
            }
          }

          .line {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
        }

        .consult-item {
          position: relative;
          padding: 0 56px;
          flex: 1;
          height: 100%;

          .title {
            margin-top: 58px;
            margin-bottom: 20px;
            font-size: 14px;
            color: #fff;
          }

          .from {
            width: 100%;

            .info-name {
              width: 100%;
              height: 30px;

              &::after {
                display: block;
                clear: both;
                content: ' ';
              }

              .name-l {
                float: left;
                padding: 0 8px;
                width: 40%;
                height: 30px;
                background-color: #fff;

                &::after {
                  display: block;
                  clear: both;
                  content: ' ';
                }

                .name {
                  float: left;
                  width: 37%;
                  line-height: 30px;
                }

                .input {
                  float: right;
                  width: 63%;
                  height: 100%;

                  > input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                  }
                }
              }
              .phone-r {
                float: right;
                padding: 0 8px;
                width: 58%;
                height: 100%;
                background-color: #fff;

                &::after {
                  display: block;
                  clear: both;
                  content: ' ';
                }

                .phone {
                  float: left;
                  width: 30%;
                  line-height: 30px;
                }

                .input {
                  float: right;
                  width: 70%;
                  height: 100%;

                  > input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                  }
                }
              }
            }

            .mailbox {
              padding: 0 8px;
              margin-top: 10px;
              width: 100%;
              height: 30px;
              background-color: #fff;

              &::after {
                display: block;
                clear: both;
                content: ' ';
              }

              .email {
                float: left;
                width: 15%;
                height: 30px;
                line-height: 30px;
              }

              .input {
                float: right;
                width: 85%;
                height: 100%;

                > input {
                  width: 100%;
                  height: 100%;
                  border: none;
                  outline: none;
                }
              }
            }

            .write {
              margin-top: 10px;
              width: 100%;
              height: 50px;

              > textarea {
                padding: 12px;
                width: 100%;
                height: 100%;
                resize: none;
              }
            }

            .submit {
              margin-top: 10px;
              width: 100%;
              height: 30px;
              line-height: 30px;
              text-align: center;
              background-color: #0984e3;
              border-radius: 5px;
              color: #fff;
              cursor: pointer;
            }
            
          }

          .line {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
        }

        .attention-item {
          position: relative;
          padding: 0 56px;
          flex: 1;
          height: 100%;

          .title {
            margin-top: 58px;
            margin-bottom: 20px;
            font-size: 14px;
            color: #fff;
          }

          .attention {
            width: 100%;

            &::after {
              display: block;
              clear: both;
              content: ' ';
            }

            .attention-code {
              float: left;
              width: 100px;
              height: 100px;
              background-color: #fff;

              > img {
                width: 100%;
                height: 100%;
              }
            }

            .attention-info {
              margin-top: 20px;
              margin-left: 40px;
              float: left;
              width: 160px;

              .design {
                margin-top: 20px;
                margin-right: 30px;
                float: left;
                width: 29px;

                > img {
                  width: 100%;
                }

                &:nth-child(1) {
                  margin-top: 0;
                }
                &:nth-child(2) {
                  margin-top: 0;
                }
                &:nth-child(3) {
                  margin-top: 0;
                }
                &:nth-child(3n) {
                  margin-right: 0;
                }
              }
            }
          }

          .line {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
        }
      }
    }
  }

  .bottom {
    padding: 14px 0;
    width: 100%;
    text-align: center;
    background-color: #181823;
    color: #5d5d5d;

    > span {
      display: block;
    }
  } 
}
</style>
