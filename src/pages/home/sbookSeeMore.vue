<template>
  <div class="sbookSeeMore-page">
    <Header></Header>
    <div class="new-deal">
      <div class="w">
        <div class="deal-title">{{ $t("sbookSeeMore.sbookSeeMore1") }}</div>
        <div class="deal-group">
          <ul class="deal-tit-list">
            <li class="deal-item">{{ $t("sbookSeeMore.sbookSeeMore2") }}</li>
            <li class="deal-item">{{ $t("sbookSeeMore.sbookSeeMore3") }}</li>
            <li class="deal-item">{{ $t("sbookSeeMore.sbookSeeMore4") }}</li>
            <li class="deal-item">{{ $t("sbookSeeMore.sbookSeeMore5") }}</li>
            <li class="deal-item">{{ $t("sbookSeeMore.sbookSeeMore6") }}</li>
          </ul>

          <ul class="deal-list" v-for="(item,index) in list" :key="index">
            <li class="deal-item">
              <router-link :to="{path:'/recordDetail', query:{hash:item.tHash}}">
                {{item.tHash}}
                <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </router-link>
            </li>
            <li class="deal-item">{{[item.bsType,$i18n.locale]|sbookTypeToName}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="deal-item" v-if="$i18n.locale=='zh'">
              <span v-if="item.bsType==1">用户{{item.account|splitHash}}资料更新</span>
              <span v-if="item.bsType==2">用户{{item.account|splitHash}}与{{item.toAccount|splitHash}}发生交易</span>
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="deal-item" v-if="$i18n.locale=='en'">
              <span v-if="item.bsType==1">User {{item.account|splitHash}} upload info</span>
              <span v-if="item.bsType==2">User {{item.account|splitHash}} and {{item.toAccount|splitHash}} have a deal</span>
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="deal-item">
              <router-link :to="{path:'/blockDetail', query:{bHeight:item.bHeight}}">
                <span>{{item.bHeight}}</span>
                <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </router-link>
            </li>
            <li class="deal-item">{{item.created}}</li>
          </ul>
        </div>
        <PageUtil :total="total" :current-page='pageNo' @pagechange="pagechange"></PageUtil>
      </div>
    </div>

    <Refresh v-show="loading"></Refresh>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../../components/header';
import Footer from '../../components/footer';
import PageUtil from '../../components/pageUtil';
import Refresh from "../../components/refresh";
export default {
  data () {
    return {
      list:[],
      pageNo:1,
      pageSize:10,
      pages:0,
      total:0,
      loading:false,
      // display: 10,   // 每页显示条数
      // current: 1,   // 当前的页数
    }
  },
  filters: {
    splitHash(val){
      let temp = String(val);
      temp = temp.substring(0,20)+"...";
      return temp;
    },
    transTypeToName(val){
      switch (val) {
        case "1":
          return "发行"
          break;
        case "2":
          return "转让"
          break;      
        case "3":
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
    lastPage(){
      this.pageNo=this.pageNo-1;
      this.init();
    },
    nextPage(){
      this.pageNo=this.pageNo+1;
      this.init();
    },
    init(){
      let p = {
        "pageSize":this.pageSize,
        "pageNo":this.pageNo
      };
      this.loading = true;
      this.axios
        .post(`${this.api.baseURL}/bcSbookLog/sBookQueryList`, p)
        .then(res => {
          if (res.data.success) {
            this.loading = false;
            this.list = res.data.data.list.records;
            this.pages = res.data.data.list.pages;
            this.total = res.data.data.list.total;
          }
        });
    },
    pagechange(currentPage){
      this.pageNo=currentPage;
      this.init();
    }
  },
  created () {
    this.init();
  },
  components: {
    Header,
    Footer,
    PageUtil,
    Refresh
  }
}
</script>
<style lang="less">
.sbookSeeMore-page {
  margin-top: 70px;
  width: 100%;

  .new-deal {
    padding-bottom: 96px;
    width: 100%;
    min-height: calc(100vh - 280px);

    .w {
      padding: 0;

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

        .deal-list {
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

          .deal-item {
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
              color: #10ADE4;
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
</style>