<template>
  <div class="blockDetail-page">
    <Header></Header>
    <div class="w">
      <div class="blockDetail">
        <h1 class="h1">{{ $t("BlockDetail.BlockDetail1") }}</h1>
        <div class="txdiv">
          <div class="txdiv-top">
            <div class="top-l">
              <span>{{bHash}}</span>
            </div>
            <!-- <div class="top-r">{{bHash}}</div> -->
          </div>
        </div>

        <div class="info">
          <div class="info-left">
            <div v-if="$i18n.locale=='zh'" class="left-item">
              <div class="item-l" style="font-weight: bold;">{{ $t("BlockDetail.BlockDetail2") }}</div>
            </div>
            <div class="left-item">
              <div class="item-l">{{ $t("BlockDetail.BlockDetail3") }}</div>
              <div class="item-r">{{bHeight}}</div>
            </div>
            <div class="left-item">
              <div class="item-l">{{ $t("BlockDetail.BlockDetail4") }}</div>
              <div class="item-r">{{bTime}}</div>
            </div>
            <div class="left-item">
              <div class="item-l">{{ $t("BlockDetail.BlockDetail5") }}</div>
              <div class="item-r">{{bPrevHash}}</div>
            </div>
            <div class="left-item">
              <div class="item-l">{{ $t("BlockDetail.BlockDetail6") }}</div>
              <div class="item-r">{{dtlCount}}</div>
            </div>
          </div>
        </div>

        <h1 class="h1">{{ $t("BlockDetail.BlockDetail7") }}</h1>
        <!-- 共享账本最新记录 -->
        <div class="new-record">
            <div class="record-group">
              <ul class="record-tit-list">
                <li class="record-item">{{ $t("BlockDetail.BlockDetail8") }}</li>
                <li class="record-item">{{ $t("BlockDetail.BlockDetail9") }}</li>
                <li class="record-item">{{ $t("BlockDetail.BlockDetail10") }}</li>
                <li class="record-item">{{ $t("BlockDetail.BlockDetail11") }}</li>
              </ul>

              <ul class="record-list" v-for="(item,index) in blockList" :key="index">
                <li class="record-item">
                  <router-link style="color:#10ade4;" :to="{path:'/recordDetail', query:{hash:item.tHash}}">
                    {{item.tHash|splitHash}}
                    <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
                  </router-link>
                </li>
                <li class="record-item">{{[item.bsType,$i18n.locale]|sbookTypeToName}}
                  <span class="record-item-img"><img src="../../assets/node-line.png" alt=""></span>
                </li>
                <li v-if="$i18n.locale=='zh'" class="record-item">
                    <span v-if="item.bsType==1">用户{{item.account|splitHash}}资料更新</span>
                    <span v-if="item.bsType==2">用户{{item.account|splitHash}}与{{item.toAccount|splitHash}}发生交易</span>
                    <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
                </li>
                <li v-if="$i18n.locale=='en'" class="record-item">
                    <span v-if="item.bsType==1">User <span style="color:blue">{{item.account|splitHash}}</span> upload info</span>
                    <span v-if="item.bsType==2">User <span style="color:blue">{{item.account|splitHash}}</span> and <span style="color:blue">{{item.toAccount|splitHash}}</span>have a deal</span>
                    <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
                </li>                
                <li class="record-item">{{item.created}}</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <Refresh v-show="loading"></Refresh>
  </div>
