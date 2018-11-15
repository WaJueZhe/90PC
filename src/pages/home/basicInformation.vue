<template>
  <div style="width:100%;height:100%">
    <div class="basicInformation-page">
      <Header></Header>
      <LeftNav class="nav-l"></LeftNav>
      <div class="basicInformation">
        <div class="top-view">{{ $t("basicInformation.basicInformation1") }}</div>
        <div class="basicInformation-list">
          <div class="basicInformation-item">
            <div class="basicInformation-name">{{ $t("basicInformation.basicInformation2") }}</div>
            <div class="basicInformation-text">{{[userInfo.userType,$i18n.locale]|userType}}</div>
          </div>
          <div class="basicInformation-item">
            <div class="basicInformation-name">{{ $t("basicInformation.basicInformation3") }}</div>
            <div class="basicInformation-text">{{userInfo.userFullName}}</div>
          </div>
          <div class="basicInformation-item">
            <div class="basicInformation-name">{{ $t("basicInformation.basicInformation4") }}</div>
            <div class="basicInformation-text">{{ $t("basicInformation.basicInformation5") }}</div>
          </div>
          <div class="basicInformation-item">
            <div class="basicInformation-name">{{ $t("basicInformation.basicInformation6") }}</div>
            <div class="basicInformation-text">{{userInfo.created}}</div>
          </div>
          <div class="basicInformation-item">
            <div class="basicInformation-name">{{ $t("basicInformation.basicInformation7") }}</div>
            <div class="basicInformation-text">{{userInfo.publicKey}}</div>
          </div>
          <div class="basicInformation-item">
            <div class="basicInformation-name">{{ $t("basicInformation.basicInformation8") }}</div>
            <div class="basicInformation-text">{{userInfo.userAddress}}</div>
          </div>          
        </div>
        <div class="key-btn" @click="keyZzc = true">{{ $t("basicInformation.basicInformation9") }}</div>

      </div>
    </div>
    <div class="key-zzc" v-show="keyZzc">
      <div class="keyBox">
        <div class="keyBox-tit">{{ $t("basicInformation.basicInformation9") }}</div>
        <p>{{ $t("basicInformation.basicInformation10") }}</p>
        <div class="public-key">
          <textarea v-model="userPublicKey" :placeholder="$t('basicInformation.basicInformation11')"></textarea>
        </div>
        <p>{{ $t("basicInformation.basicInformation12") }}</p>
        <div class="public-key">
          <textarea v-model="userPrivateKey" :placeholder="$t('basicInformation.basicInformation13')"></textarea>
        </div>
        <p>{{ $t("basicInformation.basicInformation14") }}</p>
        <div class="keyBox-btn">
          <div @click="verifyKey()" class="verify">{{ $t("basicInformation.basicInformation15") }}</div>
          <div class="cancel" @click="keyZzc = false">{{ $t("basicInformation.basicInformation16") }}</div>
        </div>
      </div>
    </div>
    <Footer></Footer>

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
import Header from "../../components/header";
import Footer from "../../components/footer";
import LeftNav from "../../components/left_nav";
import Hooltip from '../../components/hint/tooltip.vue';
export default {
  data () {
    return {
      keyZzc:false,
      userPublicKey:null,
      userPrivateKey:null,
      userInfo:{},
      hooltip:{
        isShow:false,
        cancel:'',
        ensure:'确定',
        tipTitle:'提示',
        tipContent:'申请提交成功'
      }      
    }
  },
  watch: {
    keyZzc(val){
      if(!val){
        this.userPrivateKey=null
      }
    }
  },
  filters: {
    userType([key,lang]){
      switch (key) {
        case '1':
          if(lang=='en'){
            return 'Personal'
          }
          return '普通用户'
          break;
        case '2':
          if(lang=='en'){
            return 'Merchant'
          }
          return '商户'
          break;      
        default:
          if(lang=='en'){
            return 'Unkonw'
          }        
          return '未知'
          break;
      }
    }
  },
  methods: {
    abolish(){
      this.hooltip.isShow = false
    },
    confirm(){
      this.hooltip.isShow = false
    },    
    init(){
      let p={}
      this.axios
        .post(`${this.api.baseURL}/me/userInfo`, p)
        .then(res => {
          console.log(res)
          if(res.data.success){
            this.userInfo = res.data.data.userInfo
            this.userPublicKey = this.userInfo.publicKey
          }
        });
    },
    verifyKey(){
      if(this.userPublicKey==null||this.userPublicKey==''){
          this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'提示',
              tipContent:'公钥不能为空'
            }
        return
      }
      if(this.userPrivateKey==null||this.userPrivateKey==''){
            this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'提示',
              tipContent:'私钥不能为空'
            }
        return
      }      
      let p={
        publicKey:this.userPublicKey,
        privateKey:this.userPrivateKey
      }
      this.axios
        .post(`${this.api.baseURL}/me/keyVerify`, p)
        .then(res => {
          if(res.data.success){
            let result = res.data.data.result
            if(result==-1){
              this.hooltip={
                isShow:true,
                cancel:'',
                ensure:'确定',
                tipTitle:'提示',
                tipContent:'公私钥不匹配，校验失败'
              }
            }
            if(result==1){
              this.hooltip={
                isShow:true,
                cancel:'',
                ensure:'确定',
                tipTitle:'提示',
                tipContent:'公私钥匹配成功'
              }
            }            
          }
        });      
    }
  },
  created () {
    this.init()
  },
  components: {
    Header,
    Footer,
    Hooltip,
    LeftNav,
  }
}
</script>
<style lang="less">
.basicInformation-page {
  margin: auto;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .nav-l {
    width: 20%;
  }

  .basicInformation {
    padding: 0 20px;
    margin-top: 110px;
    margin-bottom: 20px;
    width: 80%;
    height: 100%;
    background-color: #fff;
    padding-bottom: 50px;

    .top-view {
      background: white;
      padding: 30px 0;
      font-size: 32px;
    }

    .basicInformation-list {
      width: 100%;

      .basicInformation-item {
        width: 100%;
        height: 40px;
        line-height: 40px;
        overflow: hidden;

        .basicInformation-name {
          display: inline-block;
          width: 12%;
          height: 100%;
          font-size: 20px;
          font-weight: bold;
        }
        .basicInformation-text {
          display: inline-block;
          width: 75%;
          height: 100%;
          font-size: 18px;
        }
      }
    }

    .key-btn {
      margin-top: 20px;
      width: 120px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #0984e3;
      color: #fff;
      border-radius: 6px;
      cursor: pointer;
    }

    .lately {
      padding: 20px 0;
      width: 100%;

      .lately-login {
        font-size: 20px;
        font-weight: bold;
      }

      .lately-number {
        font-size: 18px;
      }
    }
  }
}
.key-zzc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.3);
  z-index: 2222;

  .keyBox {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px;
    width: 500px;
    transform: translate(-50%,-50%);
    background-color: #eee;
    border-radius: 10px;
    z-index: 3333;

    .keyBox-tit {
      padding-bottom: 10px;
      font-size: 18px;
      font-weight: bold;
    }

    .public-key {
      margin-bottom: 20px;
      width: 100%;
      height: 100px;
      background-color: #fff;
      border: 1px solid #666;

      textarea {
        padding: 10px;
        width: 100%;
        height: 100%;
        resize: none;
      }
    }

    .keyBox-btn {
      padding: 0 60px;
      margin-top: 30px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;

      > div {
        flex: 1;
        text-align: center;
        background-color: #0984e3;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;

        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
