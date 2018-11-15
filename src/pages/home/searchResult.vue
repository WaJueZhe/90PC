<template>
  <div class="searchResult">
    <Header></Header>
    <div class="w">
      <div class="searchBox">
        <div class="search-top">{{ $t("searchResult.searchResult1") }}</div>
        <div class="info">
          <i>{{ $t("searchResult.searchResult2") }}</i>
        </div>
        <div class="search">
          <div class="input">
            <i class="iconfont icon-search"></i>
            <input v-model="searchStr" type="text" :placeholder="$t('searchResult.searchResult3') + '/' + $t('searchResult.searchResult4')">
          </div>
          <div class="search-btn" @click="search">{{ $t("searchResult.searchResult1") }}</div>
        </div>
      </div>

      <div v-if="transList.length>0" class="new-deal">
        <div class="deal-title">{{ $t("searchResult.searchResult5") }}</div>
        <div class="deal-group">
          <ul class="deal-tit-list">
            <li class="deal-item">{{ $t("searchResult.searchResult6") }}</li>
            <li class="deal-item">{{ $t("searchResult.searchResult7") }}</li>
            <li class="deal-item">{{ $t("searchResult.searchResult8") }}</li>
            <li class="deal-item">{{ $t("searchResult.searchResult9") }}</li>
            <li class="deal-item">{{ $t("searchResult.searchResult10") }}</li>
            <li class="deal-item">{{ $t("searchResult.searchResult11") }}</li>
          </ul>

          <ul class="deal-list" v-for="(item,index) in transList" :key="index">
            <li class="deal-item">
              <router-link :to="{path:'/transDetail', query:{hash:item.transHash}}">
                {{item.transHash|splitHash}}
                <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </router-link>
            </li>
            <li class="deal-item">{{item.transType|transTypeToName}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="deal-item">
              <span v-if="!item.srcAccount" to="">{{ $t("searchResult.searchResult12") }}</span>
              <router-link v-if="item.srcAccount" :to="{path:'/accountDetail', query:{act:item.srcAccount}}">
                <span>{{item.srcAccount}}</span>
                <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </router-link>
            </li>
            <li class="deal-item">
              <span v-if="!item.dstAccount" to="">{{ $t("searchResult.searchResult13") }}</span>
              <router-link v-if="item.dstAccount" :to="{path:'/accountDetail', query:{act:item.dstAccount}}">
                <span>{{item.dstAccount}}</span>
                <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </router-link>
            </li>
            <li class="deal-item">{{item.amount}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="deal-item">{{item.created}}</li>
          </ul>
        </div>
      </div>

      <div v-if="sbookList.length>0" class="share-deal">
        <div class="share-title">{{ $t("searchResult.searchResult14") }}</div>
        <div class="share-group">
          <ul class="share-tit-list">
            <li class="share-item">{{ $t("searchResult.searchResult15") }}</li>
            <li class="share-item">{{ $t("searchResult.searchResult16") }}</li>
            <li class="share-item">{{ $t("searchResult.searchResult17") }}</li>
            <li class="share-item">{{ $t("searchResult.searchResult18") }}</li>
            <li class="share-item">{{ $t("searchResult.searchResult19") }}</li>
          </ul>

          <ul class="share-list" v-for="(item,index) in sbookList" :key="index">
            <li class="share-item">
              <router-link :to="{path:'/recordDetail', query:{hash:item.tHash}}">
                {{item.tHash}}
                <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </router-link>
            </li>
            <li class="share-item">{{item.bsType|sbookTypeToName}}
              <span class="share-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li v-if="$i18n.locale=='en'" class="share-item">
              <span v-if="item.bsType==1">User{{item.account|splitHash}}updated</span>
              <span v-if="item.bsType==2">User{{item.account|splitHash}}and{{item.toAccount|splitHash}}have a deal</span>
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li v-if="$i18n.locale=='zh'" class="share-item">
              <span v-if="item.bsType==1">用户{{item.account|splitHash}}资料更新</span>
              <span v-if="item.bsType==2">用户{{item.account|splitHash}}与{{item.toAccount|splitHash}}发生交易</span>
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>            
            <li class="share-item">
              <router-link :to="{path:'/blockDetail', query:{bHeight:item.bHeight}}">
                <span>{{item.bHeight}}</span>
                <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </router-link>
            </li>
            <li class="share-item">{{item.created}}</li>
          </ul>
        </div>
      </div>

      <div v-if="sbookList.length==0&&transList.length==0" style="margin-top:20px">
        <p style="font-size: 14px;line-height: 20px;">{{ $t("searchResult.searchResult20") }}"<span style="color:red">{{resultStr}}</span>"{{ $t("searchResult.searchResult21") }}</p>
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
import Header from "../../components/header";
import Footer from "../../components/footer";
import Refresh from "../../components/refresh";
import Hooltip from '../../components/hint/tooltip.vue';
export default {
  data() {
    return {
      loading: false,
      searchStr: "",
      resultStr: "",
      sbookList: [],
      transList: [],

      hooltip:{
        isShow:false,
        cancel:'',
        ensure:'确定',
        tipTitle:'提示',
        tipContent:'申请提交成功'
      }      
    };
  },
  filters: {
    sbookTypeToName(val){
      switch (val) {
        case "1":
          return "会员更新"
          break;
        case "2":
          return "会员交易"
          break;                   
        default:
          return null
          break;
      }
    },  
    accountName([key,lang]){
      switch (key) {
        case '1':
          if(lang=='en'){
            return 'LG'
          }
          return '零购券'
          break;
        case '2':
          if(lang=='en'){
            return 'JL'
          }        
          return '久零券'
          break;  
        case '3':
          if(lang=='en'){
            return 'GW'
          }        
          return '购物券'
          break;          
          
        default:
          if(lang=='en'){
            return 'Unkonw'
          }        
          return '未知券种'
          break;
      }
    },
    splitHash(val) {
      let temp = String(val);
      temp = temp.substring(0, 20) + "...";
      return temp;
    },
    transTypeToName(val) {
      switch (val) {
        case "1":
          return "发行";
          break;
        case "2":
          return "转让";
          break;
        case "3":
          return "兑付";
          break;
        default:
          return null;
          break;
      }
    },
    getDateDiff(dateTimeStamp) {
      dateTimeStamp = String(dateTimeStamp);
      dateTimeStamp = Date.parse(dateTimeStamp.replace(/-/gi, "/"));
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if (diffValue < 0) {
        return;
      }
      var monthC = diffValue / month;
      var weekC = diffValue / (7 * day);
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      let result = "";
      if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
      } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
      } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
      } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
      } else result = "刚刚";
      return result;
    },


  },
  methods: {

    keyWordShow(val) {
      if (!val) {
        return "";
      }
      if (this.resultStr && this.resultStr != "") {
        // 匹配关键字正则
        let replaceReg = new RegExp(this.resultStr, "g");

        // 高亮替换v-html值
        let replaceString =
          '<span class="search-text">' + this.resultStr + "</span>";

        val = val.replace(replaceReg, replaceString);
      }
      return val;
    },
    abolish(){
      this.hooltip.isShow = false
    },
    confirm(){
      this.hooltip.isShow = false
    },    
    search() {
      
      if(this.searchStr==null||this.searchStr==''){
        this.hooltip={
          isShow:true,
          cancel:'',
          ensure:'确定',
          tipTitle:'提示',
          tipContent:'搜索内容不能为空'
        }
      }

      let p = {
        searchStr: this.searchStr
      };
      this.loading = true;
      this.axios
        .post(`${this.api.baseURL}/home/searchByKeyWord`, p)
        .then(res => {
          console.log(res)
          this.loading = false;
          this.resultStr = this.searchStr;
          if (res.data.success) {
            if (res.data.data.sbookList !=null && res.data.data.sbookList.length>0) {
              this.sbookList = res.data.data.sbookList;
            } else {
              this.sbookList = [];
            }
            if (res.data.data.transList !=null && res.data.data.transList.length>0) {
              this.transList = res.data.data.transList;
            } else {
              this.transList = [];
            }
          }
        });
    }
  },
  created() {
    this.searchStr = this.$route.query.searchStr;
    // this.resultStr = this.searchStr
    this.search();
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
.searchResult {
  margin-top: 70px;
  width: 100%;

  .search-text {
    color: red;
    font-weight: bold;
  }

  .w {
    min-height: calc(100vh - 280px);

    .searchBox {
      padding: 25px 60px;
      background-color: #f5f7f9;

      margin-bottom: 20px;
      border-radius: 20px;

      .search-top {
        margin-bottom: 10px;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 24px;
      }

      .search {
        margin-top: 20px;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;

        .input {
          position: relative;
          width: 75%;
          height: 40px;
          border: 1px solid #ccc;
          background-color: #fff;

          > i {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            font-size: 24px;
            font-weight: bold;
            color: #999;
          }

          > input {
            position: absolute;
            top: 0;
            left: 35px;
            padding-left: 5px;
            width: 95%;
            height: 100%;
            overflow: hidden;
            outline: none;
            border: none;
          }
        }

        .search-btn {
          margin-left: 10px;
          width: 20%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #fff;
          border-radius: 5px;
          background-color: #356d68;
          cursor: pointer;
        }
      }
    }

    .h2 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 30px;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;
      color: #5f5f5f;
    }

    .txdiv {
      padding-top: 10px;
      width: 100%;
      box-shadow: 0 6px 20px 0 rgba(34, 59, 88, 0.1);
      border-radius: 10px;
      background-color: #fff;

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

          .transHash {
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
          width: 45%;
          font-weight: bold;

          > a {
            cursor: pointer;
            color: #10ade4;
          }

          .l-name {
            margin-bottom: 10px;
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
          width: 52%;
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
            margin-bottom: 10px;
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

    .new-deal {
      width: 100%;

      .deal-title {
        padding: 20px 0;
        font-size: 34px;
        color: #000;
      }

      .deal-group {
        margin-bottom: 42px;
        width: 100%;

        .deal-tit-list {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .deal-item {
            flex: 1;
            height: 53px;
            line-height: 53px;
            text-align: center;
            font-size: 18px;
            background-color: #000;
            color: #fff;
          }
        }

        .deal-list {
          width: 100%;
          display: flex;
          justify-content: space-between;
          background-color: #f3f3f3;
          color: #000;

          &:nth-child(2n-1) {
            background-color: #fff;
          }

          .deal-item {
            position: relative;
            padding: 0 15px;
            flex: 1;
            height: 53px;
            line-height: 53px;
            text-align: center;
            font-size: 14px;
            text-overflow: ellipsis;
            overflow: hidden;

            > a {
              color: #10ade4;
              cursor: pointer;
            }

            .deal-item-img {
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);

              > img {
                width: 100%;
              }
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

    .share-deal {
      width: 100%;

      .share-title {
        padding: 20px 0;
        font-size: 34px;
        color: #000;
      }

      .share-group {
        margin-bottom: 42px;
        width: 100%;

        .share-tit-list {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .share-item {
            // flex: 1;
            height: 53px;
            line-height: 53px;
            text-align: center;
            font-size: 18px;
            background-color: #000;
            color: #fff;

            &:nth-child(1) {
              width: 20%;
            }
            &:nth-child(2) {
              width: 10%;
            }
            &:nth-child(3) {
              width: 45%;
            }
            &:nth-child(4) {
              width: 10%;
            }
            &:nth-child(5) {
              width: 15%;
            }
          }
        }

        .share-list {
          width: 100%;
          display: flex;
          justify-content: space-between;
          background-color: #f3f3f3;
          color: #000;

          &:nth-child(2n-1) {
            background-color: #fff;

            .share-item-img {
              display: none;
            }
          }

          .share-item {
            position: relative;
            padding: 0 15px;
            // flex: 1;
            height: 53px;
            line-height: 53px;
            text-align: center;
            font-size: 14px;
            text-overflow: ellipsis;
            overflow: hidden;

            &:nth-child(1) {
              width: 20%;
            }
            &:nth-child(2) {
              width: 10%;
            }
            &:nth-child(3) {
              width: 45%;
            }
            &:nth-child(4) {
              width: 10%;
            }
            &:nth-child(5) {
              width: 15%;
            }

            > a {
              color: #10ade4;
              cursor: pointer;
            }

            .share-item-img {
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);

              > img {
                width: 100%;
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

      .share-mroe {
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
</style>
