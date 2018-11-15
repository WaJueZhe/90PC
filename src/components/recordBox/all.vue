<template>
  <div class="all">
    <div v-for="(item,index) in list" :key="index" style="margin:10px;">
      
        <div class="txdiv" v-show="item.srcAccount==account">
          <div class="txdiv-top">
            <div class="top-l">
              <router-link :to="{path:'transDetail/', query:{hash:item.transHash}}">{{item.transHash}}</router-link>
            </div>
            <div class="top-r">{{item.created}}</div>
          </div>
          <div class="message">
            <div class="txtd-l">
              <span v-if="!item.srcAccount" to="">{{ $t("tradingRecord.tradingRecord9") }}</span>
              <span v-if="item.srcAccount" to="">{{item.srcAccount}}</span>
            </div>
            <div class="img"><img src="../../assets/jiantou_red.png" alt=""></div>
            <div class="txtd-r">
              <div class="txtd-item">
                <router-link v-if="item.dstAccount" :to="{path:'/accountDetail', query:{act:item.dstAccount}}">{{item.dstAccount}}</router-link>
                <span v-if="!item.dstAccount" to="">{{ $t("tradingRecord.tradingRecord10") }}</span>
                <div class="btnred">
                  <button>-{{item.amount}} {{item.assetType|accountName}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="txdiv" v-show="item.dstAccount==account">
          <div class="txdiv-top">
            <div class="top-l">
              <router-link :to="{path:'/transDetail', query:{hash:item.transHash}}">{{item.transHash}}</router-link>
            </div>
            <div class="top-r">{{item.created}}</div>
          </div>
          <div class="message">
            <div class="txtd-l">
              <span v-if="!item.srcAccount" to="">{{ $t("tradingRecord.tradingRecord9") }}</span>
              <router-link v-if="item.srcAccount" :to="{path:'/accountDetail', query:{act:item.srcAccount}}">{{item.srcAccount}}</router-link>
            </div>
            <div class="img"><img src="../../assets/jiantou.png" alt=""></div>
            <div class="txtd-r">
              <div class="txtd-item">
                <span v-if="item.dstAccount" >{{item.dstAccount}}</span>
                <span v-if="!item.dstAccount" to="">{{ $t("tradingRecord.tradingRecord10") }}</span>
                <div class="btn">
                  <button>{{item.amount}} {{[item.assetType,$i18n.locale]|accountName}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  </div>
</template>
<script>
export default {
  props:["list","account"],
  data() {
    return {};
  },
  filters: {
    accountName([val,lang]){
      switch (val) {
        case "1":
          if(lang=='en'){
            return 'LG'
          }
          return "零购券"
          break;
        case "2":
          if(lang=='en'){
            return 'JL'
          }        
          return "久零券"
          break;      
        case "3":
          if(lang=='en'){
            return 'JL'
          }        
          return "购物券"
          break;           
        default:
          if(lang=='en'){
            return 'Unkonw'
          }              
          return "未知"
          break;
      }
    }
  }
};
</script>
<style lang="less">
.all {
  width: 100%;

  .txdiv {
    width: 100%;
    box-shadow: 0 6px 20px 0 rgba(34,59,88,.1);
    border-radius: 10px;

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
        font-weight: bold;

        > a {
          cursor: pointer;
          color: #10ade4;
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

        .btnred {
          // padding-bottom: 30px;
          width: 100%;
          text-align: right;
          // clear: both;

          > button {
            display: inline-block;
            margin-bottom: 0;
            font-weight: normal;
            text-align: center;
            vertical-align: middle;
            touch-action: manipulation;
            // cursor: pointer;
            background-image: none;
            border: 1px solid transparent;
            white-space: nowrap;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857;
            border-radius: 4px;
            user-select: none;
            color: #fff;
            background-color: #d9534f;
            border-color: #d9534f;
          }
        }

        .txtd-item {
          width: 100%;
          font-weight: bold;
          .btn {
            // padding-bottom: 30px;
            width: 100%;
            text-align: right;
            // clear: both;

            > button {
              display: inline-block;
              margin-bottom: 0;
              font-weight: normal;
              text-align: center;
              vertical-align: middle;
              touch-action: manipulation;
              // cursor: pointer;
              background-image: none;
              border: 1px solid transparent;
              white-space: nowrap;
              padding: 6px 12px;
              font-size: 14px;
              line-height: 1.42857;
              border-radius: 4px;
              user-select: none;
              color: #fff;
              background-color: #5cb85c;
              border-color: #4cae4c;
            }
          }

          > a {
            cursor: pointer;
            color: #10ade4;
          }

          .pull-right {
            float: right;
          }
        }
      }
    }
  }

}
</style>