</template>
<script>
import Header from "../../components/header";
import Footer from "../../components/footer";
import Refresh from "../../components/refresh";
export default {
  data() {
    return {
      loading: false,
      blockList: [],
      bHash:null,
      bHeight:null,
      bTime:null,
      bPrevHash:null,
      dtlCount:null
    };
  },
  filters: {

    splitHash(val){
      let temp = String(val);
      temp = temp.substring(0,20)+"...";
      return temp;
    },
    transTypeToName([val,lang]){
      switch (val) {
        case "1":
          if(lang=='en'){
            return 'ISSUE'
          }
          return "发行"
          break;
        case "2":
          if(lang=='en'){
            return 'TRANSFER'
          }        
          return "转让"
          break;      
        case "3":
          if(lang=='en'){
            return 'CASH'
          }         
          return "兑付"
          break;              
        default:        
          return null
          break;
      }
    },
    sbookTypeToName([val,lang]){
      switch (val) {
        case "1":
          if(lang=='en'){
            return 'USER INFO'
          }             
          return "会员更新"
          break;
        case "2":
          if(lang=='en'){
            return 'BUSINESS'
          }          
          return "会员交易"
          break;                   
        default:
          return null
          break;
      }
    },
    getDateDiff(dateTimeStamp){
      dateTimeStamp = String(dateTimeStamp);
      dateTimeStamp = Date.parse(dateTimeStamp.replace(/-/gi,"/"));
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if(diffValue < 0){return;}
      var monthC =diffValue/month;
      var weekC =diffValue/(7*day);
      var dayC =diffValue/day;
      var hourC =diffValue/hour;
      var minC =diffValue/minute;
      let result = "";
      if(monthC>=1){
        result="" + parseInt(monthC) + "月前";
      }
      else if(weekC>=1){
        result="" + parseInt(weekC) + "周前";
      }
      else if(dayC>=1){
        result=""+ parseInt(dayC) +"天前";
      }
      else if(hourC>=1){
        result=""+ parseInt(hourC) +"小时前";
      }
      else if(minC>=1){
        result=""+ parseInt(minC) +"分钟前";
      }else
      result="刚刚";
      return result;
    }   
  },
  methods: {
    init() {
      this.loading = true;
      let p = {
        bHeight: this.bHeight
      };
      this.axios
        .post(`${this.api.baseURL}/bcSbookLog/findByBlock`, p)
        .then(res => {
          console.log(res)
          this.loading = false;
          if (res.data.success) {
            this.blockList = res.data.data.list
            this.bHash = this.blockList[0].bHash
            this.bHeight = this.blockList[0].bHeight
            this.bTime = this.blockList[0].bTime
            this.bPrevHash = this.blockList[0].bPrevHash
            this.dtlCount = this.blockList.length;
          }
        });
    }
  },
  created() {
    this.bHeight = this.$route.query.bHeight;
    this.init();
  },
  components: {
    Header,
    Footer,
    Refresh
  }
};
</script>
<style lang="less">
.blockDetail-page {
  margin-top: 70px;
  width: 100%;

  .w {
    min-height: calc(100vh - 280px);

    .blockDetail {
      padding: 20px;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 10px;

      .txdiv {
        padding-top: 10px;
        width: 100%;

        .txdiv-top {
          padding: 0 10px;
          width: 100%;
          height: 36px;
          line-height: 36px;
          background-color: #f9f9f9;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;

          .top-l {
            float: left;
            width: 70%;
            font-weight: bold;
            font-size: 17px;

            > a {
              cursor: pointer;
              color: #10ade4;
            }
          }

          .top-r {
            float: left;
            width: 30%;
            text-align: right;
          }
        }

        .message {
          padding: 10px;
          width: 100%;

          &::after {
            display: block;
            clear: both;
            content: " ";
          }

          .txtd-l {
            padding-right: 10px;
            float: left;
            width: 40%;

            .txtd-item {
              width: 100%;

              > a {
                cursor: pointer;
                color: #10ade4;
              }

              .pull-right {
                float: right;
              }
            }
          }

          .img {
            float: left;
            width: 20px;

            > img {
              width: 100%;
              vertical-align: middle;
            }
          }

          .txtd-r {
            float: right;
            width: 56%;
            line-height: 1.4;

            .txtd-item {
              width: 100%;

              > a {
                cursor: pointer;
                color: #10ade4;
              }

              .pull-right {
                float: right;
                font-weight: bold;
              }
            }
          }
        }

        .btn {
          padding-bottom: 30px;
          width: 100%;
          text-align: right;
          clear: both;

          > button {
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            border: 1px solid transparent;
            white-space: nowrap;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857;
            border-radius: 4px;
          }

          .btn-success {
            color: #fff;
            background-color: #5cb85c;
            border-color: #4cae4c;
          }

          .btn-primary {
            color: #fff;
            background-color: #337ab7;
            border-color: #2e6da4;
          }
        }
      }

      .h1 {
        margin-bottom: 10px;
        padding-bottom: 10px;
        font-size: 36px;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: #000;
      }

      .info {
        margin: 20px 0;
        width: 56%;

        .info-left {
          border-top: 1px solid #ddd;

          .left-item {
            padding-left: 10px;
            width: 100%;
            height: 36px;
            line-height: 36px;
            border-bottom: 1px solid #ddd;
            background-color: #fff;

            &:nth-child(2n-1) {
              background-color: #f9f9f9;
            }

            &::after {
              display: block;
              clear: both;
              content: " ";
            }

            .item-l {
              float: left;
              width: 15%;
            }

            .item-r {
              float: left;
              width: 85%;

              > a {
                cursor: pointer;
                color: #10ade4;
              }
            }
          }
        }

        .info-right {
          flex: 1;
          border-top: 1px solid #ddd;

          .right-item {
            padding-left: 10px;
            width: 100%;
            height: 36px;
            line-height: 36px;
            border-bottom: 1px solid #ddd;

            &:nth-child(2n-1) {
              background-color: #f9f9f9;
            }

            &::after {
              display: block;
              clear: both;
              content: " ";
            }

            .item-l {
              float: left;
              width: 20%;
            }

            .item-r {
              float: left;
              width: 80%;
              font-size: 12px;

              > a {
                cursor: pointer;
                color: #10ade4;
              }
            }
          }
        }
      }

      .text {
        display: block;
        padding: 20px;
        width: 100%;
        min-height: 300px;
        border: 1px solid #ccc;
        word-break: break-all;
        word-wrap: break-word;
      }

      .new-record {
        width: 100%;

          .record-title {
            position: relative;
            font-size: 34px;
            text-align: center;
            color: #0984e3;

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

            .watchAll {
              position: absolute;
              bottom: -20px;
              right: 0;
              font-size: 24px;
              cursor: pointer;

              > a {
                color: #000;

                &:hover {
                  color: #0984e3;
                }
              }
            }
          }

          .record-group {
            margin-bottom: 42px;
            width: 100%;

            .record-tit-list {
              width: 100%;
              display: flex;
              justify-content: space-between;

              .record-item {
                // flex: 1;
                height: 53px;
                line-height: 53px;
                text-align: center;
                font-size: 18px;
                background-color: #000;
                color: #fff;

                &:nth-child(1) {
                  width: 25%;
                }
                &:nth-child(2) {
                  width: 10%;
                }
                &:nth-child(3) {
                  width: 50%;
                }
                &:nth-child(4) {
                  width: 15%;
                }
              }
            }

            .record-list {
              width: 100%;
              display: flex;
              justify-content: space-between;
              background-color: #f3f3f3;
              color: #000;

              &:nth-child(2n-1) {
                background-color: #fff;

                .deal-item-img {
                  display: none;
                }
              }

              // &:hover {
              //   background-color: #0984e3;
              //   color: #fff;

              //   .record-item {
              //     &:nth-child(1) {
              //       .record-item-img {
              //         display: none;
              //       }
              //     }
              //   }
              // }

              .record-item {
                position: relative;
                padding: 0 15px;
                // flex: 1;
                height: 53px;
                line-height: 53px;
                text-align: center;
                font-size: 14px;
                overflow: hidden;

                > a {
                  width: 100%;
                  color: #000;

                  &:hover {
                    color: #fff;
                  }
                }

                .record-item-img {
                  position: absolute;
                  top: 50%;
                  right: 0;
                  transform: translateY(-50%);

                  > img {
                    width: 100%;
                  }
                }

                &:nth-child(1) {
                  width: 25%;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  cursor: pointer;
                }
                &:nth-child(2) {
                  width: 10%;
                }
                &:nth-child(3) {
                  width: 50%;
                }
                &:nth-child(4) {
                  width: 15%;
                }

                &:hover {
                  &:nth-child(1) {
                    .copy {
                      display: block;
                    }
                  }
                }

                .copy {
                  position: absolute;
                  top: 50%;
                  right: 0;
                  transform: translateY(-50%);
                  width: 40px;
                  height: 34px;
                  line-height: 34px;
                  text-align: center;
                  border: 1px solid #ccc;
                  border-radius: 6px;
                  z-index: 9999;
                  background-color: #fff;
                  color: #000;
                  display: none;
                }
              }
            }
          }

          .deal-mroe {
            margin: auto;
            width: 100px;
            font-size: 18px;
            text-align: center;
            cursor: pointer;

            > img {
              margin: auto;
            }
          }
      }
    }
  }
}
</style>
