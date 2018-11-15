<template>
  <div class="home-page">
    <Header></Header>
    <div class="w">

      <div class="searchBox">
        <div class="search-top">搜索</div>
        <div class="info">
          <i>您可以输入账户地址、交易哈希值进行查询</i>
        </div>
        <div class="search">
          <div class="input">
            <i class="iconfont icon-search"></i>
            <input v-model="searchStr" type="text" placeholder="账户地址 / 交易哈希值">
          </div>
          <div class="search-btn" @click="search">SEARCH</div>
        </div>
      </div>

      <div class="statisticsBox">
        <h5 class="h5">实时统计</h5>
        <div class="statistics">
          <div class="today-statistics">
            <div class="statistics-title">今日交易笔数</div>
            <div class="statistics-info">统计数据为零购券、久零券和购物券交易笔数之和</div>
            <div class="statistics-number" v-if="dayTransCount==null">
              <div class="number-item">0</div>
              <div class="number-item">0</div>
              <div class="number-item">0</div>
              <div class="number-item">0</div>
              <div class="number-item">0</div>
              <div class="number-item">0</div>
            </div>
            <div class="statistics-number" v-if="dayTransCount!=null">
              <div class="number-item" v-for="(item,index) in dayTransCount" :key="index">
                {{item}}
              </div>
            </div>            
            <div class="statistics-info">数据截取时间:{{nowTime}}</div>
          </div>
          <div class="today-statistics">
            <XChart :uuid="uuid" :id="id" :option="option"></XChart>
          </div>
        </div>
      </div>



      <div class="content">
        <span class="title">最新交易</span>
        <router-link to="/seeMore">查看更多
          <i class="iconfont icon-down"></i>
        </router-link>
      </div>
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
          <router-link :to="{path:'/transDetail', query:{hash:item.transHash}}">{{item.transHash|splitHash}}</router-link>
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
        <div class="group-item">{{item.created|getDateDiff}}</div>
      </div>

    </div>
    
    <Footer></Footer>
    
    <Refresh v-show="loading"></Refresh>
  </div>
