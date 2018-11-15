<template>
  <div class="integral-page">
    <Header></Header>
    <div class="top-banner">
      <img src="../../assets/banner-06.png" alt="" v-if="this.$i18n.locale === 'zh'">
      <img src="../../assets/s3.png" alt="" v-if="this.$i18n.locale === 'en'">
    </div>
    <!-- 行业痛点 -->
    <div class="financial">
      <div class="w">
        <div class="financial-title">
          <span>{{ $t("financial.financial1") }}</span>
        </div>
        <div class="financial-group">
          <div class="financial-item">
            <p class="financial-item-tit">
              <span>{{ $t("financial.financial2") }}</span>
            </p>
            <p class="financial-item-text">{{ $t("financial.financial3") }}</p>
          </div>
          <div class="financial-item">
            <p class="financial-item-tit">
              <span>{{ $t("financial.financial4") }}</span>
            </p>
            <p class="financial-item-text">{{ $t("financial.financial5") }}</p>
          </div>
        </div>
        <div class="financial-group">
          <div class="financial-item">
            <p class="financial-item-tit">
              <span>{{ $t("financial.financial6") }}</span>
            </p>
            <p class="financial-item-text">{{ $t("financial.financial7") }}</p>
          </div>
          <div class="financial-item">
            <p class="financial-item-tit">
              <span>{{ $t("financial.financial8") }}</span>
            </p>
            <p class="financial-item-text">{{ $t("financial.financial9") }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 解决方案 -->
    <div class="solve">
      <div class="w">
        <div class="solve-title">
          <span>{{ $t("financial.financial10") }}</span>
        </div>
        <div class="solve-indicate">
          <!-- <div class="indicate-l"><img src="../../assets/financial-02.png" alt=""></div>
          <div class="indicate-c"><img src="../../assets/solve-04.gif" alt=""></div>
          <div class="indicate-r">
            <div class="indicate-r-img"><img src="../../assets/solve-05.gif" alt=""></div>
            <div class="indicate-r-img"><img src="../../assets/solve-05.gif" alt=""></div>
            <div class="indicate-r-img"><img src="../../assets/solve-05.gif" alt=""></div>
          </div> -->
          <div class="solve-indicate-img">
            <img src="../../assets/financial-04.png" alt="" v-if="this.$i18n.locale === 'zh'">
            <img src="../../assets/financial-05.png" alt="" v-if="this.$i18n.locale === 'en'">
          </div>
          <div class="indicate-c"><img src="../../assets/solve-04.gif" alt=""></div>
          <div class="indicate-r-img"><img src="../../assets/solve-05.gif" alt=""></div>
          <div class="indicate-r-img2"><img src="../../assets/solve-05.gif" alt=""></div>
          <div class="indicate-r-img3"><img src="../../assets/solve-05.gif" alt=""></div>
        </div>
      </div>
    </div>
    <!-- 带来价值 -->
    <div class="worth">
      <div class="w">
        <div class="worth-title">
          <span>{{ $t("financial.financial11") }}</span>
        </div>
        <ul class="worth-group">
          <li class="worth-item">
            <div class="worth-item-img"><img src="../../assets/worth-10.png" alt=""></div>
            <p>{{ $t("financial.financial12") }}</p>
          </li>
          <li class="worth-item">
            <div class="worth-item-img"><img src="../../assets/worth-11.png" alt=""></div>
            <p>{{ $t("financial.financial13") }}</p>
          </li>
          <li class="worth-item">
            <div class="worth-item-img"><img src="../../assets/worth-12.png" alt=""></div>
            <p>{{ $t("financial.financial14") }}</p>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../../components/header";
import Footer from "../../components/footer";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="less">
.integral-page {
  margin-top: 70px;
  width: 100%;
  height: 100%;

  .top-banner {
    width: 100%;

    > img {
      width: 100%;
    }
  }

  .financial {
    padding: 40px 0;
    width: 100%;
    height: 100%;
    background-color: #fff;

    .w {
      padding: 0;

      .financial-title {
        font-size: 26px;
        text-align: center;

        > span {
          position: relative;

          &::before {
            content: " ";
            position: absolute;
            top: 50%;
            left: -20px;
            width: 10px;
            height: 2px;
            background-color: #000;
          }

          &::after {
            content: " ";
            position: absolute;
            top: 50%;
            right: -20px;
            width: 10px;
            height: 2px;
            background-color: #000;
          }
        }
      }

      .financial-group {
        padding: 0 140px;
        margin-top: 26px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        &:last-child {
          margin-top: 20px;
        }

        .financial-item {
          padding: 20px 0;
          width: 430px;
          min-height: 135px;
          background: url("../../assets/integral-01.png") no-repeat;
          background-size: 100% 100%;

          .financial-item-tit {
            padding-right: 8px;
            width: 100%;
            height: 36px;
            line-height: 36px;
            text-align: center;
            font-size: 20px;
            color: #fff;

            > span {
              position: relative;

               &:before {
                content: '';
                position: absolute;
                top:-10px;
                left:-12px;
                width: 20px;
                height: 20px;
                border-top: 1px solid #fff;
                border-right: 1px solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }

              &:after {
                content: '';
                position: absolute;
                bottom:-10px;
                right:-12px;
                width: 20px;
                height: 20px;
                border-bottom: 1px solid #fff;
                border-left: 1px solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }
            }
          }

          .financial-item-text {
            margin: 0 auto;
            padding: 0 10px;
            margin-top: 10px;
            font-size: 14px;
            line-height: 1.6;
            color: #fff;
            display: table;
          }
        }
      }
    }
  }

  .solve {
    padding-top: 40px;
    width: 100%;
    height: 624px;
    background: url("../../assets/solve.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;

    .w {
      padding: 0;

      .solve-title {
        font-size: 26px;
        text-align: center;

        > span {
          position: relative;

          &::before {
            content: " ";
            position: absolute;
            top: 50%;
            left: -20px;
            width: 10px;
            height: 2px;
            background-color: #000;
          }

          &::after {
            content: " ";
            position: absolute;
            top: 50%;
            right: -20px;
            width: 10px;
            height: 2px;
            background-color: #000;
          }
        }
      }

      .solve-indicate {
        position: relative;
        margin: auto;
        margin-top: 86px;
        width: 860px;
        height: 359px;
        overflow: hidden;

        .solve-indicate-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          > img {
            width: 100%;
            height: 100%;
          }
        }

        .indicate-c {
          position: absolute;
          top: 50%;
          left: 210px;
          transform: translateY(-50%);
          width: 98px;
          height: 90px;

          > img {
            width: 100%;
          }
        }

        .indicate-r-img {
          position: absolute;
          top: 70px;
          left: 402px;
          width: 40px;
          height: 48px;

          > img {
            width: 100%;
          }
        }
        .indicate-r-img2 {
          position: absolute;
          top: 70px;
          left: 567px;
          width: 40px;
          height: 48px;

          > img {
            width: 100%;
          }
        }
        .indicate-r-img3 {
          position: absolute;
          top: 70px;
          left: 730px;
          width: 40px;
          height: 48px;

          > img {
            width: 100%;
          }
        }
      }
    }
  }

  .worth {
    padding: 40px 0;
    width: 100%;
    height: 360px;
    background-color: #fff;

    .w {
      padding: 0;

      .worth-title {
        font-size: 26px;
        text-align: center;

        > span {
          position: relative;

          &::before {
            content: " ";
            position: absolute;
            top: 50%;
            left: -20px;
            width: 10px;
            height: 2px;
            background-color: #000;
          }

          &::after {
            content: " ";
            position: absolute;
            top: 50%;
            right: -20px;
            width: 10px;
            height: 2px;
            background-color: #000;
          }
        }
      }

      .worth-group {
        margin-top: 40px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .worth-item {
          flex: 1;

          .worth-item-img {
            margin: auto;
            width: 150px;
            height: 151px;

            > img {
              width: 100%;
            }
          }

          p {
            padding-top: 10px;
            font-size: 20px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
