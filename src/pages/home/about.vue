<template>
  <div class="about-page">
    <Header></Header>
    
    <div class="banner">
      <img src="../../assets/banner-04.png" alt="" v-if="this.$i18n.locale === 'zh'">
      <img src="../../assets/abt_en.png" alt="" v-if="this.$i18n.locale === 'en'">
    </div>
    
    <div class="about">
      <div class="w">
        <div class="about-title">{{ $t("about.about1") }}</div>
        <div class="about-text">{{ $t("about.about2") }}</div>
        <p class="about-text">{{ $t("about.about3") }}</p>
        <p class="about-text">{{ $t("about.about4") }}</p>
        <p class="about-text">{{ $t("about.about5") }}</p>

        <div class="img-group">
          <div class="img-item">
            <img src="../../assets/qk-01.jpg" alt="">
          </div>
          <div class="img-item">
            <img src="../../assets/qk-02.jpg" alt="">
          </div>
          <div class="img-item">
            <img src="../../assets/qk-03.jpg" alt="">
          </div>
        </div>

        <div class="team">{{ $t("about.about6") }}
          <span>{{ $t("about.about7") }}</span>
        </div>

        <div class="team">{{ $t("about.about8") }}
          <span>{{ $t("about.about9") }}</span>
        </div>

        <div class="location">
          <div class="location-l">
            {{ $t("about.about10") }}
            <img src="../../assets/about.jpg" alt="">
          </div>
          <div class="location-r">
            {{ $t("about.about11") }}
            <img src="../../assets/location.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../../components/header";
import Footer from "../../components/footer";
import AboutUs from "../../components/about/aboutUs";
import NumberGrow from "../../components/common/numberChange"
export default {
  data () {
    return {
      menuListL:['关于我们'],
      activeIndex:0
    }
  },
  methods: {
    togole(index){
      this.activeIndex = index;
    }
  },
  components: {
    Header,
    Footer,
    AboutUs,
    NumberGrow
  }
}
</script>
<style lang="less">
.about-page {
  margin-top: 70px;
  width: 100%;

  .banner {
    width: 100%;

    > img {
      width: 100%;
      vertical-align: middle;
    }
  }

  
    .about {
      padding: 20px 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
    .w {
      // min-height: calc(100vh - 280px);

      .about-title {
        position: relative;
        padding-left: 20px;
        font-size: 34px;

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 4px;
          height: 34px;
          background-color: #0984e3;
        }
        &::after {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 175px;
          transform: translateY(-50%);
          width: 994px;
          height: 1px;
          background-color: #bfbfbf;
        }
      }

      .about-text {
        padding-top: 10px;
        font-size: 18px;
        line-height: 1.7;
      }

      .team {
        margin-top: 20px;
        font-size: 18px;
        font-weight: bold;

        > span {
          font-weight: normal;
        }

        > img {
          // margin: 0 auto;
          width: 300px;
        }
      }

      .location {
        margin-top: 20px;
        width: 100%;
        height: 100%;
        font-size: 18px;
        display: flex;
        justify-content: space-between;

        .location-l {
          width: 35%;

          > img {
            margin: 0 auto;
            width: 300px;
          }
        }

        .location-r {
          position: relative;
          width: 65%;

          > img {
            margin-top: 15px;
            width: 100%;
          }
        }
      }

      .img-group {
        margin-top: 20px;
        width: 100%;
        height: 233px;
        display: flex;
        justify-content: space-between;

        .img-item {
          flex: 1;
          height: 100%;
          margin-right: 20px;

          > img {
            width: 100%;
            height: 100%;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
