<template>
  <div class="seeMore-page">
    <Header></Header>
      <!-- <h2 class="h2">
        <span @click="lastPage" v-if="pageNo!=1"><< 上一页</span>
        <b>全部交易 </b>
        <span @click="nextPage" v-if="pageNo<pages">下一页 >></span>
      </h2> -->
      <!-- <h6 class="h6">全部数字资产交易</h6> -->
      <!-- <div class="table">
        <div class="group">
          <div class="group-item">交易哈希</div>        
          <div class="group-item">交易类型</div>
          <div class="group-item">转出方</div>
          <div class="group-item">转入方</div>
          <div class="group-item">交易量</div>
          <div class="group-item">交易时间</div>
        </div>

        <div class="group" v-for="(item,index) in list" :key="index">
          <div class="group-item">
            <router-link :to="{path:'transDetail/', query:{hash:item.transHash}}">{{item.transHash|splitHash}}</router-link>
          </div>
          <div class="group-item">{{item.transType|transTypeToName}}</div>        
          <div class="group-item">
            <span v-if="!item.srcAccount" to="">没有输入(新发行的资产)</span>
            <router-link v-if="item.srcAccount" :to="{path:'/accountDetail', query:{act:item.srcAccount}}">{{item.srcAccount}}</router-link>
          </div>
          <div class="group-item">
            <span v-if="!item.dstAccount" to="">没有输出(资产兑付)</span>
            <router-link v-if="item.dstAccount" :to="{path:'/accountDetail', query:{act:item.dstAccount}}">{{item.dstAccount}}</router-link>
          </div>
          <div class="group-item">{{item.amount}}</div>
          <div class="group-item">{{item.created}}</div>
        </div>
      </div> -->
    <div class="new-deal">
      <div class="w">
        <div class="deal-title">{{ $t("seeMore.seeMore1") }}</div>
        <div class="deal-group">
          <ul class="deal-tit-list">
            <li class="deal-item">{{ $t("seeMore.seeMore2") }}</li>
            <li class="deal-item">{{ $t("seeMore.seeMore3") }}</li>
            <li class="deal-item">{{ $t("seeMore.seeMore4") }}</li>
            <li class="deal-item">{{ $t("seeMore.seeMore5") }}</li>
            <li class="deal-item">{{ $t("seeMore.seeMore6") }}</li>
            <li class="deal-item">{{ $t("seeMore.seeMore7") }}</li>
          </ul>

          <ul class="deal-list" v-for="(item,index) in list" :key="index">
            <li class="deal-item">
              <router-link :to="{path:'/transDetail', query:{hash:item.transHash}}">
                {{item.transHash|splitHash}}
                <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </router-link>
            </li>
            <li class="deal-item">{{[item.transType,$i18n.locale]|transTypeToName}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="deal-item">
              <span v-if="!item.srcAccount" to="">{{ $t("seeMore.seeMore8") }}</span>
              <router-link v-if="item.srcAccount" :to="{path:'/accountDetail', query:{act:item.srcAccount}}">
                <span>{{item.srcAccount}}</span>
                <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              </router-link>
            </li>
            <li class="deal-item">
             <span v-if="!item.dstAccount" to="">{{ $t("seeMore.seeMore9") }}</span>
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
        <PageUtil :total="total" :current-page='pageNo' @pagechange="pagechange"></PageUtil>
      </div>
    </div>
      
    <Refresh v-show="loading"></Refresh>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../../components/header";
import Footer from "../../components/footer";
import PageUtil from "../../components/pageUtil";
import Refresh from "../../components/refresh";
export default {
  data() {
    return {
      list: [],
      pageNo: 1,
      pageSize: 10,
      pages: 0,
      total: 0,
      loading:false,
      // display: 10,   // 每页显示条数
      // current: 1,   // 当前的页数
    };
  },
  filters: {
    splitHash(val) {
      let temp = String(val);
      temp = temp.substring(0, 20) + "...";
      return temp;
    },
    transTypeToName([val,lang]) {
      switch (val) {
        case "1":
        if(lang=='en'){
            return 'ISSUE'
          }
          return "发行";
          break;
        case "2":
        if(lang=='en'){
            return 'TRANSFER'
          }
          return "转让";
          break;
        case "3":
        if(lang=='en'){
            return 'CASH'
          }
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
    }
  },
  methods: {
    lastPage() {
      this.pageNo = this.pageNo - 1;
      this.init();
    },
    nextPage() {
      this.pageNo = this.pageNo + 1;
      this.init();
    },
    init() {
      let p = {
        pageSize: this.pageSize,
        pageNo: this.pageNo
      };
      this.loading = true;
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/transQueryList`, p)
        .then(res => {
          if (res.data.success) {
            this.loading = false;
            this.list = res.data.data.list.records;
            this.pages = res.data.data.list.pages;
            this.total = res.data.data.list.total;
          }
        });
    },
    pagechange(currentPage) {
      // console.log(currentPage)
      this.pageNo = currentPage;
      this.init();
    }
  },
  created() {
    this.init();
  },
  components: {
    Header,
    Footer,
    PageUtil,
    Refresh
  }
};
</script>
<style lang="less">
.seeMore-page {
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
  }
}
</style>