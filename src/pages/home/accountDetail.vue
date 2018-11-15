<template>
  <div class="blockDetail">
    <Header></Header>
    <div v-if="accountInfo" class="w">
      
      <div class="detailinfo">

      <h1 class="h1">{{ $t("accountDetail.accountDetail1") }}</h1>
      <div class="info">
        <div class="info-left">
          <div class="left-item">
            <div style="font-weight:bold;" class="item-l">{{ $t("accountDetail.accountDetail2") }}</div>
          </div>
          <div class="left-item">
            <div class="item-l">{{ $t("accountDetail.accountDetail3") }}</div>
            <div class="item-r">{{account}}</div>
          </div>
          <div class="left-item">
            <div class="item-l">{{ $t("accountDetail.accountDetail4") }}</div>
            <div class="item-r">{{accountInfo.publicKey}}</div>
          </div>      
          <div class="left-item">
            <div class="item-l">{{ $t("accountDetail.accountDetail5") }}</div>
            <div class="item-r">{{[accountInfo.accountType,$i18n.locale]|accountName}}</div>
          </div>             
          <div class="left-item">
            <div class="item-l">{{ $t("accountDetail.accountDetail6") }}</div>
            <div class="item-r">{{accountInfo.created}}</div>
          </div>
          <div class="left-item">
            <div class="item-l">{{ $t("accountDetail.accountDetail7") }}</div>
            <div class="item-r">{{accountInfo.userPublicKey}}</div>
          </div> 
          <div class="left-item">
            <div class="item-l">{{ $t("accountDetail.accountDetail8") }}</div>
            <div class="item-r">{{accountInfo.userAddress}}</div>
          </div>          
        </div>
        <div class="info-right">
          <div class="right-item">
            <div style="font-weight:bold;" class="item-l">{{ $t("accountDetail.accountDetail9") }}</div>
          </div>
          <div class="right-item">
            <div class="item-l">{{ $t("accountDetail.accountDetail10") }}</div>
            <div class="item-r">
              <span>{{total}}</span>
            </div>
          </div>
          <div class="right-item">
            <div class="item-l">{{ $t("accountDetail.accountDetail11") }}</div>
            <div class="item-r">
              <span>{{totalAmount}} {{[accountInfo.accountType,$i18n.locale]|accountName}}</span>
            </div>
          </div>

          <div class="right-item">
            <div style="font-weight:bold;" class="item-l"></div>
          </div>

          <div class="right-item">
            <div style="font-weight:bold;" class="item-l">{{ $t("accountDetail.accountDetail12") }}</div>
          </div>
          <div class="right-item" v-for="(item,index) in asset_list" :key="index">
            <div class="item-l">{{ $t("accountDetail.accountDetail13") }}({{index+1}}):</div>
            <div class="item-r">
              <span>{{item.asset_id}}</span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="h2">{{ $t("accountDetail.accountDetail14") }}</h2>
      <div v-for="(item,index) in list" :key="index">

        <div class="txdiv" v-if="item.srcAccount==account">
          <div class="txdiv-top">
            <div class="top-l">
              <router-link :to="{path:'transDetail/', query:{hash:item.transHash}}">{{item.transHash}}</router-link>
            </div>
            <div class="top-r">{{item.created}}</div>
          </div>
          <div class="message">
            <!-- <div class="txtd-l">No Inputs (Newly Generated Coins)</div> -->
            <div class="txtd-l">
              <span v-if="!item.srcAccount" to="">{{ $t("accountDetail.accountDetail15") }}</span>
              <span v-if="item.srcAccount" to="">{{item.srcAccount}}</span>
            </div>
            <div class="img"><img src="../../assets/jiantou_red.png" alt=""></div>
            <div class="txtd-r">
              <div class="txtd-item">
                <router-link v-if="item.dstAccount" :to="{path:'/accountDetail', query:{act:item.dstAccount}}">{{item.dstAccount}}</router-link>
                <span v-if="!item.dstAccount" to="">{{ $t("accountDetail.accountDetail16") }}</span>
                <div class="btnred">
                  <button>-{{item.amount}} {{[item.assetType,$i18n.locale]|accountName}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="txdiv" v-if="item.dstAccount==account">
          <div class="txdiv-top">
            <div class="top-l">
              <router-link :to="{path:'/transDetail', query:{hash:item.transHash}}">{{item.transHash}}</router-link>
            </div>
            <div class="top-r">{{item.created}}</div>
          </div>
          <div class="message">
            <!-- <div class="txtd-l">No Inputs (Newly Generated Coins)</div> -->
            <div class="txtd-l">
              <span v-if="!item.srcAccount" to="">{{ $t("accountDetail.accountDetail15") }}</span>
              <router-link v-if="item.srcAccount" :to="{path:'/accountDetail', query:{act:item.srcAccount}}">{{item.srcAccount}}</router-link>
            </div>
            <div class="img"><img src="../../assets/jiantou.png" alt=""></div>
            <div class="txtd-r">
              <div class="txtd-item">
                <span v-if="item.dstAccount" >{{item.dstAccount}}</span>
                <span v-if="!item.dstAccount" to="">{{ $t("accountDetail.accountDetail16") }}</span>
                <div class="btn">
                  <button>{{item.amount}} {{[item.assetType,$i18n.locale]|accountName}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div v-if="pages>pageNo" @click="loadmore" class="more">{{ $t("accountDetail.accountDetail17") }}</div>
      <div v-if="pages<=pageNo" class="more">{{ $t("accountDetail.accountDetail18") }}</div>
    
      </div>
    </div>
    <div v-if="!accountInfo">{{ $t("accountDetail.accountDetail19") }}</div>
    <Footer></Footer>
    <Refresh v-show="loading"></Refresh>
  </div>
</template>
<script>
import Header from '../../components/header';
import Footer from '../../components/footer';
import Refresh from '../../components/refresh';
export default {
  data () {
    return {
      loading:false,
      account:"",
      pageSize:5,
      pageNo:1,
      total:0,
      pages:0,
      accountInfo:{},
      list:[],
      asset_list:[],
      totalAmount:0.00
    }
  },
  watch: {
    '$route' (to, from) {
        // 刷新参数放到这里里面去触发就可以刷新相同界面了
        this.account=to.query.act;
        this.init()
      }
  },
  filters: {
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
    }
  },
  methods: {
    loadmore(){
      if(this.pageNo<this.pages){
        this.pageNo = this.pageNo+1;
        this.nextPage();
      }
    },
    nextPage(){
      let p = {
        "account":this.account,
        "pageSize":this.pageSize,
        "pageNo":this.pageNo
      }
      this.loading=true;
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/accountDetail`, p)
        .then(res => {
          this.loading=false;
          if (res.data.success) {
            this.total = res.data.data.list.total;
            this.pages = res.data.data.list.pages;
            this.accountInfo = res.data.data.accountInfo;
            this.list = this.list.concat(res.data.data.list.records);
            this.asset_list = res.data.data.asset_list;
            this.totalAmount = res.data.data.total_amount
          }
        });
    },
    init(){
      let p = {
        "account":this.account,
        "pageSize":this.pageSize,
        "pageNo":this.pageNo
      }
      this.loading=true;
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/accountDetail`, p)
        .then(res => {
          this.loading=false;
          if (res.data.success) {
            this.total = res.data.data.list.total;
            this.pages = res.data.data.list.pages;
            this.accountInfo = res.data.data.accountInfo;
            this.list = res.data.data.list.records;
            this.asset_list = res.data.data.asset_list;
            this.totalAmount = res.data.data.total_amount
          }
        });
    }
  },
  created () {
    this.account=this.$route.query.act;  
    this.init();
  },
  components: {
    Header,
    Footer,
    Refresh
  }
}
</script>
<style lang="less">
.blockDetail {
  margin-top: 70px;
  width: 100%;

  .w {
    min-height: calc(100vh - 280px);

    .detailinfo{
      padding: 20px;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 10px;

    .h1 {
      margin-top: 20px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      font-size: 36px;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;
      color: #5f5f5f;
    }

    .info {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .info-left {
        margin-right: 40px;
        flex: 1;
        border-top: 1px solid #ddd;

        .left-item {
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
            content: ' ';
          }

          .item-l {
            float: left;
            width: 25%;
          }

          .item-r {
            float: left;
            width: 75%;

            > a {
              cursor: pointer;
              color: #10ADE4;
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
            content: ' ';
          }

          .item-l {
            float: left;
            width: 22%;
          }

          .item-r {
            float: left;
            width: 78%;
            font-size: 14px;

            > a {
              cursor: pointer;
              color: #10ADE4;
            }
          }
        }
      }
    }

    .h2 {
      margin-top: 20px;
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
            color: #10ADE4;
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
          content: ' ';
        }

        .txtd-l {
          padding-right: 10px;
          float: left;
          width: 40%;
          font-weight: bold;

          > a {
            cursor: pointer;
            color: #10ADE4;
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
          border-color:#d9534f;
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
              color: #10ADE4;
            }

            .pull-right {
              float: right;
            }
          }
        }
      }
    }

    .more {
      margin-top: 20px;
      text-align: center;
      font-size: 20px;
      cursor: pointer;
    }

    .more:hover{
      font-weight: bold;
    }

    }
  }
}
</style>
