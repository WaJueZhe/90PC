<template>
  <div>
    <div class="tradingRecord-page">
      <Header></Header>
      <LeftNav class="nav-l"></LeftNav>
      <div class="tradingRecord">
        <div class="top-view">
          <div class="info">
            <div class="info-left">{{ $t("tradingRecord.tradingRecord1") }}<br>{{account}}</div>
            <div class="info-right">
              <div class="f-20">{{ $t("tradingRecord.tradingRecord2") }}</div>
              <div class="f-20">
                <span>{{totalAmount}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabBox">
          <div class="tab">
            <div class="tab-item" :class="{ active:activeIndex == 1 }" @click="togole(1)">{{ $t("tradingRecord.tradingRecord3") }}</div>
            <div class="tab-item" :class="{ active:activeIndex == 2 }" @click="togole(2)">{{ $t("tradingRecord.tradingRecord4") }}</div>
            <div class="tab-item" :class="{ active:activeIndex == 3 }" @click="togole(3)">{{ $t("tradingRecord.tradingRecord5") }}</div>
          </div>
          <div class="tab-right">
            <div class="input">
              <input v-model="searchStr" type="text">
              <i class="iconfont icon-search"></i>
            </div>
            <div @click="search" class="search">{{ $t("tradingRecord.tradingRecord6") }}</div>
          </div>
        </div>
        <div class="tab-content">
          <All :list="list"  :account="account"></All>
          <div v-if="pages>pageNo" @click="loadmore" class="more">{{ $t("tradingRecord.tradingRecord7") }}</div>
          <div v-if="pages<=pageNo" class="more">{{ $t("tradingRecord.tradingRecord8") }}</div>
        </div>
        <Refresh v-show="loading"></Refresh>
      </div>
    </div>
  </div>
</template>
<script>
import All from "../../components/recordBox/all";
import Refresh from "../../components/refresh";
import LeftNav from "../../components/left_nav";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default {
  data() {
    return {
      activeIndex: 1,
      searchType: "",
      searchStr: "",
      loading: false,
      account: "",
      pageSize: 5,
      pageNo: 1,
      total: 0,
      pages: 0,
      list: [],
      asset_list: [],
      totalAmount: 0.0
    };
  },
  methods: {
    clearData() {
      this.loading = false;
      this.pageSize = 5;
      this.pageNo = 1;
      this.total = 0;
      this.pages = 0;
      this.list = [];
      this.asset_list = [];
    },
    togole(val) {
      if (this.activeIndex != val) {
        this.activeIndex = val;
        this.clearData();
        this.searchStr = "";
        switch (this.activeIndex) {
          case 1:
            this.searchType = "";
            break;
          case 2:
            this.searchType = "SEND";
            break;
          case 3:
            this.searchType = "GET";
            break;
          default:
            break;
        }

        this.init();
      }
    },
    search() {
      this.clearData();
      this.init();
    },
    loadmore() {
      if (this.pageNo < this.pages) {
        this.pageNo = this.pageNo + 1;
        this.nextPage();
      }
    },
    nextPage() {
      let p = {
        searchStr: this.searchStr,
        searchType: this.searchType,
        accountType: "2",
        pageSize: this.pageSize,
        pageNo: this.pageNo
      };
      this.loading = true;
      this.axios.post(`${this.api.baseURL}/me/accountDetail`, p).then(res => {
        this.loading = false;
        if (res.data.success) {
          this.total = res.data.data.list.total;
          this.pages = res.data.data.list.pages;
          this.list = this.list.concat(res.data.data.list.records);
          this.asset_list = res.data.data.asset_list;
          this.totalAmount = res.data.data.total_amount;
        }
      });
    },
    init() {
      let p = {
        searchStr: this.searchStr,
        searchType: this.searchType,
        accountType: "2",
        pageSize: this.pageSize,
        pageNo: this.pageNo
      };
      this.loading = true;
      this.axios.post(`${this.api.baseURL}/me/accountDetail`, p).then(res => {
        this.loading = false;
        if (res.data.success) {
          this.account = res.data.data.accountStr;
          this.total = res.data.data.list.total;
          this.pages = res.data.data.list.pages;
          this.list = res.data.data.list.records;
          this.asset_list = res.data.data.asset_list;
          this.totalAmount = res.data.data.total_amount;
        }
      });
    }
  },
  created() {
    this.init();
  },
  components: {
    All,
    Refresh,
    LeftNav,
    Header,
    Footer
  }
};
</script>
<style lang="less">
.tradingRecord-page {
  margin: auto;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .nav-l {
    width: 20%;
  }

  .tradingRecord {
    margin-top: 110px;
    margin-bottom: 20px;
    width: 80%;
    height: 100%;
    background-color: #fff;

    .top-view {
      background: white;
      border-bottom: 1px solid #ddd;
      padding: 0 30px;
      height: 115px;

      .info {
        padding: 20px 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .info-left {
          flex: 1;
          font-size: 28px;
        }

        .info-right {
          flex: 1;
          text-align: right;

          .f-20 {
            margin-bottom: 10px;
            font-size: 20px;
            color: #5f5f5f;

            > span:first-child {
              margin-right: 10px;
            }
          }
        }
      }
    }

    .tabBox {
      padding: 0px 30px;
      background: #252533;
      width: 100%;
      border-bottom: 1px solid #ddd;
      height: 60px;
      line-height: 60px;
      color: #fff;
      z-index: 10;
      display: flex;
      justify-content: space-between;

      .tab {
        width: 20%;
        display: flex;
        justify-content: space-between;

        .tab-item {
          flex: 1;
          font-size: 16px;
          cursor: pointer;
        }

        .active {
          color: #10ade4;
        }
      }

      .tab-right {
        position: relative;
        width: 40%;

        .input {
          position: absolute;
          top: 50%;
          right: 100px;
          transform: translateY(-50%);
          width: 60%;
          height: 40px;

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
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 80px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-radius: 5px;
          background-color: #356d68;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .more {
      margin-top: 20px;
      text-align: center;
      font-size: 20px;
      cursor: pointer;
    }

    .more:hover {
      font-weight: bold;
    }

    .tab-content {
      padding-bottom: 20px;
    }
  }
}
</style>
