<template>
  <div class="left">
    <div class="left-nav">
      <ul class="left-menu">
        <li class="left-item">
          <router-link to="/personal">
            <span class="left-item-img"><img src="../../assets/personal-01.png" alt=""></span>
            <span class="left-item-text">{{ $t("leftNav.leftNav1") }}</span>
          </router-link>
        </li>
        <li v-show="accountList.length>0" class="left-item-title">
          <span class="left-item-name">{{ $t("leftNav.leftNav2") }}</span>
          <span class="line"><img src="../../assets/line-03.png" alt=""></span>
        </li>
        <li  class="left-item">
          <router-link v-show="accountType1" to="/tradingRecord">
            <span class="left-item-img"><img src="../../assets/personal-02.png" alt=""></span>
            <span class="left-item-text">{{ $t("leftNav.leftNav3") }}</span>
          </router-link>
        </li>
        <li class="left-item">
          <router-link v-show="accountType2" to="/ticket">
            <span class="left-item-img"><img src="../../assets/personal-03.png" alt=""></span>
            <span class="left-item-text">{{ $t("leftNav.leftNav4") }}</span>
          </router-link>
        </li>
        <li class="left-item">
          <router-link v-show="accountType3" to="/shopping">
            <span class="left-item-img"><img src="../../assets/personal-04.png" alt=""></span>
            <span class="left-item-text">{{ $t("leftNav.leftNav5") }}</span>
          </router-link>
        </li>
        <li class="left-item-title">
          <span class="left-item-name">{{ $t("leftNav.leftNav6") }}</span>
          <span class="line"><img src="../../assets/line-03.png" alt=""></span>
        </li>
        <li class="left-item">
          <router-link to="/myShare">
            <span class="left-item-img"><img src="../../assets/personal-05.png" alt=""></span>
            <span class="left-item-text">{{ $t("leftNav.leftNav7") }}</span>
          </router-link>
        </li>
        <li class="left-item-title">
          <span class="left-item-name">{{ $t("leftNav.leftNav8") }}</span>
          <span class="line"><img src="../../assets/line-03.png" alt=""></span>
        </li>
        <li class="left-item">
          <router-link to="/myApplyFor">
            <span class="left-item-img"><img src="../../assets/personal-06.png" alt=""></span>
            <span class="left-item-text">{{ $t("leftNav.leftNav9") }}</span>
          </router-link>
        </li>
        <li class="left-item">
          <router-link to="/receiveApply">
            <span class="left-item-img"><img src="../../assets/personal-07.png" alt=""></span>
            <span class="left-item-text">{{ $t("leftNav.leftNav10") }}</span>
          </router-link>
        </li>
        <li class="left-item-title">
          <span class="left-item-name">{{ $t("leftNav.leftNav11") }}</span>
          <span class="line"><img src="../../assets/line-04.png" alt=""></span>
        </li>
        <li class="left-item">
          <router-link to="/basicInformation">
            <span class="left-item-img"><img src="../../assets/personal-08.png" alt=""></span>
            <span class="left-item-text">{{ $t("leftNav.leftNav12") }}</span>
          </router-link>
        </li>
        <li class="left-item"  @click="logOut()">
          <span class="left-item-img"><img src="../../assets/personal-09.png" alt=""></span>
          <span class="left-item-text">{{ $t("leftNav.leftNav13") }}</span>
        </li>
      </ul>
    </div>
    <Hooltip v-if="hooltip" 
      :tipTitle="tipTitle"
      :cancel="cancel"
      :ensure="ensure"
      :tipContent="tipContent"
      @abolish="abolish"
      @confirm="confirm"></Hooltip>

      <Refresh v-show="loading"></Refresh>
  </div>
</template>
<script>
import Hooltip from '../hint/tooltip.vue';
import Refresh from '../refresh';
export default {
  data() {
    return {
      activeIndex: 1,
      accountList:[],
      accountType1:false,
      accountType2:false,
      accountType3:false,

      hooltip:false,//提示框
      tipTitle:'提示',
      tipContent:'确定退出登录？',
      cancel:'取消',
      ensure:'确定',

      loading:false,
    };
  },
  methods: {
    getAccountList(){
      let p={
        uid:sessionStorage.getItem('userId')
      };
      this.loading = true;
      this.axios
      .post(`${this.api.baseURL}/bsUserAccount/accountList`,p)
        .then(res => {
        if (res.data.success) {
          
          if(res.data.data.list){
            this.accountList = res.data.data.list
            this.loading = false;
          }
          for(let i=0;i<this.accountList.length;i++){
            let tmp = this.accountList[i]
            if(tmp.accountType==1){
              this.accountType1=true
            }
            if(tmp.accountType==2){
              this.accountType2=true
            }
            if(tmp.accountType==3){
              this.accountType3=true
            }
            this.loading = false;
          }

        } else {
          console.log('获取账户列表失败')
        }
      });
    },
    logOut() {
      if(this.$i18n.locale == 'en') {
        this.tipTitle = 'WARN';
        this.tipContent = 'Are you sure to log out?';
        this.cancel = 'CANCEL';
        this.ensure = 'OK';
      }
      else {
        this.tipTitle = '提示';
        this.tipContent = '确定退出登录？';
        this.cancel = '取消';
        this.ensure = '确定';
      }
      this.hooltip = true;

    },
    confirm(){
      sessionStorage.removeItem('userId')
      sessionStorage.removeItem("accessToken")
      sessionStorage.removeItem('account');
      sessionStorage.removeItem('userFullName');
      sessionStorage.removeItem('publicKey');
      let _this = this
      window.setTimeout(function(){
        _this.$router.push({ path: "/" })
      },1000)
    },
    abolish(){
      this.hooltip = false;
    }
  },
  created () {
    this.getAccountList()
  },
  components: {
    Hooltip,
    Refresh
  }
};
</script>
<style lang="less">
.left {
  // float: left;
  padding: 15px;
  margin-top: 110px;
  margin-bottom: 20px;
  // width: 20%;
  min-height: 100vh;
  background-color: #252533;
  border-right: 1px solid #ddd;
  overflow: hidden;

  .left-nav {
    width: 100%;
    height: 100%;

    .left-menu {
      width: 100%;
      height: 100%;

      .left-item-title {
        position: relative;
        margin-top: 30px;
        font-size: 14px;
        color: #dadada;
        width: 100%;
        height: 20px;

        .left-item-name {
          position: absolute;
          top: 0;
          left: 0;
          width: 85px;
        }

        .line {
          position: absolute;
          top: 50%;
          left: 90px;
          transform: translateY(-50%);
        }
      }

      .left-item {
        position: relative;
        margin-top: 30px;
        width: 100%;
        height: 22px;
        line-height: 22px;
        cursor: pointer;

        > a {
          display: block;
          width: 100%;
          height: 100%;

          .left-item-img {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }

          .left-item-text {
            position: absolute;
            top: 0;
            left: 40px;
            font-size: 16px;
            color: #fff;
          }

          &.router-link-exact-active {
            .left-item-text {
              color: #0984e3 !important;
            }
          }
        }

        .left-item-img {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }

          .left-item-text {
            position: absolute;
            top: 0;
            left: 40px;
            font-size: 16px;
            color: #fff;
          }

      }
    }
  }
}
</style>
