<template>
  <div class="myApplyFor-page">
    <Header></Header>
    <LeftNav class="nav-l"></LeftNav>
    <div class="myApplyFor">
      <div class="top-tit">
        <div class="summation">
          <h3>{{ $t("myApplyFor.myApplyFor1") }}</h3>
          <p>{{totalCount}}{{ $t("myApplyFor.myApplyFor2") }}</p>
        </div>
        <div class="summation">
          <h3>{{ $t("myApplyFor.myApplyFor3") }}</h3>
          <p>{{successCount}}{{ $t("myApplyFor.myApplyFor2") }}</p>
        </div>
      </div>
      <div class="tabBox">
        <div class="tab">
          <div class="tab-item" :class="{ active:activeIndex == 1 }" @click="togole(1)">{{ $t("myApplyFor.myApplyFor4") }}</div>
          <div class="tab-item" :class="{ active:activeIndex == 2 }" @click="togole(2)">{{ $t("myApplyFor.myApplyFor5") }}</div>
        </div>
        <div class="tab-right">
          <div class="input">
            <input v-model="searchStr" type="text" :placeholder="$t('myApplyFor.myApplyFor6')">
            <i class="iconfont icon-search"></i>
          </div>
          <div class="search">{{ $t("myApplyFor.myApplyFor6") }}</div>
        </div>
      </div>

      <div class="tab-content">
        <Digital :list="list" @confirm="confirm" v-if="activeIndex == 1"></Digital>
        <AccountBook :list="list" @confirm="confirm" v-if="activeIndex == 2"></AccountBook>
        <div v-if="total==0" style="width:100%;text-align: center">{{ $t("myApplyFor.myApplyFor7") }}</div>
        <PageUtil v-if="total!=0" :total="total" :current-page='pageNo' @pagechange="pagechange"></PageUtil>
      </div>

      <Refresh v-show="loading"></Refresh>
     
    </div>
  </div>
</template>
<script>
import Refresh from "../../components/refresh";
import Header from "../../components/header";
import Footer from "../../components/footer";
import LeftNav from "../../components/left_nav";
import Digital from "../../components/myApply/digitalAsset";
import AccountBook from "../../components/myApply/accountBook";
import PageUtil from '../../components/pageUtil';
export default {
  data() {
    return {
      loading:false,
      activeIndex:1,
      successCount:0,
      totalCount:0,
      searchStr:null,
      list:[],
      pageSize:10,
      pageNo:1,
      pages:0,
      total:0

    };
  },
  methods: {
    //切换
    togole(val) {
      if (this.activeIndex != val) {
        this.activeIndex = val;
        this.clearData()
        this.loadData()
      }
    },
    //数据统计
    applyCount(){
      let p={}
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/checkCount`,p)
        .then(res => {
        if (res.data.success) {
          this.successCount = res.data.data.result.successCount
          this.totalCount = res.data.data.result.totalCount
        } else {
          console.log('获取账户列表失败')
        }
      });
    },
    //初始化数据
    clearData(){
      this.list=[]
      this.pageSize=10
      this.pageNo=1  
      this.total=0    
    },
    //加载更多
    pagechange(val){
      this.pageNo = val
      this.loadData()
    },
    //加载数据
    loadData(){
      if(this.activeIndex==1){
        this.digitalList()
      }

      if(this.activeIndex==2){
        this.sBookList()
      }

    },
    /**
     * 数字资产申请列表 
     * */    
    digitalList(){
      let p={
        pageSize:this.pageSize,
        pageNo:this.pageNo,
        searchStr:this.searchStr,
        type:'1'
      }
      this.loading = true
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/assetCheckApplyQuery`,p)
        .then(res => {
          this.loading =false
        if (res.data.success) {
          this.list = res.data.data.list.records
          this.pages = res.data.data.list.pages
          this.total = res.data.data.list.total
        } else {
          console.log('获取数字资产申请列表失败')
        }
      });
    },
    /**
     * 共享账本申请列表 
     * */
    sBookList(){
      let p={
        pageSize:this.pageSize,
        pageNo:this.pageNo,
        searchStr:this.searchStr,
        type:'2'
      }
      this.loading = true
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/sbookCheckApplyQuery`,p)
        .then(res => {
          this.loading = false
        if (res.data.success) {
          this.list = res.data.data.list.records
          this.pages = res.data.data.list.pages
          this.total = res.data.data.list.total
        } else {
          console.log('获取数字资产申请列表失败')
        }
      });
    },
    confirm(){
      this.applyCount()
      this.loadData()      
    }
  },
  created () {
    this.applyCount()
    this.loadData()
  },
  components: {
    Header,
    Footer,
    LeftNav,
    Digital,
    AccountBook,
    PageUtil,
    Refresh
  }
};
</script>
<style lang="less">
.myApplyFor-page {
  margin: auto;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .nav-l {
    width: 20%;
  }

  .myApplyFor {
    margin-top: 110px;
    margin-bottom: 20px;
    width: 80%;
    height: 100%;
    background-color: #fff;

    .top-tit {
      padding: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .summation {
        flex: 1;

        h3 {
          font-size: 40px;
        }

        p {
          padding-top: 6px;
          font-size: 24px;
        }
      }
    }

    .tab-content{
      padding-bottom: 20px;
      padding-top: 20px;
    }

    .tabBox {
      padding: 0px 30px;
      background: #252533;
      width: 100%;
      height: 60px;
      line-height: 60px;
      z-index: 10;
      display: flex;
      justify-content: space-between;

      .tab {
        width: 40%;
        display: flex;
        justify-content: space-between;

        .tab-item {
          // margin-right: 30px;
          flex: 1;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          color: #fff;
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
          width: 65%;

          > a {
            cursor: pointer;
            color: #10ade4;
          }
        }

        .top-c {
          float: left;
          width: 15%;
          color: #4cae4c;
        }

        .top-c-r {
          float: left;
          width: 15%;
          color: red;
        }

        .top-r {
          float: left;
          width: 15%;
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
}
</style>
