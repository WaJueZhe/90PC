<template>
  <div class="transDetail-page">
    <Header></Header>
    <div class="w">
      <div class="transDetail">
        <h1 class="h1">{{ $t("transDetail.transDetail1") }}</h1>
        <div class="txdiv">
          <div class="txdiv-top">
            <div class="top-l">
              <span>{{hash}}</span>
            </div>
            <div class="top-r">{{transInfo.created}}</div>
          </div>
          <div class="message">
            <!-- <div class="txtd-l">No Inputs (Newly Generated Coins)</div> -->
            <div class="txtd-l">
              <div class="txtd-item">
                <span v-if="transInfo.transType==1" style="color:#10ade4">{{ $t("transDetail.transDetail2") }}</span>
                <router-link v-if="transInfo.transType!=1" :to="{path:'/accountDetail', query:{act:transInfo.srcAccount}}">{{transInfo.srcAccount}}</router-link>
              </div>
              <!-- <div class="txtd-item" v-for="(item,index) in transInfo.src_asset_id" :key="index">
                <span>{{item}}</span>
              </div> -->
            </div>
            <div class="img"><img src="../../assets/jiantou.png" alt=""></div>
            <div class="txtd-r">
              <div class="txtd-item">
                <span v-if="transInfo.transType==3" style="color:#10ade4">{{ $t("transDetail.transDetail3") }}</span>
                <router-link v-if="transInfo.transType!=3" :to="{path:'/accountDetail', query:{act:transInfo.dstAccount}}">{{transInfo.dstAccount}}</router-link>
                <span class="pull-right">{{transInfo.amount}}{{[assetType,$i18n.locale]|assetName}}</span>
              </div>
              <div class="txtd-item">
                <!-- <span>{{transInfo.dst_asset_id}}</span> -->
              </div>
            </div>
          </div>
          <!-- <div class="btn">
            <button class="btn-primary">2 确认</button>
            <button class="btn-success">12.53061652 BTC</button>
          </div> -->
        </div>

        <div class="info">
          <div class="info-left">
            <div class="left-item">
              <div class="item-l" style="font-weight: bold;">{{ $t("transDetail.transDetail4") }}</div>
            </div>
            <div class="left-item">
              <div class="item-l">{{ $t("transDetail.transDetail5") }}</div>
              <div class="item-r">{{[transInfo.transType,$i18n.locale]|transName}}</div>
            </div>
            <div class="left-item">
              <div class="item-l">{{ $t("transDetail.transDetail6") }}</div>
              <div class="item-r">{{transInfo.transactionId}}</div>
            </div>
            <!-- <div class="left-item">
              <div class="item-l">{{ $t("transDetail.transDetail7") }}</div>
              <div class="item-r">{{'4'|stateName}}</div>
            </div> -->
            <div class="left-item">
              <div class="item-l">{{ $t("transDetail.transDetail8") }}</div>
              <div class="item-r">{{transInfo.bsHash}}</div>
            </div>
          </div>
        </div>
        <div v-if="!isDataOwner" class="describe">
          <div class="business-msg">
            <i class="iconfont icon-gantanhao"></i>
            <span>{{ $t("transDetail.transDetail9") }}</span>
            <span class="apply" @click="dateApply()">{{ $t("transDetail.transDetail10") }}</span>
          </div>
        </div>
        <div v-if="isDataOwner" class="describe">{{ $t("transDetail.transDetail11") }}</div>
        <pre v-if="isDataOwner" class="text">{{bs_data}}</pre>
      </div>
    </div>
    <Footer></Footer>
    <Refresh v-if="loading"></Refresh>
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
      hash: "",
      loading: false,
      assetType: "",
      transInfo: {},
      userAccount:null,
      isDataOwner:false,
      bs_hash: null,
      bs_data:null,

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
    stateName(val) {
      switch (val) {
        case "1":
          return "申请中";
          break;
        case "2":
          return "已申请";
          break;
        case "3":
          return "提交中";
          break;
        case "4":
          return "已提交";
          break;
        default:
          break;
      }
    },
    assetName([key,lang]){
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
    transName([val,lang]){
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
  },
  methods: {
    init() {
      this.loading = true;
      let p = {
        hash: this.hash,
        userAccount:this.userAccount
      };
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/assetIssueTransQueryByHash`, p)
        .then(res => {
          this.loading = false;
          if (res.data.success) {
            console.log(res)
            this.transInfo = res.data.data.detail;
            this.assetType = res.data.data.assetType;
            this.bs_hash = this.transInfo.transInfo;
            if(res.data.data.isDataOwner){
              this.isDataOwner = res.data.data.isDataOwner
              this.bs_data = res.data.data.bs_data
            }
          }
        });
    },
    abolish(){
      this.hooltip.isShow = false
    },
    confirm(){
      this.hooltip.isShow = false
    },

    dateApply(){
      //校验是否已经登陆
      let token = sessionStorage.getItem('accessToken')
      if(token==null||token==''){

        if(this.$i18n.locale=='en'){
          this.hooltip={
            isShow:true,
            cancel:'',
            ensure:'OK',
            tipTitle:'WARN',
            tipContent:'You need to log in first'          
          }
          return
        }

        this.hooltip={
          isShow:true,
          cancel:'',
          ensure:'确定',
          tipTitle:'提示',
          tipContent:'需登录之后才能提交申请'          
        }

        return
      }


      this.loading = true;
      let p = {
        t_hash: this.hash,
        type:'1'
      };
      this.axios
        .post(`${this.api.baseURL}/bsCheckApply/newCheckApply`, p)
        .then(res => {
          this.loading = false;
          if (res.data.success) {
            if(this.$i18n.locale=='en'){
              this.hooltip={
                isShow:true,
                cancel:'',
                ensure:'OK',
                tipTitle:'SUCCESS',
                tipContent:'Submit success'          
              }
              return
            }            
            this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'提示',
              tipContent:'提交成功，在个人中心查看申请反馈情况'          
            }
          }else{
            if(this.$i18n.locale=='en'){
              this.hooltip={
                isShow:true,
                cancel:'',
                ensure:'OK',
                tipTitle:'ERROR',
                tipContent:res.data.message         
              }
              return
            }             
            this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'提示',
              tipContent:res.data.message          
            }            
          }
          
        });

    }
  },
  created() {
    this.hash = this.$route.query.hash;
    this.userAccount = sessionStorage.getItem('account')
    this.init();
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
.transDetail-page {
  margin-top: 70px;
  width: 100%;

  .w {
    min-height: calc(100vh - 280px);

    .transDetail {
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

        > small {
          font-size: 65%;
          color: #777777;
        }
      }

      .info {
        margin-top: 25px;
        width: 60%;
        margin-bottom: 50px;

        .info-left {
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
              content: " ";
            }

            .item-l {
              float: left;
              width: 20%;
            }

            .item-r {
              float: left;
              width: 80%;

              > a {
                cursor: pointer;
                color: #10ade4;
              }
            }
          }
        }
      }

      .describe {
        width: 100%;
        height: 100%;
        
        .apply{
          color: #10ade4;
          cursor: pointer;
        }
        

        .business {
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 20px;

          &::after {
            display: block;
            clear: both;
            content: " ";
          }

          .business-l {
            float: left;
          }
          .business-r {
            float: left;
            padding-left: 50px;
            color: #da9415;
          }
        }

        .business-msg {
          margin-top: 10px;
          width: 100%;
          font-size: 14px;

          > a {
            color: #10ade4;
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
    }
  }
}
</style>
