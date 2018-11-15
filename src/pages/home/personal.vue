<template>
<div>
  <div class="personal-page">
    <Header></Header>
    <LeftNav class="nav-l"></LeftNav>
    <div class="personal">
      <div class="top-view">{{ $t("personal.personal1") }}</div>
      <div class="message">
        <div class="message-left">
          <h5 class="h5">{{ $t("personal.personal2") }}</h5>
          <div class="money-box">
            <div class="money">
              <div class="sum">
                <div class="sum-msg">
                  <div class="turnover">{{ $t("personal.personal5") }}</div>
                  <div class="turnover-money">￥{{LGQSUMCOUNT.getTotal+LGQSUMCOUNT.sendTotal}}</div>
                </div>
              </div>
              <div class="stroke-count">
                <div class="stroke-count-msg">
                  <div class="count">{{ $t("personal.personal6") }}</div>
                  <div class="turnover-count"><span>{{LGQSUMCOUNT.getCount+LGQSUMCOUNT.sendCount}}</span>{{ $t("personal.personal7") }}</div>
                </div>
              </div>
              <div class="sum">
                <div class="sum-msg">
                  <div class="turnover">{{ $t("personal.personal8") }}</div>
                  <div class="turnover-money">￥{{LGQamount}}</div>
                </div>
              </div>
            </div>
            <div v-if="this.$i18n.locale=='en'" class="recently-time">{{ $t("personal.personal9") }}{{LGQLT.created||'No transactions'}} {{LGQLT.dataTime}}</div>
            <div v-if="this.$i18n.locale=='zh'" class="recently-time">{{ $t("personal.personal9") }}{{LGQLT.created||'暂无交易'}} {{LGQLT.dataTime}}</div>
          </div>
        </div>
        <div class="message-left">
          <h5 class="h5">{{ $t("personal.personal3") }}</h5>
          <div class="money-box">
            <div class="money">
              <div class="sum">
                <div class="sum-msg">
                  <div class="turnover">{{ $t("personal.personal5") }}</div>
                  <div class="turnover-money">￥{{JLQSUMCOUNT.getTotal+JLQSUMCOUNT.sendTotal}}</div>
                </div>
              </div>
              <div class="stroke-count">
                <div class="stroke-count-msg">
                  <div class="count">{{ $t("personal.personal6") }}</div>
                  <div class="turnover-count"><span>{{JLQSUMCOUNT.getCount+JLQSUMCOUNT.sendCount}}</span>{{ $t("personal.personal7") }}</div>
                </div>
              </div>
              <div class="sum">
                <div class="sum-msg">
                  <div class="turnover">{{ $t("personal.personal8") }}</div>
                  <div class="turnover-money">￥{{JLQamount}}</div>
                </div>
              </div>
            </div>
            <div v-if="this.$i18n.locale=='en'" class="recently-time">{{ $t("personal.personal9") }}{{JLQLT.created||'No transactions'}} {{JLQLT.dataTime}}</div>
            <div v-if="this.$i18n.locale=='zh'" class="recently-time">{{ $t("personal.personal9") }}{{JLQLT.created||'暂无交易'}} {{JLQLT.dataTime}}</div>
          </div>
        </div>
        <div class="message-left">
          <h5 class="h5">{{ $t("personal.personal4") }}</h5>
          <div class="money-box">
            <div class="money">
              <div class="sum">
                <div class="sum-msg">
                  <div class="turnover">{{ $t("personal.personal5") }}</div>
                  <div class="turnover-money">￥{{GWQSUMCOUNT.getTotal+GWQSUMCOUNT.sendTotal}}</div>
                </div>
              </div>
              <div class="stroke-count">
                <div class="stroke-count-msg">
                  <div class="count">{{ $t("personal.personal6") }}</div>
                  <div class="turnover-count"><span>{{GWQSUMCOUNT.getCount+GWQSUMCOUNT.sendCount}}</span>{{ $t("personal.personal7") }}</div>
                </div>
              </div>
              <div class="sum">
                <div class="sum-msg">
                  <div class="turnover">{{ $t("personal.personal8") }}</div>
                  <div class="turnover-money">￥{{GWQamount}}</div>
                </div>
              </div>
            </div>
            <div v-if="this.$i18n.locale=='en'" class="recently-time">{{ $t("personal.personal9") }}{{GWQLT.created||'No transactions'}} {{GWQLT.dataTime}}</div>
            <div v-if="this.$i18n.locale=='zh'" class="recently-time">{{ $t("personal.personal9") }}{{GWQLT.created||'暂无交易'}} {{GWQLT.dataTime}}</div>
          </div>
        </div>

      </div>
      <div class="top-view">{{ $t("personal.personal10") }}</div>
      <div id="share" style="width: 100%;height: 350px;"></div>
    </div>
  </div>
  <Footer></Footer>
  </div>