</template>
<script>
import Header from '../../components/header';
import Footer from '../../components/footer';
import Refresh from '../../components/refresh';
import XChart from '../../components/comp';//图表组件
export default {
  data () {
    return {
      nowTime:'',
      list:[],
      loading:false,
      searchStr:'',
      id: 'test',
      uuid:'',
      dayTransCount:[],
      click_date:[],
      JLamount:[],
      LGamount:[],
      GWamount:[],
      option: {
          chart: {
              type: 'line',//column 这种是柱状图类型
          },
          credits: { 
            enabled: false //不显示底部LOGO 
          },
          title: {
              text: '数字资产交易量'//表头文字
          },
          subtitle: {
              text: '数据来源:90区块链'//表头下文字
          },
          xAxis: {//x轴显示的内容
              categories: [],
              plotbands:[{//可以显示一个方块，如果需要的话可以更改透明度和颜色
              from:4.5,
              to:6.5,
              color:'rgba(68,170,213,0)'//透明度和颜色
            }]
          },
          
          yAxis: {//y轴显示的内容
              title: {
                  text: '交易量'
              }
          },
          plotOptions: {
            line: {
              dataLabels: {
                  enabled: true // 开启数据标签
              },
              enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            }
          },
          series: [{//两条数据
              name: '零购券',
              data: []
          }, {
              name: '久零券',
              data: []
          },{
              name: '购物券',
              data: []
          }]
      }
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
    getDateDiff(dateTimeStamp){
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
    guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
      })
    },
    getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
        return currentdate;
    },
    search(){
      
      if(this.searchStr==null||this.searchStr==''){
        return;
      }
      this.$router.push({path:'/searchResult', query:{searchStr:this.searchStr}})
    },
    init(){
      let p = {
        "pageSize":"10",
        "pageNo":"1"
      }
      console.log(this.api.baseURL);
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/transQueryList`, p)
        .then(res => {
          if (res.data.success) {
            this.list = res.data.data.list.records;
          }else{
          }
        });
    },
    getTransCount(){
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/transCountForDay`)
        .then(res => {
          if (res.data.success) {
            let tempStr = String(res.data.data.dayTransCount);
            if(tempStr==0||tempStr=='0'){
              this.dayTransCount=null;
              return;
            }else{
              for(let i=0;i<tempStr.length;i++){
                let k = 0;
                if(tempStr.length<5){
                  k = 5 - tempStr.length;
                  for(let j=0;j<k;j++){
                    this.dayTransCount[j]='0';
                  }
                }
                this.dayTransCount[k+i] = tempStr.substring(i,i+1);
              }
            }
          }
        });
    },
    getTransAmount(){
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/transAmountForTwoWeek`)
        .then(res => {
          if (res.data.success) {
            let resData = res.data.data.amountList;
            for(let i=0;i<resData.length;i++){
              let dateTime = new Date(resData[i].click_date)
              this.click_date[i] = (dateTime.getMonth() + 1) + '-' + dateTime.getDate();
              
              this.LGamount[i] = parseInt(resData[i].LGamount);
              this.JLamount[i] = parseInt(resData[i].JLamount);
              this.GWamount[i] = parseInt(resData[i].GWamount);
            }
            this.option.xAxis.categories = this.click_date;
            this.option.series = 
              [{
                  name: '零购券',
                  data: this.LGamount
              }, {
                  name: '久零券',
                  data: this.JLamount
              },{
                  name: '购物券',
                  data: this.GWamount
              }]
            this.uuid = this.guid();
          }else{
          }
        });      
    }
  },
  created () {
    this.nowTime = this.getNowFormatDate();
    this.init();
    this.getTransCount();
    this.getTransAmount();
  },
  components: {
    Header,
    Footer,
    Refresh,
    XChart
  }
}
</script>
<style lang="less">
.home-page {
  margin-top: 90px;
  width: 100%;
  height: 100%;

  .w {

    .content {
      margin: 20px 0;
      width: 100%;
      height: 34px;
      line-height: 34px;

      > span {
        display: inline-block;
        font-size: 24px;
        color: #666;
      }

      > a {
        float: right;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        color: #356d68;

        > i {
          margin-left: 10px;
          display: inline-block;
          transform: rotate(-90deg);
          font-size: 20px;
          -webkit-transform: rotate(-90deg);
          -o-transform: rotate(-90deg);
          -moz-transform: rotate(-90deg);
        }
      }
    }

    .group {
      padding: 0 20px;
      width: 100%;
      height: 56px;
      line-height: 56px;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;

      &:nth-child(2n) {
        background-color: #f9f9f9;
      }

      .group-item {
        text-align: center;

        > a {
          cursor: pointer;
          color: #10ADE4;
        }

        &:nth-child(1) {
          width: 16%;
        }
        &:nth-child(2) {
          width: 5%;
        }
        &:nth-child(3) {
          width: 29%;
        }
        &:nth-child(4) {
          width: 29%;
        }
        &:nth-child(5) {
          width: 11%;
        }
        &:nth-child(6) {
          width: 10%;
        }
      }
    }

    .searchBox {
      padding: 25px 60px;
      background-color: #F5F7F9;

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
          background-color:#356d68;
          cursor: pointer;
        }
      }
    }

    .statisticsBox {
      margin-bottom: 40px;
      width: 100%;

      .h5 {
        font-size: 24px;
        color: #666;
      }
      
      .statistics {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .today-statistics {
          padding: 20px;
          width: 48%;
          min-height: 240px;
          border: 1px solid #ccc;
          border-radius: 5px;
          overflow: hidden;

          &:last-child {
            padding: 0;
          }

          .statistics-title {
            margin-bottom: 20px;
            font-size: 22px;
            color: #666;
          }

          .statistics-number {
            margin: 50px 0;
            display: flex;
            justify-content: center;

            .number-item {
              margin-right: 10px;
              width: 70px;
              height: 100px;
              line-height: 100px;
              text-align: center;
              font-size: 80px;
              background-color: #9faf02;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
