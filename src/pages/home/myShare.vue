<template>
  <div>
    <div class="myShare-page">
      <Header></Header>
      <LeftNav class="nav-l"></LeftNav>
      <div class="myShare">
        <div class="top-view">{{ $t("myShare.myShare1") }}</div>
        <p class="top-number">{{sumCount}}</p>
        <div class="search-box">
          <div class="search-input">
            <input v-model="searchStr" type="text" :placeholder="$t('myShare.myShare2')">
            <i class="iconfont icon-search"></i>
          </div>
          <div @click="search" class="search">{{ $t("myShare.myShare2") }}</div>
        </div>
        <!-- <h1 class="h1">记录明细</h1> -->
        <!-- 共享账本最新记录 -->
        <div class="new-record">
          <div class="record-group">
            <ul class="record-tit-list">
              <li class="record-item">{{ $t("myShare.myShare3") }}</li>
              <li class="record-item">{{ $t("myShare.myShare4") }}</li>
              <li class="record-item">{{ $t("myShare.myShare5") }}</li>
              <li class="record-item">{{ $t("myShare.myShare6") }}</li>
            </ul>

            <ul class="record-list" v-for="(item,index) in shareList" :key="index">
              <li class="record-item">
                <router-link style="color:#10ade4;" :to="{path:'/recordDetail', query:{hash:item.tHash}}">
                  {{item.tHash|splitHash}}
                  <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
                </router-link>
              </li>
              <li class="record-item">{{item.bsType|sbookTypeToName}}
                <span class="record-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </li>
              <li class="record-item">
                  <span v-if="item.bsType==1">用户{{item.account|splitHash}}资料更新</span>
                  <span v-if="item.bsType==2">用户{{item.account|splitHash}}与{{item.toAccount|splitHash}}发生交易</span>
                  <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </li>
              <li class="record-item">{{item.created|getDateDiff}}</li>
            </ul>
          </div>
          <div class="lodingMore">
            <div v-if="total==0" style="width:100%;text-align: center">{{ $t("myShare.myShare7") }}</div>
            <PageUtil v-if="total!=0" :total="total" :current-page='pageNo' @pagechange="pagechange"></PageUtil>
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
import LeftNav from "../../components/left_nav";
import PageUtil from '../../components/pageUtil';
export default {
  data() {
    return {
      searchStr:null,
      searchStrTemp:null,
      pageNo:1,
      pageSize:10,
      pages:0,
      total:0,
      shareList:[],
      sumCount:0
    };
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
    pagechange(val){
      this.pageNo = val
      this.loadData()
    },
    search(){
      this.searchStrTemp = this.searchStr
      this.clearData()
      this.loadData()
    },
    clearData(){
      this.pageNo=1
      this.pageSize=10
      this.pages=0
      this.total=0
      this.shareList=[]
    },
    loadData(){
      let p={
        account:sessionStorage.getItem('account'),
        pageSize:this.pageSize,
        pageNo:this.pageNo,
        searchStr:this.searchStrTemp
      }
      this.axios
      .post(`${this.api.baseURL}/bcSbookLog/sBookQueryList`,p)
        .then(res => {
        if (res.data.success) {
          this.shareList = res.data.data.list.records
          this.pages = res.data.data.list.pages
          this.total = res.data.data.list.total
        } else {
          console.log('获取账户列表失败')
        }
      });
    },
    loadCount(){
      let p={
        account:sessionStorage.getItem('account')
      }
      this.axios
      .post(`${this.api.baseURL}/bcSbookLog/sumCount`,p)
        .then(res => {
          console.log(res)
        if (res.data.success) {
          this.sumCount = res.data.data.sumSbookCount
        } else {
          console.log('获取账户列表失败')
        }
      });

    }
  },
  created(){
    this.loadData()
    this.loadCount()
  },
  components: {
    Header,
    Footer,
    LeftNav,
    PageUtil
  }
};
</script>
<style lang="less">
.myShare-page {
  margin: auto;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  

  .nav-l {
    width: 20%;
  }

  .myShare {
    margin-top: 110px;
    margin-bottom: 20px;
    width: 80%;
    height: 100%;
    background-color: #fff;

    .top-view {
      background: white;
      // border-bottom: 1px solid #ddd;
      padding: 30px 20px 0 20px;
      font-size: 30px;
    }

    .top-number {
      padding-top: 6px;
      padding-left: 20px;
      font-size: 30px;
      font-weight: bold;
    }

    .search-box {
      padding: 0 20px;
      margin: 30px 0;
      width: 50%;
      height: 40px;
      display: flex;
      justify-content: space-between;

      .search-input {
        position: relative;
        width: 78%;
        height: 100%;
        border: 1px solid #ccc;

        > input {
          position: absolute;
          top: 0;
          left: 0;
          padding-left: 5px;
          width: 100%;
          height: 100%;
        }

        > i {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
        }
      }

      .search {
        width: 20%;
        line-height: 40px;
        text-align: center;
        background-color: #10ade4;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
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

    .new-record {
      padding-bottom: 20px;
      width: 100%;

      .record-group {
        // margin-bottom: 42px;
        width: 100%;

        .record-tit-list {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .record-item {
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
              width: 55%;
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
              width: 20%;
              text-overflow: ellipsis;
              overflow: hidden;
              cursor: pointer;
            }
            &:nth-child(2) {
              width: 10%;
            }
            &:nth-child(3) {
              width: 55%;
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

      .lodingMore {
        margin-top: 20px;
      }
    }
  }
}
</style>
