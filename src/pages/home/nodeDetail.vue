<template>
  <div class="nodeDetail-page">
    <Header></Header>
    <div class="top-banner">
      <div class="banner-cont">
        <div class="banner-title">{{node.name}}</div>
        <div class="banner-des">
          <dl>
            <dt>{{ $t("inquire.inquire10") }}</dt>
            <dd>{{node.ip}}</dd>
          </dl>
          <dl>
            <dt>{{ $t("inquire.inquire11") }}</dt>
            <dd>{{node.status}}</dd>
          </dl>
          <dl>
            <dt>{{ $t("inquire.inquire12") }}</dt>
            <dd>{{node.join_time}}</dd>
          </dl>
        </div>
        <div class="banner-info">
          <div class="info-tt">{{ $t("inquire.inquire13") }}</div>
          <div class="node-desc">
            <p>{{node.desc}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w">
      <div class="nodeDetail">
        <div class="nodeDetail-title">{{ $t("inquire.inquire14") }}</div>
        <ul class="nodeDetail-list">
          <li v-for="(item,index) in sbookList" :key="index" class="nodeDetail-item">
            <div class="nodeDetail-item-l">
              <span>{{ $t("inquire.inquire15") }}<br>
                {{item.bHeight}}
              </span>
            </div>
            <div class="nodeDetail-item-r">
              <div class="value-line clearfix">
                <dl>
                  <dt>{{ $t("inquire.inquire16") }}</dt>
                  <dd class="hash-wrap">
                    <router-link class="hash" :to="{path:'/recordDetail', query:{hash:item.tHash}}">
                      {{item.tHash}}
                    </router-link>
                    <!-- <span class="hash">{{item.tHash}}</span> -->
                    <button 
                      v-clipboard:copy="item.tHash"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError"
                      class="btn-copy">{{ $t("inquire.inquire17") }}</button>
                  </dd>
                </dl>
                <dl>
                  <dt v-if="$i18n.locale=='zh'">{{ $t("inquire.inquire18") }}</dt>
                  <dd>{{item.created}}</dd>
                </dl>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
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
import VueClipboard from "vue-clipboard2";
import Hooltip from "../../components/hint/tooltip.vue";
import VueResource from 'vue-resource';
import Vue from "vue";
Vue.use(VueResource);
Vue.use(VueClipboard);
export default {
  data() {
    return {
      hooltip: {
        isShow: false,
        cancel: "",
        ensure: "确定",
        tipTitle: "提示",
        tipContent: "申请提交成功"
      },      
      node:{
        name:'',
        ip:'',
        status:'',
        join_time:'',
        desc:''
      },
      index:1,
      sbookList:[]
    };
  },
  watch:{
    getLang(){
      this.langChange()
    }
  },
  methods:{
    onError() {
      if(this.$i18n.locale=='en'){
        this.hooltip = {
          isShow: true,
          cancel: "",
          ensure: "OK",
          tipTitle: "ERROR",
          tipContent: "Copy text failure"
        }
      }else{
        this.hooltip = {
          isShow: true,
          cancel: "",
          ensure: "确定",
          tipTitle: "提示",
          tipContent: "复制文本失败"
        }
      }

    },
    onCopy(e) {
      if(this.$i18n.locale=='en'){
        this.hooltip = {
          isShow: true,
          cancel: "",
          ensure: "OK",
          tipTitle: "SUCCESS",
          tipContent: "The text has been copied to the clipboard"
        }
      }else{
        this.hooltip = {
          isShow: true,
          cancel: "",
          ensure: "确定",
          tipTitle: "提示",
          tipContent: "文本已复制到剪贴板"
        }
      }

    },    
    abolish() {
      this.hooltip.isShow = false;
    },
    confirm() {
      this.hooltip.isShow = false;
    },    
    langChange(){
      let nodeName='node_zh.json'
      if(this.$i18n.locale=='en'){
        nodeName = 'node_en.json'
      }
      this.$http.get('static/data/'+nodeName).then(res => {
          let nodeList = res.body
          this.node = nodeList[Number(this.index)-1]
      })
    },
    initSbookList() {
      let p = {
        pageSize: "10",
        pageNo: "1"
      };
      this.axios
        .post(`${this.api.baseURL}/bcSbookLog/sbookTask`, p)
        .then(res => {
          if (res.data.success) {
            this.sbookList = res.data.data.list.records;
          } else {
          }
        });
    }    
  },
  created(){
    this.initSbookList()
    this.index = this.$route.query.node
    this.langChange()
  },
  computed: {
    getLang() {
      return this.$i18n.locale
    }
  },  
  components: {
    Header,
    Hooltip,
    Footer
  }
};
</script>
<style lang="less">
.nodeDetail-page {
  margin-top: 70px;
  width: 100%;
  height: 100%;

  .top-banner {
    width: 100%;
    height: 400px;
    background: url('../../assets/node_banner.png') no-repeat;
    background-size: 100% 100%;

    .banner-cont {
      max-width: 1140px;
      margin: 0 auto;
      color: #FFF;
      padding: 50px 10px 0;

      .banner-title {
        font-size: 54px;
        margin-bottom: 30px;
      }

      .banner-des {
        width: 600px;

        &:after {
          display: block;
          clear: both;
          content: ' ';
        }

        > dl {
          float: left;
          padding: 5px 0;

          > dt {
            float: left;
            margin-right: 25px;
          }

          > dd {
            float: left;
            padding-right: 65px;
          }
        }
      }

      .banner-info {
        padding-top: 15px;
        margin-top: 13px;
        border-top: 1px solid #42669D;
        width: 725px;

        .info-tt {
          font-size: 18px;
          margin-bottom: 5px;
        }

        .node-desc {
          > p {
            line-height: 24px;
          }
        }
      }
    }
  }

  .w {
    padding: 0;

    .nodeDetail {
      margin-top: 60px;
      width: 100%;
      height: 100%;
      background-color: #fff;

      .nodeDetail-title {
        line-height: 86px;
        padding: 0 20px;
        font-size: 28px;
        background-color: #000;
        color: #fff;
      }

      .nodeDetail-list {
        padding: 20px 0;
        padding-left: 20px;
        width: 100%;
        height: 100%;
        border-top: 1px solid #D2D2D2;

        .nodeDetail-item {
          position: relative;
          padding: 20px 0;
          width: 100%;
          height: 100%;
          border-bottom: 1px solid #D2D2D2;
          overflow: hidden;

          .nodeDetail-item-l {
            position: absolute;
            top: 0;
            left: 0;
            width: 112px;
            text-align: center;
            background: #F7F7F7;
            height: 100%;

            > span {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
            }
          }

          .nodeDetail-item-r {
            padding: 0 20px 0 120px;
            overflow: hidden;

            .value-line {
              padding: 12px 0;
              border-top: 1px solid #EAEAEA;
              margin-top: -1px;

              &:after {
                display: block;
                clear: both;
                content: '';
              }

              > dl {
                float: left;
                margin-right: 20px;

                > dt {
                  float: left;
                  width: 70px;
                }

                > dd {
                  float: left;
                  padding-right: 40px;
                  line-height: 19px;
                }

                .hash-wrap {
                  position: relative;
                  padding-right: 40px;

                  &:hover .btn-copy {
                    visibility: visible;
                  }

                  .hash {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    width: 515px;
                    display: inline-block;
                    vertical-align: middle;
                    color: #0984e3;
                  }

                  .btn-copy {
                    padding: 3px 0;
                    border-radius: 3px;
                    border: 1px solid #D2D2D2;
                    position: absolute;
                    left: 490px;
                    top: 50%;
                    margin-top: -14px;
                    line-height: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    visibility: hidden;
                    width: 46px;
                    text-align: center;
                    display: inline-block;
                  }
                }
              }
            }

            .clearfix {
              zoom: 1;
            }
          }
        }
      }
    }
  }
}
</style>
