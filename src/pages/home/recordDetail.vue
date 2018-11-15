<template>
  <div class="recordDetail-page">
    <Header></Header>
    <div class="w">
      <div class="recordDetail">
        <h1 class="h1">{{ $t("recordDetail.recordDetail1") }}</h1>
        <div class="txdiv">
          <div class="txdiv-top">
            <div class="top-l">
              <span>{{sbookInfo.tHash}}</span>
            </div>
            <div class="top-r">{{sbookInfo.created}}</div>
          </div>
        </div>
        <div class="info">
          <div class="info-left">
            <div v-if="$i18n.locale=='zh'" class="left-item">
              <div class="item-l" style="font-weight: bold;">{{ $t("recordDetail.recordDetail2") }}</div>
            </div>
            <div class="left-item">
              <div class="item-l">{{ $t("recordDetail.recordDetail3") }}</div>
              <div class="item-r">{{[sbookInfo.bsType,$i18n.locale]|sbookTypeToName}}</div>
            </div>
            <div v-if="sbookInfo.bsType==1" class="left-item">
              <div class="item-l">{{ $t("recordDetail.recordDetail4") }}</div>
              <div class="item-r">{{sbookInfo.account}}</div>
            </div>
            <div v-if="sbookInfo.bsType==2" class="left-item">
              <div class="item-l">{{ $t("recordDetail.recordDetail15") }}</div>
              <div class="item-r">{{sbookInfo.account}}</div>
            </div>
            <div v-if="sbookInfo.bsType==2" class="left-item">
              <div class="item-l">{{ $t("recordDetail.recordDetail16") }}</div>
              <div class="item-r">{{sbookInfo.toAccount}}</div>
            </div>                        
            <!-- <div v-if="sbookInfo.bsType==1" class="left-item">
              <div class="item-l">{{ $t("recordDetail.recordDetail5") }}</div>
              <div class="item-r">用户{{sbookInfo.account}}资料更新</div>
            </div> -->
            <div class="left-item">
              <div class="item-l">{{ $t("recordDetail.recordDetail6") }}</div>
              <div class="item-r">{{sbookInfo.commitTime}}</div>
            </div>
            <div class="left-item">
              <div class="item-l">{{ $t("recordDetail.recordDetail7") }}</div>
              <div class="item-r">{{sbookInfo.bsHash}}</div>
            </div>
          </div>
        </div>
        <div v-if="!isDataOwner" class="describe">
          <div class="business-msg">
            <i class="iconfont icon-gantanhao"></i>
            <span>{{ $t("recordDetail.recordDetail8") }}</span>
            <span class="apply" @click="dateApply()">{{ $t("recordDetail.recordDetail9") }}</span>
          </div>
        </div>

        <div v-if="isDataOwner">{{ $t("recordDetail.recordDetail10") }}</div>
        <pre v-if="isDataOwner" class="text">{{bs_data}}</pre>

        <h1 class="h1">{{ $t("recordDetail.recordDetail11") }}</h1>
        <div class="place">
          <table>
            <tr>
              <td class="place-name">{{ $t("recordDetail.recordDetail12") }}</td>
              <td class="place-msg">
                <router-link style="color:#10ade4;" :to="{path:'/blockDetail', query:{bHeight:sbookInfo.bHeight}}">{{sbookInfo.bHeight}}</router-link>
              </td>
            </tr>
          <tr>
              <td class="place-name">{{ $t("recordDetail.recordDetail13") }}</td>
              <td class="place-msg">{{sbookInfo.bTime}}</td>
            </tr>
          </table>
          <table>
            <tr>
              <td class="place-name">{{ $t("recordDetail.recordDetail14") }}</td>
              <td class="place-msg">{{sbookInfo.bHash}}</td>
            </tr>
            <!-- <tr>
              <td class="place-name">交易笔数</td>
              <td class="place-msg">{{sbookInfo.bsHash}}</td>
            </tr> -->
          </table>
        </div>
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
      hash: "",

      loading: false,
      sbookInfo:{},
      isDataOwner:false,
      bs_data:null,

      hooltip:{
        isShow:false,
        cancel:'',
        ensure:'确定',
        tipTitle:'提示',
        tipContent:'成功'
      }
    };
  },
  filters: {
    splitHash(val) {
      let temp = String(val);
      temp = temp.substring(0, 40) + "...";
      return temp;
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
    }
  },
  methods: {
    init() {
      this.loading = true;
      let p = {
        tHash: this.hash,
        userAccount:sessionStorage.getItem('account')
      };
      this.axios
        .post(`${this.api.baseURL}/bcSbookLog/findByHash`, p)
        .then(res => {
          console.log(res)
          this.loading = false;
          if (res.data.success) {
            this.sbookInfo = res.data.data.result
            this.bs_data = res.data.data.bs_data
            this.isDataOwner = res.data.data.isDataOwner
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
        type:'2'
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
.recordDetail-page {
  margin-top: 70px;
  width: 100%;

  .w {
    min-height: calc(100vh - 280px);

    .recordDetail {
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
        margin-bottom: 20px;
        width: 100%;
        min-height: 300px;
        border: 1px solid #ccc;
        word-break: break-all;
        word-wrap: break-word;
      }

      .describe {
        margin-bottom: 20px;
        width: 100%;
        height: 100%;

        .apply{
          color: #10ade4;
          cursor: pointer;
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

      .place {
        display: table;
        width: 100%;

        table {
          margin-bottom: 10px;
          width: 100%;
          word-break: break-all;

          > tr {
            float: left;
            margin-right: 30px;
            width: 40%;

            .place-name {
              width: 10%;
            }
            .place-msg {
              width: 20%;
            }
          }
        }
      }
    }
  }
}
</style>
