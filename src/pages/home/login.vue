<template>
  <div class="login">
    <Header></Header>
    <div class="login-box">
      <div class="shade">
        <div class="message">
          <h6>{{ $t("login.login1") }}</h6>
          <form class="mt-26">
            <div class="group">
              <div class="label">{{ $t("login.login2") }}</div>
              <div class="input">
                <input v-model="userName" type="text">
              </div>
            </div>
            <!-- <p class="help-block">{{ $t("login.login3") }}</p> -->
            <div class="group">
              <div class="label">{{ $t("login.login4") }}</div>
              <div class="input">
                <input v-model="userPass" type="password">
              </div>
            </div>
            <!-- <p v-if="noPass" class="help-block">{{ $t("login.login5") }}</p> -->
          </form>
          <div class="remember">
            <label>
              <input type="checkbox" v-model="psd">
              <span>{{ $t("login.login6") }}</span>
            </label>
          </div>
          <div class="btn" @click="login">{{ $t("login.login1") }}</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <Refresh v-show="loading"></Refresh>
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
import Header from '../../components/header';
import Footer from '../../components/footer';
import Refresh from '../../components/refresh';
import Hooltip from '../../components/hint/tooltip.vue';
import { delCookie, setCookie, getCookie } from "../../js/cookie.js";
export default {
  data() {
    return {
      hooltip:{
        isShow:false,
        cancel:'',
        ensure:'确定',
        tipTitle:'提示',
        tipContent:'申请提交成功'
      },      
      loading:false,
      userName:"",
      userPass:"",
      psd:false
    };
  },
  methods: {
    login(){
      //保存的账号
      let name = this.userName;
      //保存的密码
      let pass = this.userPass;

      this.loading=true;

      let p={
        publicKey:this.userName,
        privateKey:this.userPass
      }

      this.axios
        .post(`${this.api.baseURL}/bsUser/loginByKey`, p)
        .then(res => {
          this.loading=false;
          if (res.data.success) {
            let accessToken = res.data.data.accessToken;
            let account = res.data.data.account;
            let userFullName = res.data.data.userFullName;
            let publicKey = res.data.data.publicKey;
            let userId = res.data.data.userId;
            sessionStorage.setItem('userId',userId);
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('account', account);
            sessionStorage.setItem('userFullName', userFullName);
            sessionStorage.setItem('publicKey', publicKey);

            sessionStorage.setItem('rememberme',this.psd);
            if(this.psd){
              sessionStorage.setItem('privateKey',this.userPass);             
            }else{
              sessionStorage.removeItem('privateKey');
              sessionStorage.removeItem('rememberme');
            }

            this.$router.push({path: '/personal'});
            
          }else{
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('account');
            sessionStorage.removeItem('userFullName');
            sessionStorage.removeItem('publicKey');

            if(this.$i18n.locale=='en'){
              this.hooltip={
                isShow:true,
                cancel:'',
                ensure:'OK',
                tipTitle:'ERROR',
                tipContent:'Unmatched keys'
              }
              return
            }

            this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'登录出错',
              tipContent:'公私钥不匹配'
            }
          }
        });
    },
    abolish(){
      this.hooltip.isShow = false
    },
    confirm(){
      this.hooltip.isShow = false
    }
  },
  created () {
    this.psd = sessionStorage.getItem('rememberme')
    if(this.psd){
      this.userName = sessionStorage.getItem('publicKey')
      this.userPass = sessionStorage.getItem('privateKey')
    }
  },
  components: {
    Header,
    Footer,
    Hooltip,    
    Refresh
  }
};
</script>
<style lang="less">
.login {
  width: 100%;
  height: 100%;

  .login-box {
    position: relative;
    width: 100%;
    height: 717px;
    background: url('../../assets/login.png') no-repeat;
    background-size: 100% 100%;
    // background-size: convert;

    .shade {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      padding: 10px;
      width: 400px;
      height: 348px;
      background-color: #e6e6e6;
      border-radius: 10px;
      
      .message {
        padding: 40px 26px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;

        h6 {
          position: relative;
          font-size: 24px;
          text-align: center;
          color: #0b87e3;
          font-weight: normal;

          &::before {
            content: ' ';
            position: absolute;
            top: 50%;
            left: 95px;
            transform: translateY(-50%);
            width: 26px;
            height: 3px;
            background-color: #0b87e3;
          }
          &::after {
            content: ' ';
            position: absolute;
            top: 50%;
            right: 95px;
            transform: translateY(-50%);
            width: 26px;
            height: 3px;
            background-color: #0b87e3;
          }
        }

        .mt-26 {
          margin-top: 46px;

          .group {
            padding: 0 10px;
            margin-bottom: 20px;
            width: 100%;
            height: 38px;
            line-height: 38px;
            font-size: 16px;
            border: 1px solid #dadada;

            &::after {
              display: block;
              clear: both;
              content: ' ';
            }

            .label {
              float: left;
              width: 28%;
            }

            .input {
              float: left;
              width: 72%;
              height: 100%;

              > input {
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                vertical-align: top;
              }
            }
          }

          .help-block {
            margin-top: -20px;
            font-size: 12px;
            color: red;
          }
        }

        .remember {
          width: 100%;

          label {
            width: 100%;
            height: 16px;
            line-height: 16px;

            > input {
              width: 16px;
              height: 16px;
              vertical-align: middle;
            }

            > span {
              vertical-align: middle;
            }
          }
        }

        .btn {
          margin-top: 30px;
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          color: #fff;
          background-color: #169fe3;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
