<template>
  <div class="web-home">
    <Header :class="{ head:headActive}"></Header>
    <!-- 广告图 -->
    <div class="top-banner">
      <!-- <div class="browse" @click="goto('/blockIndex')">
        <span class="text">区块链浏览器</span>
        <span class="img"><img src="../../assets/fx.png" alt=""></span>
      </div> -->

      <div class="top-tit">{{ $t("banner.banner1") }}</div>



      <!-- 年月日 -->
      <div class="schedule">
        <div class="data">
          <!-- <div  class="year">{{year}}</div> -->
          <div  class="day">
            <span>{{day||'0'}}</span>
            <p>{{ $t("banner.banner7") }}</p>
          </div>
          <div  class="hour">
            <span>{{hour||'00'}}</span>
            <p>{{ $t("banner.banner8") }}</p>
          </div>
          <div  class="yuan"><img src="../../assets/yuan.png" alt=""></div>
          <div  class="minute">
            <span>{{minute||'00'}}</span>
            <p>{{ $t("banner.banner9") }}</p>
          </div>
          <div  class="yuan"><img src="../../assets/yuan.png" alt=""></div>
          <div  class="miao">
            <span>{{miao||'00'}}</span>
            <p>{{ $t("banner.banner10") }}</p>
          </div>
        </div>
        <!-- <div class="yuan"><img src="../../assets/yuan.png" alt=""></div>
        <div class="yuan2"><img src="../../assets/yuan.png" alt=""></div> -->
      </div>

      <!-- <div class="start-time">创世区块诞生时间（{{showBeginTime}}）</div> -->
      <div class="start-time">{{ $t("banner.banner2") }}</div>

      <!-- 统计数据 -->
      <div class="top-msg">
        <div class="msg-list">
          <div class="msg-item">
            <p class="tit">{{ $t("banner.banner3") }}</p>
            <p class="number1"></p>
          </div>
          <div class="msg-item">
            <p class="tit">{{ $t("banner.banner4") }}</p>
            <p class="number2">{{ nodeCount }}</p>
          </div>
          <div class="msg-item">
            <p class="tit">{{ $t("banner.banner5") }}</p>
            <p class="number3"></p>
          </div>
          <div class="msg-item">
            <p class="tit">{{ $t("banner.banner6") }}</p>
            <p class="number4"></p>
          </div>
        </div>
      </div>
    </div>
    <!-- 90 Chain功能 -->
    <div class="Chain">
      <div class="w">
        <div class="Chain-title">{{ $t("Chain.Chain1") }}</div>
        <div class="Chain-group">
          <div class="Chain-item">
            <div class="img"><img src="../../assets/Sharing-books.png" alt=""></div>
            <div class="Chain-name">{{ $t("Chain.Chain2") }}</div>
            <div class="Chain-text">{{ $t("Chain.Chain3") }}</div>
          </div>
          <div class="Chain-item">
            <div class="img"><img src="../../assets/Digital-Asset.png" alt=""></div>
            <div class="Chain-name">{{ $t("Chain.Chain4") }}</div>
            <div class="Chain-text">{{ $t("Chain.Chain5") }}</div>
          </div>
          <div class="Chain-item">
            <div class="img"><img src="../../assets/contract.png" alt=""></div>
            <div class="Chain-name">{{ $t("Chain.Chain6") }}</div>
            <div class="Chain-text">{{ $t("Chain.Chain7") }}</div>
          </div>
          <div class="Chain-item">
            <div class="img"><img src="../../assets/Verification-certificate.png" alt=""></div>
            <div class="Chain-name">{{ $t("Chain.Chain8") }}</div>
            <div class="Chain-text">{{ $t("Chain.Chain9") }}</div>
          </div>
          <div class="Chain-item">
            <div class="img"><img src="../../assets/sharing-economy.png" alt=""></div>
            <div class="Chain-name">{{ $t("Chain.Chain10") }}</div>
            <div class="Chain-text">{{ $t("Chain.Chain11") }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 90 Chain应用场景 -->
    <div class="adhibition">
      <div class="w">
        <div class="adhibition-title">{{ $t("adhibition.adhibition1") }}</div>
        <div class="adhibition-group">
          <div class="adhibition-item">
            <div class="img"><img src="../../assets/product-05.png" alt=""></div>
            <div class="adhibition-name">{{ $t("adhibition.adhibition2") }}</div>
            <div class="adhibition-text">{{ $t("adhibition.adhibition3") }}</div>
            <div @click="goto('/sharing')" class="detail">{{ $t("adhibition.adhibition10") }}</div>
          </div>
          <div class="adhibition-item">
            <div class="img"><img src="../../assets/product-02.png" alt=""></div>
            <div class="adhibition-name">{{ $t("adhibition.adhibition4") }}</div>
            <div class="adhibition-text">{{ $t("adhibition.adhibition5") }}</div>
            <div @click="goto('/integral')" class="detail">{{ $t("adhibition.adhibition10") }}</div>
          </div>
          <div class="adhibition-item">
            <div class="img"><img src="../../assets/product-03.png" alt=""></div>
            <div class="adhibition-name">{{ $t("adhibition.adhibition6") }}</div>
            <div class="adhibition-text">{{ $t("adhibition.adhibition7") }}</div>
            <div @click="goto('/product')" class="detail">{{ $t("adhibition.adhibition10") }}</div>
          </div>
          <div class="adhibition-item">
            <div class="img"><img src="../../assets/product-04.png" alt=""></div>
            <div class="adhibition-name">{{ $t("adhibition.adhibition8") }}</div>
            <div class="adhibition-text">{{ $t("adhibition.adhibition9") }}</div>
            <div @click="goto('/financial')" class="detail">{{ $t("adhibition.adhibition10") }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 90 Chain技术特点 -->
    <div class="technical-feature">
      <div class="w">
        <div class="technology-title">{{ $t("advantage.advantage1") }}</div>
        <div class="technology-group">
          <div class="technology-item">
            <div class="zzc">
              <div class="mark">
                <div class="mark-img"><img src="../../assets/technology-05.png" alt=""></div>
                <div class="mark-name">{{ $t("advantage.advantage2") }}</div>
                <div class="zzc-text">{{ $t("advantage.advantage3") }}</div>
              </div>
              
            </div>
          </div>
          <div class="technology-item">
            <div class="zzc">
              <div class="mark">
                <div class="mark-img"><img src="../../assets/technology-06.png" alt=""></div>
                <div class="mark-name">{{ $t("advantage.advantage4") }}</div>
                <div class="zzc-text">{{ $t("advantage.advantage5") }}</div>
              </div>
              
            </div>
          </div>
          <div class="technology-item">
            <div class="zzc">
              <div class="mark">
                <div class="mark-img"><img src="../../assets/technology-07.png" alt=""></div>
                <div class="mark-name">{{ $t("advantage.advantage6") }}</div>
                <div class="zzc-text">{{ $t("advantage.advantage7") }}</div>
              </div>
              
            </div>
          </div>
          <div class="technology-item">
            <div class="zzc">
              <div class="mark">
                <div class="mark-img"><img src="../../assets/technology-08.png" alt=""></div>
                <div class="mark-name">{{ $t("advantage.advantage8") }}</div>
                <div class="zzc-text">{{ $t("advantage.advantage9") }}</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 90 Chain节点会员 -->
    <div class="VIP">
      <div class="w">
        <div class="VIP-title">{{ $t("VIP.VIP1") }}</div>
        <div class="VIP-box">
          <div class="VIP-group" v-show="VIPGroup1">
            <div class="VIP-item">
              <a href="http://www.999000.cn">
                <img src="../../assets/node-logo-01.png" alt="">
              </a>
            </div>
            <div class="VIP-item">
              <a href="http://www.cnpc.com.cn/">
                <img src="../../assets/node-logo-02.png" alt="">
              </a>
            </div>
            <div class="VIP-item">
              <a href="https://www.gome.com.cn/">
                <img src="../../assets/node-logo-03.png" alt="">
              </a>
            </div>
            <div class="VIP-item">
              <a href="http://www.uzero.com.cn/">
                <img src="../../assets/node-logo-04.png" alt="">
              </a>
            </div>
            <div class="VIP-item">
              <a href="http://www.mfsj1908.com/">
                <img src="../../assets/node-logo-05.png" alt="">
              </a>
            </div>
            <div class="VIP-item">
              <a href="">
                <img src="../../assets/node-logo-06.png" alt="">
              </a>
            </div>
            <div class="VIP-item">
              <a href="http://www.tayoi.com/">
                <img src="../../assets/node-logo-07.png" alt="">
              </a>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-08.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-09.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-10.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-11.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-12.png" alt="">
              </router-link>
            </div>
          </div>

          <div class="VIP-group" v-show="VIPGroup2">
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-13.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-14.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-15.jpg" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-16.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-17.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-18.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-19.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-20.png" alt="">
              </router-link>
            </div>
            <div class="VIP-item">
              <router-link to="">
                <img src="../../assets/node-logo-21.png" alt="">
              </router-link>
            </div>
          </div>

          <div class="VIP-left" @click="Vleft">
            <img src="../../assets/left.png" alt="">
          </div>
          <div class="VIP-right" @click="Rright">
            <img src="../../assets/right.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 90 Chain区块链超级链接 -->
    <div class="interlinkage">
      <div class="interlinkage-title">{{ $t("interlinkage.interlinkage1") }}</div>
      <div class="interlinkage-group">
        <div class="w">
          <div class="interlinkage-list">
            <div class="interlinkage-item"><a href="https://www.btcchina.com/" target="_blank"><img src="../../assets/Bitcoin.png" alt=""></a></div>
            <div class="interlinkage-item"><a href="https://www.huobi.pro/" target="_blank"><img src="../../assets/Huobi.png" alt=""></a></div>
            <div class="interlinkage-item"><a href="https://trustsql.qq.com/" target="_blank"><img src="../../assets/Tencent.png" alt=""></a></div>
            <div class="interlinkage-item"><a href="https://www.binance.top/" target="_blank"><img src="../../assets/Binance.png" alt=""></a></div>
            <div class="interlinkage-item"><a href="https://www.ethereum.org/" target="_blank"><img src="../../assets/ether.png" alt=""></a></div>
            <div class="interlinkage-item"><a href="https://eos.io/" target="_blank"><img src="../../assets/EOS.png" alt=""></a></div>
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
import moment from "moment";
export default {
  data() {
    return {
      VIPGroup1:true,
      VIPGroup2:false,
      year: null,
      day: null,
      hour: null,
      minute: null,
      miao: null,
      beginTime: "2018-07-25 13:53:39",
      showBeginTime: null,
      timerId: null,
      bHeight: 0,
      nodeCount: 21,
      sumUserCount: 0,
      sumAssetCount: 0,
      timerCountId: null,

      scroll: "",
      headActive: false,

      NumberRunFirst:false,
      NumberRunSecond:false,
      NumberRunThree:false,
      NumberRunFour:false,
    };
  },
  watch: {
    bHeight(){
      this.AccountNumber1();
    },
    sumUserCount(){
      this.AccountNumber3();
    },
    sumAssetCount(){
      this.AccountNumber4();
    },
  },
  methods: {
    goto(val){
      this.$router.push({path: val})
    },
    Vleft(){
      if(this.VIPGroup1 == true) {
        return
      }else {
        this.VIPGroup1 = true
        this.VIPGroup2 = false
      }
    },
    Rright(){
      if(this.VIPGroup2 == true) {
        return
      }
      this.VIPGroup1 = false;
      this.VIPGroup2 = true;
    },
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll == 0) {
        this.headActive = true;
      } else {
        this.headActive = false;
      }
    },
    days(start, end) {
      let times = end - start;
      return Math.floor(times / (24 * 3600 * 1000));
    },
    hours(start, end) {
      let times = end - start;
      let leave1 = times % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      return Math.floor(leave1 / (3600 * 1000));
    },
    minutes(start, end) {
      let times = end - start;
      let leave1 = times % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      return Math.floor(leave2 / (60 * 1000));
    },
    seconds(start, end) {
      let times = end - start;
      let leave1 = times % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      return Math.round(leave3 / 1000);
    },
    time2time() {
      let nowTime = new Date().getTime();
      let sTime = Date.parse(this.beginTime.replace(/-/gi, "/"));
      this.day = this.days(sTime, nowTime);
      this.hour = this.hours(sTime, nowTime);
      this.minute = this.minutes(sTime, nowTime);
      this.miao = this.seconds(sTime, nowTime);
    },
    countInit() {
      this.axios.post(`${this.api.baseURL}/home/sumCount`).then(res => {
        if (res.data.success) {
          if(res.data.data.lastBlock.bHeight){
            this.bHeight = res.data.data.lastBlock.bHeight;
          }
          this.nodeCount = res.data.data.nodeCount;
          this.sumUserCount = res.data.data.sumUserCount;
          this.sumAssetCount = res.data.data.sumAssetCount;

          if(!this.NumberRunFirst){
            this.NumberRunFirst = !this.NumberRunFirst
            this.AccountHeight1();
          }
          if(!this.NumberRunThree){
            this.NumberRunThree = !this.NumberRunThree
            this.AccountHeight3();
          }
          if(!this.NumberRunFour){
            this.NumberRunFour = !this.NumberRunFour
            this.AccountHeight4();
          }

        } else {
          if (this.timerCountId) {
            window.clearInterval(this.timerCountId);
          }
        }
      });
    },

    $(dom) {
      return document.querySelectorAll(dom);
    },
    AccountHeight1() {
     var tpl =
       `<div class="mbox1">
            <div class="num-dom1" data-num="0">
                <span class="num-span">0</span>
                <span class="num-span">1</span>
                <span class="num-span">2</span>
                <span class="num-span">3</span>
                <span class="num-span">4</span>
                <span class="num-span">5</span>
                <span class="num-span">6</span>
                <span class="num-span">7</span>
                <span class="num-span">8</span>
                <span class="num-span">9</span>
                <span class="num-span">.</span>
            </div>
        </div>`;
 
      var domArr = [];

      var num = String(this.bHeight);
      var len = num.length;
      var i = len;
      while (i > 0) {
        domArr[i] = tpl;
        i--;
      }

      this.$(".number1")[0].innerHTML = domArr.join("");
      this.$(".mbox1").forEach((val, idx) => {
        this.$(".num-dom1")[len-1 - idx].style.transform = "translateY(" + -70 * num[idx] + "px)";
      });
    },
    AccountNumber1(){
      var num = String(this.bHeight);
        let len = num.length
        var num1 = num.split("").reverse().join("");
        this.$(".mbox1").forEach((val, idx) => {
          this.$(".num-dom1")[len-1 - idx].style.transform = "translateY(" + -70 * num1[idx] + "px)";
        });
    },

    AccountHeight3() {
     var tpl =
       `<div class="mbox3">
            <div class="num-dom3" data-num="0">
                <span class="num-span">0</span>
                <span class="num-span">1</span>
                <span class="num-span">2</span>
                <span class="num-span">3</span>
                <span class="num-span">4</span>
                <span class="num-span">5</span>
                <span class="num-span">6</span>
                <span class="num-span">7</span>
                <span class="num-span">8</span>
                <span class="num-span">9</span>
                <span class="num-span">.</span>
            </div>
        </div>`;
 
      var domArr = [];

      var num = String(this.sumUserCount);
      var len = num.length;
      var i = len;
      while (i > 0) {
        domArr[i] = tpl;
        i--;
      }

      this.$(".number3")[0].innerHTML = domArr.join("");
      this.$(".mbox3").forEach((val, idx) => {
        this.$(".num-dom3")[len-1 - idx].style.transform = "translateY(" + -70 * num[idx] + "px)";
      });
    },
    AccountNumber3(){
      var num = String(this.sumUserCount);
        let len = num.length
        var num1 = num.split("").reverse().join("");
        this.$(".mbox3").forEach((val, idx) => {
          this.$(".num-dom3")[len-1 - idx].style.transform = "translateY(" + -70 * num1[idx] + "px)";
        });
    },

    AccountHeight4() {
     var tpl =
       `<div class="mbox4">
            <div class="num-dom4" data-num="0">
                <span class="num-span">0</span>
                <span class="num-span">1</span>
                <span class="num-span">2</span>
                <span class="num-span">3</span>
                <span class="num-span">4</span>
                <span class="num-span">5</span>
                <span class="num-span">6</span>
                <span class="num-span">7</span>
                <span class="num-span">8</span>
                <span class="num-span">9</span>
                <span class="num-span">.</span>
            </div>
        </div>`;
 
      var domArr = [];

      var num = String(this.sumAssetCount);
      var len = num.length;
      var i = len;
      while (i > 0) {
        domArr[i] = tpl;
        i--;
      }

      this.$(".number4")[0].innerHTML = domArr.join("");
      this.$(".mbox4").forEach((val, idx) => {
        this.$(".num-dom4")[len-1 - idx].style.transform = "translateY(" + -70 * num[idx] + "px)";
      });
    },
    AccountNumber4(){
      var num = String(this.sumAssetCount);
        let len = num.length
        var num1 = num.split("").reverse().join("");
        this.$(".mbox4").forEach((val, idx) => {
          this.$(".num-dom4")[len-1 - idx].style.transform = "translateY(" + -70 * num1[idx] + "px)";
        });
    },
  },
  created() {
    this.showBeginTime = moment(this.beginTime).format(
      "YYYY年M月D日 H时mm分ss秒"
    );
    this.timerId = window.setInterval(this.time2time, 1000);
    if (this.$route.path === "/") {
      this.headActive = true;
    }
    this.timerCountId = window.setInterval(this.countInit, 10000);
    this.countInit();
  },
  mounted() {
    //给window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.menu);
  },
  destroyed() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    if (this.timerCountId) {
      window.clearInterval(this.timerCountId);
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="less">
.web-home {
  width: 100%;
  height: 100%;

  .head {
    background: transparent !important;
  }

  .top-banner {
    position: relative;
    width: 100%;
    height: 577px;
    background: url("../../assets/banner.gif") no-repeat;
    background-size: 100% 100%;

    .top-tit {
      position: absolute;
      top: 120px;
      // left: 50%;
      // transform: translateX(-50%);
      width: 100%;
      font-size: 45px;
      text-align: center;
      color: #fff;
    }

    .browse {
      position: absolute;
      top: 178px;
      left: 50%;
      transform: translateX(-50%);
      width: 204px;
      height: 36px;
      line-height: 34px;
      font-size: 20px;
      border: 1px solid #fff;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;

      .text {
        padding-left: 30px;
        
      }

      .img {
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
        width: 23px;
        height: 20px;

        > img {
          position: absolute;
          width: 100%;
        }
      }
    }

    .schedule {
      position: absolute;
      top: 280px;
      left: 50%;
      transform: translateX(-50%);
      width: 790px;
      height: 99px;

      .data {
        width: 100%;
        line-height: 99px;
        font-size: 50px;
        color: #fff;
        display: flex;
        justify-content: space-between;

        .year {
          margin-right: 36px;
          width: 129px;
          height: 107px;
          text-align: center;
          background: url("../../assets/year.png") no-repeat;
        }
        .day {
          position: relative;
          margin-right: 36px;
          width: 129px;
          height: 99px;
          text-align: center;
          background: url("../../assets/time.png") no-repeat;
          background-size: 100% 100%;

          > p {
            position: absolute;
            bottom: -14px;
            left: 0;
            width: 100%;
            line-height: 30px;
            text-align: center;
            font-size: 24px;
            color: #fff;
          }
        }
        .hour {
          position: relative;
          width: 129px;
          height: 99px;
          text-align: center;
          background: url("../../assets/time.png") no-repeat;
          background-size: 100% 100%;

          > p {
            position: absolute;
            bottom: -14px;
            left: 0;
            width: 100%;
            line-height: 30px;
            text-align: center;
            font-size: 24px;
            color: #fff;
          }
        }
        .minute {
          position: relative;
          width: 129px;
          height: 99px;
          text-align: center;
          background: url("../../assets/time.png") no-repeat;
          background-size: 100% 100%;

          > p {
            position: absolute;
            bottom: -14px;
            left: 0;
            width: 100%;
            line-height: 30px;
            text-align: center;
            font-size: 24px;
            color: #fff;
          }
        }
        .miao {
          position: relative;
          width: 129px;
          height: 99px;
          text-align: center;
          background: url("../../assets/time.png") no-repeat;
          background-size: 100% 100%;

          > p {
            position: absolute;
            bottom: -14px;
            left: 0;
            width: 100%;
            line-height: 30px;
            text-align: center;
            font-size: 24px;
            color: #fff;
          }
        }

        .yuan {
          position: relative;
          width: 10px;
          height: 107px;

          > img {
            position: absolute;
            top: 30%;
          }
        }
      }

      // .yuan {
      //   position: absolute;
      //   top: 45%;
      //   right: 307px;
      //   width: 10px;
      //   height: 33px;
      //   transform: translateY(-45%);
      // }
      // .yuan2 {
      //   position: absolute;
      //   top: 45%;
      //   right: 142px;
      //   width: 10px;
      //   height: 33px;
      //   transform: translateY(-45%);
      // }
    }

    .start-time {
      position: absolute;
      bottom: 332px;
      left: 50%;
      transform: translateX(-50%);
      width: 738px;
      font-size: 20px;
      text-align: center;
      color: #fff;

      &::before {
        content: " ";
        position: absolute;
        top: 50%;
        left: -35px;
        transform: translateY(-50%);
        width: 260px;
        height: 1px;
        background-color: #fff;
      }
      &::after {
        content: " ";
        position: absolute;
        top: 50%;
        right: -30px;
        transform: translateY(-50%);
        width: 260px;
        height: 1px;
        background-color: #fff;
      }
    }

    .top-msg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 150px;
      // background: url("../../assets/time-box.png") no-repeat;
      background-color: rgba(0, 0, 0, 0.3);

      .msg-list {
        margin: auto;
        padding: 34px 0;
        width: 1200px;
        display: flex;
        justify-content: space-between;

        .msg-item {
          text-align: center;
          flex: 1;
          color: #fff;
          border-right: 1px solid #bbb9cb;

          &:last-child {
            border-right: none;
          }

          .tit {
            padding-bottom: 10px;
            font-size: 18px;
            box-sizing: border-box;
          }

          .number1 {
            font-size: 28px;

            .mbox1 {
              font-weight: bold;
              height: 70px;
              width: 20px;
              margin: 0 auto;
              overflow: hidden;
              display: inline-block;
              color: #fff;

              .num-dom1 {
                transition: 2s;

                .num-span {
                  display: block;
                  line-height: 70px;
                  height: 70px;
                  width: 20px;
                }
              }
            }
          }

          .number2 {
            padding-top:21px; 
            font-size: 28px;
            font-weight: bold;
          }
          .number3 {
            font-size: 28px;

            .mbox3 {
              font-weight: bold;
              height: 70px;
              width: 20px;
              margin: 0 auto;
              overflow: hidden;
              display: inline-block;
              color: #fff;

              .num-dom3 {
                transition: 2s;

                .num-span {
                  display: block;
                  line-height: 70px;
                  height: 70px;
                  width: 20px;
                }
              }
            }
          }
          .number4 {
            font-size: 28px;

            .mbox4 {
              font-weight: bold;
              height: 70px;
              width: 20px;
              margin: 0 auto;
              overflow: hidden;
              display: inline-block;
              color: #fff;

              .num-dom4 {
                transition: 2s;

                .num-span {
                  display: block;
                  line-height: 70px;
                  height: 70px;
                  width: 20px;
                }
              }
            }
          }
        }
      }
    }
  }

  .Chain {
    padding: 100px 0;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;

    .w {
      padding: 0;
      min-height: 100%;

      .Chain-title {
        position: relative;
        // margin-top: 100px;
        width: 100%;
        font-size: 34px;
        text-align: center;

        &::after {
          content: " ";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background-color: #0984e3;
        }
      }

      .Chain-group {
        margin-top: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .Chain-item {
          margin-right: 36px;
          flex: 1;

          &:last-child {
            margin-right: 0;
          }

          .img {
            margin: auto;
            width: 192px;
            height: 218px;

            > img {
              width: 100%;
              height: 100%;
            }
          }

          .Chain-name {
            position: relative;
            margin-top: 20px;
            width: 100%;
            font-size: 16px;
            text-align: center;
            font-weight: bold;

            &::after {
              content: " ";
              position: absolute;
              bottom: -10px;
              left: 50%;
              transform: translateX(-50%);
              width: 24px;
              height: 1px;
              background-color: #000;
            }
          }

          .Chain-text {
            padding: 0 10px;
            margin-top: 30px;
            width: 100%;
            font-size: 14px;
          }
        }
      }
    }
  }

  .adhibition {
    width: 100%;
    background-color: #111217;
    overflow: hidden;

    .w {
      padding: 0 0;
      min-height: 100%;

      .adhibition-title {
        position: relative;
        margin-top: 40px;
        width: 100%;
        font-size: 34px;
        text-align: center;
        color: #fff;

        &::after {
          content: " ";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background-color: #fff;
        }
      }

      .adhibition-group {
        margin-top: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .adhibition-item {
          flex: 1;
          padding-bottom: 60px;
          margin-right: 36px;
          border-bottom: 6px solid #111217;

          &:hover {
            border-bottom: 6px solid #0984e3;

            .detail {
              opacity: 1;
              color: #fff;
              background-color: #0984e3;
              cursor: pointer;
            }
          }

          &:last-child {
            margin-right: 0;
          }

          .img {
            margin: auto;
            width: 116px;
            height: 135px;

            > img {
              width: 100%;
              height: 100%;
            }
          }

          .adhibition-name {
            margin-top: 20px;
            width: 100%;
            font-size: 18px;
            text-align: center;
            color: #fff;
          }

          .adhibition-text {
            padding: 0 10px;
            margin-top: 30px;
            width: 100%;
            font-size: 14px;
            color: #fff;
          }

          .detail {
            margin: auto;
            margin-top: 70px;
            width: 140px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 16px;
            color: #111217;
            opacity: 0;
            transition: all 1s;
            // background-color: #0984e3;
          }
        }
      }
    }
  }

  .technical-feature {
    padding-top: 100px;
    width: 100%;
    box-sizing: border-box;

    .w {
      padding: 0;
      min-height: 100%;

      .technology-title {
        position: relative;
        width: 100%;
        font-size: 34px;
        text-align: center;

        &::after {
          content: " ";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background-color: #0984e3;
        }
      }

      .technology-group {
        margin-top: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .technology-item {
          position: relative;
          width: 293px;
          height: 450px;
          margin-right: 10px;
          cursor: pointer;

          &:hover {
            .zzc {
              background: rgba(0, 0, 0, 0.3);
              border-bottom: 8px solid #0984e3;
              transition: all 0.5s;

              .mark {
                .zzc-text {
                  display: block;
                }
              }
            }
          }

          &:nth-child(1) {
            background: url("../../assets/technology-01.png") no-repeat;
            background-size: 100% 100%;
          }
          &:nth-child(2) {
            background: url("../../assets/technology-02.png") no-repeat;
            background-size: 100% 100%;
          }
          &:nth-child(3) {
            background: url("../../assets/technology-03.png") no-repeat;
            background-size: 100% 100%;
          }
          &:nth-child(4) {
            margin-right: 0;
            background: url("../../assets/technology-04.png") no-repeat;
            background-size: 100% 100%;
          }

          .zzc {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            .mark {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;

              .mark-img {
                margin: auto;
                width: 78px;
                height: 51px;

                > img {
                  margin: auto;
                }
              }

              .mark-name {
                position: relative;
                margin-top: 20px;
                padding-bottom: 10px;
                font-size: 18px;
                text-align: center;
                color: #fff;
                font-weight: bold;

                &::after {
                  content: " ";
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 48px;
                  height: 2px;
                  background-color: #fff;
                }
              }

              .zzc-text {
                padding: 0 32px;
                margin-top: 38px;
                font-size: 14px;
                color: #fff;
                display: none;
              }
            }
          }
        }
      }
    }
  }

  .VIP {
    padding-top: 100px;
    width: 100%;
    box-sizing: border-box;

    .w {
      padding: 0;
      min-height: 100%;

      .VIP-title {
        position: relative;
        width: 100%;
        height: 45px;
        font-size: 34px;
        text-align: center;

        &::after {
          content: " ";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background-color: #0984e3;
        }
      }

      .VIP-box {
        position: relative;
        width: 100%;
        height: 100%;

        .VIP-group {
          margin-top: 10px;
          width: 100%;

          &::after {
            display: block;
            clear: both;
            content: " ";
          }

          .VIP-item {
            float: left;
            margin-right: 43px;
            margin-top: 34px;
            width: 164px;
            height: 102px;
            background-color: #ccc;

            &:nth-child(6n) {
              margin-right: 0;
            }
          }
        }

        .VIP-left {
          position: absolute;
          top: 50%;
          left: -35px;
          transform: translateY(-50%);
          width: 24px;
          height: 48px;
          cursor: pointer;

          > img {
            width: 100%;
          }
        }

        .VIP-right {
          position: absolute;
          top: 50%;
          right: -35px;
          transform: translateY(-50%);
          width: 24px;
          height: 48px;
          cursor: pointer;

          > img {
            width: 100%;
          }
        }
      }
    }
  }

  .interlinkage {
    padding: 100px 0;
    width: 100%;
    box-sizing: border-box;

    .interlinkage-title {
      position: relative;
      width: 100%;
      font-size: 34px;
      text-align: center;

      &::after {
        content: " ";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 2px;
        background-color: #0984e3;
      }
    }

    .interlinkage-group {
      margin-top: 50px;
      width: 100%;
      height: 250px;
      background: url("../../assets/interlinkage.png") no-repeat;
      background-size: 100% 100%;

      .w {
        padding: 74px 0;
        height: 100%;
        

        .interlinkage-list {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;

          .interlinkage-item {
            position: relative;
            flex: 1;
            margin-right: 43px;
            width: 164px;

            > a{
              > img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
              }  
            }

            > img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
              width: 100%;
            }

            &:nth-child(6n) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