</template>
<script>
import LeftNav from "../../components/left_nav";
import Header from "../../components/header";
import Footer from "../../components/footer";
import echarts from "echarts";
export default {
  data() {
    return {
      JLQLT: {
        created: "",
        dataTime: ""
      },
      JLQSUMCOUNT: {
        getTotal: 0,
        sendTotal: 0,
        getCount:0,
        sendCount:0
      },
      JLQamount: 0.0,
      LGQLT: {
        created: "",
        dataTime: ""
      },
      LGQSUMCOUNT: {
        getTotal: 0,
        sendTotal: 0,
        getCount:0,
        sendCount:0
      },
      LGQamount: 0.0,
      GWQLT: {
        created: "",
        dataTime: ""
      },
      GWQSUMCOUNT: {
        getTotal: 0,
        sendTotal: 0,
        getCount:0,
        sendCount:0
      },
      GWQamount: 0.0,
      option: {
          title: {
              text: ''
          },
          tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: {
              data:['共享信息']
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data : null
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'',
                  type:'line',
                  stack: '总量',
                  smooth:true,  //这句就是让曲线变平滑的
                  label: {
                      normal: {
                          show: true,
                          position: 'top'
                      }
                  },
                  areaStyle: {normal: {}},
                  data:null
              },
          ]
      }
    };
  },
  methods: {
    init() {
      let p = {};
      this.axios.post(`${this.api.baseURL}/me/index`, p).then(res => {
        console.log(res);
        if (res.data.success) {
          if (res.data.data.JLQSUMCOUNT) {
            this.JLQSUMCOUNT = res.data.data.JLQSUMCOUNT;
          }
          if (res.data.data.JLQLT) {
            // this.JLQLT = res.data.data.JLQLT;
            this.JLQLT.created = res.data.data.JLQLT.created.slice(0, 10);
            this.JLQLT.dataTime = res.data.data.JLQLT.created.slice(11);
          }
          if (res.data.data.JLQamount) {
            this.JLQamount = res.data.data.JLQamount;
          }
          if (res.data.data.LGQLT) {
            // this.LGQLT = res.data.data.LGQLT;
            this.LGQLT.created = res.data.data.LGQLT.created.slice(0, 10);
            this.LGQLT.dataTime = res.data.data.LGQLT.created.slice(11);
          }
          if (res.data.data.LGQamount) {
            this.LGQamount = res.data.data.LGQamount;
          }
          if (res.data.data.LGQSUMCOUNT) {
            this.LGQSUMCOUNT = res.data.data.LGQSUMCOUNT;
          }

          if (res.data.data.GWQSUMCOUNT) {
            this.GWQSUMCOUNT = res.data.data.GWQSUMCOUNT;
          }
          if (res.data.data.GWQLT) {
            // this.JLQLT = res.data.data.JLQLT;
            this.GWQLT.created = res.data.data.GWQLT.created.slice(0, 10);
            this.GWQLT.dataTime = res.data.data.GWQLT.created.slice(11);
          }
          if (res.data.data.GWQamount) {
            this.GWQamount = res.data.data.GWQamount;
          }

          //共享数据
          let sbookList = res.data.data.sbookCountList
          let xdata = []
          let ydata = []
          for(let i=0;i<sbookList.length;i++){
            let click_date = sbookList[i].click_date
            xdata.push(click_date.slice(0, 10))
            ydata.push(sbookList[i].count)
          }
          this.option.xAxis[0].data = xdata
          this.option.series[0].data = ydata
          this.drowAllPie()

        } else {
        }
      });
    },
    drowAllPie() {
      this.$nextTick(function() {
        this.drawPie("share");
      });
    },
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption(this.option);
    },
  },
  components: {
    LeftNav,
    Header,
    Footer,
  },
  created() {
    this.init();
    this.drowAllPie();
  }
};
</script>
<style lang="less">
.personal-page {
  margin: auto;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .nav-l {
    width: 20%;
  }

  .personal {
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

    .message {
      padding: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .message-left {
        padding: 0;
        flex: 1;
        // height: 370px;
        border: 1px solid #ddd;

        &:first-child {
          margin-right: 20px;
        }

        &:nth-child(2) {
          margin-right: 20px;
        }

        .h5 {
          padding-left: 15px;
          height: 36px;
          line-height: 36px;
          font-size: 18px;
          font-weight: 300;
          background-color: #f4f4f4;
        }

        .money-box {
          padding: 0 15px;
          width: 100%;

          .money {
            padding: 15px 0;
            width: 100%;

            .sum {
              position: relative;
              padding: 0 20px;
              width: 259px;
              height: 74px;
              background: url("../../assets/sum-01.png") no-repeat;
              background-size: 100% 100%;

              &:last-child {
                background: url("../../assets/sum-03.png") no-repeat;
              }

              .sum-msg {
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                width: 219px;
                color: #fff;

                .turnover {
                  padding-left: 6px;
                  font-size: 16px;
                }

                .turnover-money {
                  font-size: 24px;
                }
              }
            }

            .stroke-count {
              position: relative;
              padding: 0 20px;
              margin: 10px 0;
              width: 259px;
              height: 74px;
              background: url("../../assets/sum-02.png") no-repeat;
              background-size: 100% 100%;
              overflow: hidden;

              .stroke-count-msg {
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                width: 219px;
                display: flex;
                justify-content: space-between;
                color: #fff;

                .count {
                  flex: 1;
                  font-size: 16px;
                }

                .turnover-count {
                  flex: 1;

                  > span {
                    font-size: 30px;
                  }
                }
              }
            }
          }

          .recently-time {
            padding: 10px 0;
            border-top: 1px solid #e0e0e0;
          }
        }
      }
    }
  }
}
</style>
