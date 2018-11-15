<template>
  <div class="header">
    <div class="igation">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/logo-01.png" alt="">
        </router-link>
      </div>
      <div class="header-menu">
        <div class="header-item">
          <router-link to="/">{{ $t("header.home") }}</router-link>
        </div>
        <div class="header-item">
          <router-link to="/blockIndex">{{ $t("header.publicity") }}</router-link>
        </div>
        <div class="header-item">
          <span :class="{ active: aa == true}">{{ $t("header.scene") }}</span>
          <div class="share-list">
          <div class="share-item">
            <router-link to="/sharing">{{ $t("header.economics") }}</router-link>
          </div>
          <div class="share-item">
            <router-link to="/integral">{{ $t("header.integral") }}</router-link>
          </div>
          <div class="share-item">
            <router-link to="/product">{{ $t("header.product") }}</router-link>
          </div>
          <div class="share-item">
            <router-link to="/financial">{{ $t("header.financial") }}</router-link>
          </div>
        </div>
        </div>
        <div class="header-item">
          <router-link to="/about">{{ $t("header.aboutUs") }}</router-link>
        </div>
      </div>
      <div class="flex-space"></div>
      <div class="header-r">
        <div class="search">
          <input v-if="$i18n.locale=='zh'" v-model="searchStr" type="text" :placeholder="$t('header.placeholder1') + '/' + $t('header.placeholder2') + '/' + $t('header.placeholder3')">
           <input v-if="$i18n.locale=='en'" v-model="searchStr" type="text" :placeholder="$t('header.placeholder1') + ',' + $t('header.placeholder2') + ',' + $t('header.placeholder3')">
          <span @click="search"><i class="iconfont icon-search"></i></span>
        </div>
        <div class="VIP-login">
          <router-link v-if="!isLogin" to="/login">{{ $t("header.login") }}</router-link>
          <router-link v-if="isLogin" to="/personal">{{ $t("header.loginCenter") }}</router-link>
        </div>
        <div class="language">
          <p class="China" v-if="$i18n.locale=='en'" @click="change">中文</p>
          <p class="English" v-if="$i18n.locale=='zh'" @click="change">English</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLogin: false,
      searchStr: null,
      aa: false
    };
  },
  methods: {
    toPersonCenter() {
      this.$router.push({ path: "/personal" });
    },
    search() {
      if (this.searchStr == null || this.searchStr == "") {
        return;
      }
      this.$router.push({
        path: "/searchResult",
        query: { searchStr: this.searchStr }
      });
    },
    //切换中英文
    change(){
      let lang = this.$i18n.locale === 'zh' ? 'en' : 'zh';
      this.$set(this.$i18n, 'locale', lang)
      localStorage.setItem("LANG",lang);
    },
  },
  created() {
    let token = sessionStorage.getItem("accessToken");
    if (token != null && token != "") {
      this.isLogin = true;
    };
    if(this.$route.path == '/sharing' || this.$route.path == '/integral' || this.$route.path == '/product' || this.$route.path == '/financial') {
      this.aa = true
    }
  },
};
</script>

<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #252533;
  z-index: 2222;

  .igation {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    font-weight: 400;
    height: 70px;
    justify-content: flex-start;
    margin: 0;
    padding: 0 40px;

    .logo {
      position: relative;
      margin-right: 30px;
      width: 160px;
      height: 100%;

      > a {
        display: block;
        width: 100%;
        height: 100%;

        > img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
        }
      }
    }

    .header-menu {
      width: 580px;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .header-item {
        flex: 1;
        line-height: 66px;
        text-align: center;
        font-size: 16px;

        > a {
          display: block;
          color: #fff;

          &.router-link-exact-active {
            color: #fff !important;
            border-bottom: 4px solid #fff;
          }
        }

        > span {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #fff;
          cursor: pointer;
        }

        .active {
          border-bottom: 4px solid #fff;
        }

        &:nth-child(3) {
          position: relative;

          .share-list {
            position: absolute;
            bottom: -120px;
            left: 0;
            width: 100%;
            background-color: #1e1e35;
            display: none;

            .share-item {
              padding: 8px 0;
              width: 100%;
              text-align: center;
              font-size: 14px;

              > a {
                display: block;
                line-height: 1;
                color: #fff;
              }
            }
          }

          &:hover {
            .share-list {
              display: block;
            }
          }
        }
      }
    }

    .flex-space {
      flex-grow: 1;
    }

    .header-r {
      position: relative;
      width: 430px;
      height: 100%;

      .search {
        position: absolute;
        top: 48%;
        left: 0;
        transform: translateY(-48%);
        width: 240px;
        height: 28px;
        border: 1px solid #0984e3;
        border-radius: 20px;
        overflow: hidden;

        > input {
          position: absolute;
          top: 0;
          left: 0;
          padding: 0 10px;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background-color: transparent;
          color: #fff;
        }

        input::-webkit-input-placeholder{
            color: #bbb;
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color: #bbb;
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color: #bbb;
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color: #bbb;
        }

        > span {
          position: absolute;
          top: -1px;
          right: -1px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #0984e3;
          vertical-align: middle;
          cursor: pointer;

          > i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
          }
        }
      }

      .VIP-login {
        position: absolute;
        top: 48%;
        left: 260px;
        transform: translateY(-48%);
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #fff;
        border-radius: 5px;
        overflow: hidden;
        z-index: 2;

        > a {
          display: block;
          color: #fff;
        }
      }

      .language {
        position: absolute;
        top: 50%;
        left: 340px;
        transform: translateY(-50%);
        width: 80px;
        text-align: center;
        font-size: 14px;
        color: #fff;

        .China {
          width: 100%;
          cursor: pointer;
        }

        .English {
          // padding-top: 10px;
          width: 100%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
