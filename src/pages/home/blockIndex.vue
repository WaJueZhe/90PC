<template>
  <div class="blockIndex">
    <Header></Header>
    <div class="top-banner">
      <div class="banner-box">
        <div class="Block-height">
          <div class="Block-number">
            <div class="Block-box">
              <!-- <div class="number"><NumberGrow :value="bHeight" :class="{ numActive:numLength == true }"></NumberGrow></div> -->
              <div class="number">
                <div class="wrap" :class="{ numActive:numLength == true }"></div>
              </div>
              <div class="Block-txt">{{ $t("bulletin.bulletin1") }}</div>
            </div>
          </div>
          <div class="Block-img"><img src="../../assets/columnar.gif" alt=""></div>
        </div>
        
        <div class="Block-group">
          <div class="Block-account">
            <span class="Block-account-name">{{ $t("bulletin.bulletin2") }}</span>
            <span class="Block-account-number"></span>
          </div>
          <div class="Block-history">
            <span class="Block-account-name">{{ $t("bulletin.bulletin3") }}</span>
            <span class="Block-account-number2"></span>
          </div>
          <div class="Block-property">
            <span class="Block-account-name">{{ $t("bulletin.bulletin4") }}</span>
            <span class="Block-account-number3"></span>
          </div>
          <div class="Block-share">
            <span class="Block-account-name">{{ $t("bulletin.bulletin5") }}</span>
            <span class="Block-account-number4"></span>
          </div>
        </div>

        <div class="map">
          <div class="radius">
            <span class="animate-radius" @mousemove="tooltip1 = true" @mouseout="tooltip1 = false"></span>
            <div class="tooltip" v-show="tooltip1">
              <img src="../../assets/company-01.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-01.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip2 = true" @mouseout="tooltip2 = false"></span>
            <div class="tooltip" v-show="tooltip2">
              <img src="../../assets/company-02.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-02.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip3 = true" @mouseout="tooltip3 = false"></span>
            <div class="tooltip" v-show="tooltip3">
              <img src="../../assets/company-03.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-03.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip4 = true" @mouseout="tooltip4 = false"></span>
            <div class="tooltip" v-show="tooltip4">
              <img src="../../assets/company-04.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-04.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip5 = true" @mouseout="tooltip5 = false"></span>
            <div class="tooltip" v-show="tooltip5">
              <img src="../../assets/company-05.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-05.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip6 = true" @mouseout="tooltip6 = false"></span>
            <div class="tooltip" v-show="tooltip6">
              <img src="../../assets/company-06.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-06.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip7 = true" @mouseout="tooltip7 = false"></span>
            <div class="tooltip" v-show="tooltip7">
              <img src="../../assets/company-07.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-07.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip8 = true" @mouseout="tooltip8 = false"></span>
            <div class="tooltip" v-show="tooltip8">
              <img src="../../assets/company-08.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-08.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip9 = true" @mouseout="tooltip9 = false"></span>
            <div class="tooltip" v-show="tooltip9">
              <img src="../../assets/company-09.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-09.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip10 = true" @mouseout="tooltip10 = false"></span>
            <div class="tooltip" v-show="tooltip10">
              <img src="../../assets/company-10.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-10.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip11 = true" @mouseout="tooltip11 = false"></span>
            <div class="tooltip" v-show="tooltip11">
              <img src="../../assets/company-11.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-11.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip12 = true" @mouseout="tooltip12 = false"></span>
            <div class="tooltip" v-show="tooltip12">
              <img src="../../assets/company-12.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-12.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip13 = true" @mouseout="tooltip13 = false"></span>
            <div class="tooltip" v-show="tooltip13">
              <img src="../../assets/company-13.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-13.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip14 = true" @mouseout="tooltip14 = false"></span>
            <div class="tooltip" v-show="tooltip14">
              <img src="../../assets/company-14.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-14.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip15 = true" @mouseout="tooltip15 = false"></span>
            <div class="tooltip" v-show="tooltip15">
              <img src="../../assets/company-15.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-15.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip16 = true" @mouseout="tooltip16 = false"></span>
            <div class="tooltip" v-show="tooltip16">
              <img src="../../assets/company-16.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-16.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip17 = true" @mouseout="tooltip17 = false"></span>
            <div class="tooltip" v-show="tooltip17">
              <img src="../../assets/company-17.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-17.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip18 = true" @mouseout="tooltip18 = false"></span>
            <div class="tooltip" v-show="tooltip18">
              <img src="../../assets/company-18.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-18.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip19 = true" @mouseout="tooltip19 = false"></span>
            <div class="tooltip" v-show="tooltip19">
              <img src="../../assets/company-19.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-19.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip20 = true" @mouseout="tooltip20 = false"></span>
            <div class="tooltip" v-show="tooltip20">
              <img src="../../assets/company-20.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-20.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="radius">
            <span class="animate-radius"  @mousemove="tooltip21 = true" @mouseout="tooltip21 = false"></span>
            <div class="tooltip" v-show="tooltip21">
              <img src="../../assets/company-21.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/cp-21.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
        </div>

        <div class="node-number">
          <div class="activation">
            <span class="activation-img"><img src="../../assets/node-01.png" alt=""></span>
            <span class="activation-text">{{ $t("bulletin.bulletin6") }}</span>
          </div>
          <div class="activation">
            <span class="activation-img"><img src="../../assets/node-02.png" alt=""></span>
            <span class="activation-text">{{ $t("bulletin.bulletin7") }}</span>
          </div>
          <div class="activation">
            <span class="activation-img"><img src="../../assets/node-03.png" alt=""></span>
            <span class="activation-text">{{ $t("bulletin.bulletin8") }}</span>
          </div>
        </div>
      </div>

      <div class="banner-bottom-box">
        <div class="Block-node">{{nodeCount}}</div>
        <div class="Block-swiper">
          <p>{{ $t("bulletin.bulletin9") }}</p>
          <div class="marquee">
              <div class="img"><img src="../../assets/node-logo-01.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-02.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-03.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-04.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-05.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-06.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-07.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-08.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-09.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-10.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-11.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-12.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-13.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-14.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-15.jpg" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-16.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-17.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-18.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-19.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-20.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-21.png" alt=""></div>
              <!-- 为了无缝循环，需得重新复制上面的图片 -->
              <div class="img"><img src="../../assets/node-logo-01.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-02.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-03.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-04.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-05.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-06.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-07.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-08.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-09.jpg" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-10.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-11.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-12.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-13.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-14.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-15.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-16.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-17.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-18.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-19.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-20.png" alt=""></div>
              <div class="img"><img src="../../assets/node-logo-21.png" alt=""></div>
          </div>
        </div>
      </div>
     
    </div>
    <!-- 节点查询 -->
    <div class="node-inquire">
      <div class="w">
        <div class="none-title">{{ $t("inquire.inquire1") }}</div>
        <div class="node-group">
          <ul class="node-tit-list">
            <li class="node-item">{{ $t("inquire.inquire2") }}</li>
            <li class="node-item">{{ $t("inquire.inquire3") }}</li>
            <li class="node-item">{{ $t("inquire.inquire4") }}</li>
            <li class="node-item">{{ $t("inquire.inquire5") }}</li>
            <li class="node-item">{{ $t("inquire.inquire6") }}</li>
            <li class="node-item">{{ $t("inquire.inquire7") }}</li>
            <li class="node-item"></li>
          </ul>

          <ul v-for="(item,index) in nodeList_a" :key="index" class="node-list">
            <li class="node-item">{{item.short_name}}<span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span></li>
            <li class="node-item">{{item.site}}({{item.ip}}) <span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span></li>
            <li class="node-item">{{item.status}}<span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span></li>
            <li class="node-item">{{bHeight}} <span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span></li>
            <li class="node-item">{{bhash}} 
              <span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span>
              <button 
                  v-clipboard:copy="bhash"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  class="copy">{{ $t("bulletin.bulletin10") }}</button>
            </li>
            <li class="node-item">{{bTime}}</li>
            <li class="node-item" ><router-link  :to="{path:'/nodeDetail', query:{node:item.index}}">{{ $t("inquire.inquire19") }}</router-link></li>
          </ul>

          <div  v-if="showMore"> 
            <ul  v-for="(item,index) in nodeList_b" :key="index" class="node-list">
              <li class="node-item">{{item.short_name}}<span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span></li>
              <li class="node-item">{{item.site}}({{item.ip}}) <span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span></li>
              <li class="node-item">{{item.status}}<span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span></li>
              <li class="node-item">{{bHeight}} <span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span></li>
              <li class="node-item">{{bhash}} 
                <span class="node-item-img"><img src="../../assets/node-line.png" alt=""></span>
                <button 
                    v-clipboard:copy="bhash"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                    class="copy">{{ $t("bulletin.bulletin10") }}</button>
              </li>
              <li class="node-item">{{bTime}}</li>
              <li class="node-item" ><router-link :to="{path:'/nodeDetail', query:{node:item.index}}">{{ $t("inquire.inquire19") }}</router-link></li>
            </ul>

          </div>                             

        </div>
        <div class="node-mroe" v-if="!showMore" @click="showMore=true">
          <span>{{ $t("inquire.inquire8") }}</span>
          <img src="../../assets/more-02.png" alt="">
        </div>
        <div class="node-mroe" v-if="showMore != false" @click="showMore=false">
          <span>{{ $t("inquire.inquire20") }}</span>
          <img src="../../assets/more-03.png" alt="">
        </div>
      </div>
    </div>
    <!-- 数字资产最新交易 -->
    <div class="new-deal">
      <div class="w">
        <div class="deal-title">{{ $t("deal.deal1") }}
          <span class="watchAll">
            <router-link to="/seeMore">{{ $t("deal.deal8") }}</router-link>
          </span>
        </div>
        <div class="deal-group">
          <ul class="deal-tit-list">
            <li class="deal-item">{{ $t("deal.deal2") }}</li>
            <li class="deal-item">{{ $t("deal.deal3") }}</li>
            <li class="deal-item">{{ $t("deal.deal4") }}</li>
            <li class="deal-item">{{ $t("deal.deal5") }}</li>
            <li class="deal-item">{{ $t("deal.deal6") }}</li>
            <li class="deal-item">{{ $t("deal.deal7") }}</li>
          </ul>

          <ul class="deal-list"  v-for="(item,index) in assetlist" :key="index">
            <li class="deal-item">
              <router-link :to="{path:'/transDetail', query:{hash:item.transHash}}">
                {{item.transHash|splitHash}}
              </router-link>
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              <button 
                  v-clipboard:copy="item.transHash"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  class="copy">{{ $t("bulletin.bulletin10") }}</button>
            </li>
            <li class="deal-item">{{[item.transType,$i18n.locale]|transTypeToName}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>

            <!-- 转出账户 -->
            <li class="deal-item" v-if="!item.srcAccount">{{ $t('accountDetail.accountDetail15')}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="deal-item" v-if="item.srcAccount">{{item.srcAccount}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              <button 
                  v-clipboard:copy="item.srcAccount"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  class="copy">{{ $t("bulletin.bulletin10") }}</button>
            </li>

            <!-- 转入账户 -->
            <li class="deal-item" v-if="!item.dstAccount">{{ $t('accountDetail.accountDetail16')}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="deal-item" v-if="item.dstAccount">{{item.dstAccount}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
              <button 
                  v-clipboard:copy="item.dstAccount"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  class="copy">{{ $t("bulletin.bulletin10") }}</button>
            </li>


            <li class="deal-item">{{item.amount}}
              <span class="deal-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="deal-item">{{[item.created,$i18n.locale]|getDateDiff}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 共享账本最新记录 -->
    <div class="new-record">
      <div class="w">
        <div class="record-title">{{ $t("record.record1") }}
          <span class="watchAll">
            <router-link to="/sbookSeeMore">{{ $t("record.record7") }}</router-link>
          </span>
        </div>
        <div class="record-group">
          <ul class="record-tit-list">
            <li class="record-item">{{ $t("record.record2") }}</li>
            <li class="record-item">{{ $t("record.record3") }}</li>
            <li class="record-item">{{ $t("record.record4") }}</li>
            <li class="record-item">{{ $t("record.record5") }}</li>
            <li class="record-item">{{ $t("record.record6") }}</li>
          </ul>

          <ul class="record-list" v-for="(item,index) in sbookList" :key="index">
            <li class="record-item">
              <router-link :to="{path:'/recordDetail', query:{hash:item.tHash}}">
                {{item.tHash}}
              </router-link>
              <span class="record-item-img"><img src="../../assets/node-line.png" alt=""></span>
              <button 
                  v-clipboard:copy="item.tHash"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  class="copy">{{ $t("bulletin.bulletin10") }}</button>
            </li>
            <li class="record-item">{{[item.bsType,$i18n.locale]|sbookTypeToName}}
              <span class="record-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>


            <li v-if="item.bsType==1&&$i18n.locale=='zh'" class="record-item">用户{{item.account|splitHash}}资料更新
              <span class="record-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li v-if="item.bsType==2&&$i18n.locale=='zh'" class="record-item">用户{{item.account|splitHash}}与{{item.toAccount|splitHash}}发生交易
              <span class="record-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>

            <li v-if="item.bsType==1&&$i18n.locale=='en'"  class="record-item">User <span style="color:blue">{{item.account|splitHash}}</span> upload info
              <span class="record-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li v-if="item.bsType==2&&$i18n.locale=='en'" class="record-item">User <span style="color:blue">{{item.account|splitHash}}</span> and <span style="color:blue">{{item.toAccount|splitHash}}</span>have a deal
              <span class="record-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>

            <li class="record-item">
                {{item.bHeight}}
                <span class="record-item-img"><img src="../../assets/node-line.png" alt=""></span>
            </li>
            <li class="record-item">{{[item.created,$i18n.locale]|getDateDiff}}</li>
          </ul>
        </div>
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
import NumberGrow from "../../components/common/numberChange";
import VueClipboard from "vue-clipboard2";
import Hooltip from "../../components/hint/tooltip.vue";
import Vue from "vue";
import VueResource from 'vue-resource'
Vue.use(VueResource)
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
      tooltip1: false,
      tooltip2: false,
      tooltip3: false,
      tooltip4: false,
      tooltip5: false,
      tooltip6: false,
      tooltip7: false,
      tooltip8: false,
      tooltip8: false,
      tooltip9: false,
      tooltip10: false,
      tooltip11: false,
      tooltip12: false,
      tooltip13: false,
      tooltip14: false,
      tooltip15: false,
      tooltip16: false,
      tooltip17: false,
      tooltip18: false,
      tooltip19: false,
      tooltip20: false,
      tooltip21: false,
      timerCountId: null,
      timerListId: null,
      showMore: false,
      bhash: null,
      bTime: null,
      bHeight: 0,
      nodeCount: 0,
      sumUserCount: 0,
      sumAssetCount: 0,
      sumSbookCount: 0,
      histConcurrentCount: 0,

      assetlist: [],
      sbookList: [],
      nodeList_a:[],
      nodeList_b:[],

      numLength: false,
      isNumberRunFirst:false,
      isNumberRunSecond:false,
      isNumberRunThree:false,
      isNumberRunFour:false,
      isNumberRunFive:false,
    };
  },
  filters: {
    splitHash(val) {
      let temp = String(val);
      temp = temp.substring(0, 20) + "...";
      return temp;
    },
    transTypeToName([val,lang]){
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
    getDateDiff([dateTimeStamp,locale]) {
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
        if(locale=='en'){
          result = "" + parseInt(monthC) + "month ago";
        }
      } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
        if(locale=='en'){
          result = "" + parseInt(weekC) + "weeks ago";
        }        
      } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
        if(locale=='en'){
          result = "" + parseInt(dayC) + "days ago";
        }        
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
        if(locale=='en'){
          result = "" + parseInt(hourC) + "hours ago";
        }        
      } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
        if(locale=='en'){
          result = "" + parseInt(minC) + "mins ago";
        }         
      } else {
        result = "刚刚";
        if(locale=='en'){
          result = "moment";
        }         
      }
      return result;
    }
  },
  watch:{
    //当区块高度有变化时跳动数字
    bHeight(){
      this.numberChange();
    },
    getLang(val){
      this.loadNodes()
    },
    sumUserCount(){
      this.AccountNumber();
    },
    histConcurrentCount(){
      this.AccountNumber2();
    },
    sumAssetCount(){
      this.AccountNumber3();
    },
    sumSbookCount(){
      this.AccountNumber4();
    },
  },
  methods: {
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
    //统计汇总数据
    countInit() {
      this.axios.post(`${this.api.baseURL}/home/sumCount`).then(res => {
        if (res.data.success) {
          if (res.data.data.lastBlock.bHeight) {
            this.bHeight = res.data.data.lastBlock.bHeight;
            let heightStr = String(this.bHeight);
            this.numberLength = heightStr.length; 
            if (heightStr.length >= 7) {
              this.numLength = true;
            }
          }
          this.bhash = res.data.data.lastBlock.bHash;
          this.bTime = res.data.data.lastBlock.bTime;
          this.nodeCount = res.data.data.nodeCount;
          this.sumUserCount = res.data.data.sumUserCount;
          this.sumAssetCount = res.data.data.sumAssetCount;
          this.sumSbookCount = res.data.data.sumSbookCount;
          this.histConcurrentCount = res.data.data.histConcurrentCount;

          if(!this.isNumberRunFirst){
            this.isNumberRunFirst = !this.isNumberRunFirst
            this.blockHeight();
          }
          if(!this.isNumberRunSecond){
            this.isNumberRunSecond = !this.isNumberRunSecond
            this.AccountHeight();
          }
          if(!this.isNumberRunThree){
            this.isNumberRunThree = !this.isNumberRunThree
            this.AccountHeight2();
          }
          if(!this.isNumberRunFour){
            this.isNumberRunFour = !this.isNumberRunFour
            this.AccountHeight3();
          }
          if(!this.isNumberRunFive){
            this.isNumberRunFive = !this.isNumberRunFive
            this.AccountHeight4();
          }

        } else {
          if (this.timerCountId) {
            window.clearInterval(this.timerCountId);
          }
        }
      });
    },
    //最近资产交易
    initAssetList() {
      let p = {
        pageSize: "10",
        pageNo: "1"
      };
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/assetTask`, p)
        .then(res => {
          if (res.data.success) {
            this.assetlist = res.data.data.list.records;
          } else {
          }
        });
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
    },
    $(dom) {
      return document.querySelectorAll(dom);
    },
    blockHeight() {
      var tpl =
       `<div class="box">
            <div class="num-dom" data-num="0">
                <span class="num-span">0</span>
                <span class="num-span">1</span>
                <span class="num-span">2</span>
                <span class="num-span">3</span>
                <span class="num-span">4</span>
                <span class="num-span">5</span>
                <span class="num-span">6</span>
                <span class="num-span">7</span>
                <span class="num-span">8</span>
                <span class="num-span">9</span>
                <span class="num-span">.</span>
            </div>
        </div>`;
 
      var domArr = [];

      var num = String(this.bHeight);
      var len = num.length;
      len = Number(len)
      var i = len;
      while (i > 0) {
        domArr[i] = tpl;
        i--;
      }

      this.$(".wrap")[0].innerHTML = domArr.join("");
      this.$(".box").forEach((val, idx) => {
        this.$(".num-dom")[len-1 - idx].style.transform = "translateY(" + -60 * num[idx] + "px)";
      });
    },
    numberChange(){
        var num = String(this.bHeight);
        let len = num.length
        len = Number(len)
        var num1 = num.split("").reverse().join("");
        this.$(".box").forEach((val, idx) => {
          this.$(".num-dom")[len-1 - idx].style.transform = "translateY(" + -60 * num1[idx] + "px)";
        });
    },

    AccountHeight() {
     var tpl =
       `<div class="anbox">
            <div class="num-dom1" data-num="0">
                <span class="num-span">0</span>
                <span class="num-span">1</span>
                <span class="num-span">2</span>
                <span class="num-span">3</span>
                <span class="num-span">4</span>
                <span class="num-span">5</span>
                <span class="num-span">6</span>
                <span class="num-span">7</span>
                <span class="num-span">8</span>
                <span class="num-span">9</span>
                <span class="num-span">.</span>
            </div>
        </div>`;
 
      var domArr = [];

      var num = String(this.sumUserCount);
      var len = num.length;
      var i = len;
      while (i > 0) {
        domArr[i] = tpl;
        i--;
      }

      this.$(".Block-account-number")[0].innerHTML = domArr.join("");
      this.$(".anbox").forEach((val, idx) => {
        this.$(".num-dom1")[len-1 - idx].style.transform = "translateY(" + -70 * num[idx] + "px)";
      });
    },
    AccountNumber(){
      var num = String(this.sumUserCount);
        let len = num.length
        var num1 = num.split("").reverse().join("");
        this.$(".anbox").forEach((val, idx) => {
          this.$(".num-dom1")[len-1 - idx].style.transform = "translateY(" + -70 * num1[idx] + "px)";
        });
    },

    AccountHeight2() {
     var tpl =
       `<div class="anbox2">
            <div class="num-dom2" data-num="0">
                <span class="num-span">0</span>
                <span class="num-span">1</span>
                <span class="num-span">2</span>
                <span class="num-span">3</span>
                <span class="num-span">4</span>
                <span class="num-span">5</span>
                <span class="num-span">6</span>
                <span class="num-span">7</span>
                <span class="num-span">8</span>
                <span class="num-span">9</span>
                <span class="num-span">.</span>
            </div>
        </div>`;
 
      var domArr = [];

      var num = String(this.histConcurrentCount);
      var len = num.length;
      var i = len;
      while (i > 0) {
        domArr[i] = tpl;
        i--;
      }

      this.$(".Block-account-number2")[0].innerHTML = domArr.join("");
      this.$(".anbox2").forEach((val, idx) => {
        this.$(".num-dom2")[len-1 - idx].style.transform = "translateY(" + -70 * num[idx] + "px)";
      });
    },
    AccountNumber2(){
      var num = String(this.histConcurrentCount);
        let len = num.length
        var num1 = num.split("").reverse().join("");
        this.$(".anbox2").forEach((val, idx) => {
          this.$(".num-dom2")[len-1 - idx].style.transform = "translateY(" + -70 * num1[idx] + "px)";
        });
    },

    AccountHeight3() {
     var tpl =
       `<div class="anbox3">
            <div class="num-dom3" data-num="0">
                <span class="num-span">0</span>
                <span class="num-span">1</span>
                <span class="num-span">2</span>
                <span class="num-span">3</span>
                <span class="num-span">4</span>
                <span class="num-span">5</span>
                <span class="num-span">6</span>
                <span class="num-span">7</span>
                <span class="num-span">8</span>
                <span class="num-span">9</span>
                <span class="num-span">.</span>
            </div>
        </div>`;
 
      var domArr = [];

      var num = String(this.sumAssetCount);
      var len = num.length;
      var i = len;
      while (i > 0) {
        domArr[i] = tpl;
        i--;
      }

      this.$(".Block-account-number3")[0].innerHTML = domArr.join("");
      this.$(".anbox3").forEach((val, idx) => {
        this.$(".num-dom3")[len-1 - idx].style.transform = "translateY(" + -70 * num[idx] + "px)";
      });
    },
    AccountNumber3(){
      var num = String(this.sumAssetCount);
        let len = num.length
        var num1 = num.split("").reverse().join("");
        this.$(".anbox3").forEach((val, idx) => {
          this.$(".num-dom3")[len-1 - idx].style.transform = "translateY(" + -70 * num1[idx] + "px)";
        });
    },

    AccountHeight4() {
     var tpl =
       `<div class="anbox4">
            <div class="num-dom4" data-num="0">
                <span class="num-span">0</span>
                <span class="num-span">1</span>
                <span class="num-span">2</span>
                <span class="num-span">3</span>
                <span class="num-span">4</span>
                <span class="num-span">5</span>
                <span class="num-span">6</span>
                <span class="num-span">7</span>
                <span class="num-span">8</span>
                <span class="num-span">9</span>
                <span class="num-span">.</span>
            </div>
        </div>`;
 
      var domArr = [];

      var num = String(this.sumSbookCount);
      var len = num.length;
      var i = len;
      while (i > 0) {
        domArr[i] = tpl;
        i--;
      }

      this.$(".Block-account-number4")[0].innerHTML = domArr.join("");
      this.$(".anbox4").forEach((val, idx) => {
        this.$(".num-dom4")[len-1 - idx].style.transform = "translateY(" + -70 * num[idx] + "px)";
      });
    },
    AccountNumber4(){
      var num = String(this.sumSbookCount);
        let len = num.length
        var num1 = num.split("").reverse().join("");
        this.$(".anbox4").forEach((val, idx) => {
          this.$(".num-dom4")[len-1 - idx].style.transform = "translateY(" + -70 * num1[idx] + "px)";
        });
    },

    //加载节点数据
    loadNodes(){
      let nodeName='node_zh.json'
      if(this.$i18n.locale=='en'){
        nodeName = 'node_en.json'
      }
      this.$http.get('static/data/'+nodeName).then(res => {
          // console.log(res.body)//此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
          let nodeList = res.body
          this.nodeList_a = []
          this.nodeList_b = []
          for(let i=0;i<5;i++){
            this.nodeList_a.push(nodeList[i])
          }
          for(let i=5;i<nodeList.length;i++){
            this.nodeList_b.push(nodeList[i])
          }
      })
    }
  },
  created() {
    this.loadNodes();
    this.countInit();
    this.timerCountId = window.setInterval(this.countInit, 5000);

    this.initAssetList();
    this.initSbookList();
    let _this = this;
    this.timerListId = window.setInterval(function() {
      _this.initAssetList();
      _this.initSbookList();
    }, 10000);
  },
  destroyed() {
    if (this.timerListId) {
      window.clearInterval(this.timerListId);
    }

    if (this.timerCountId) {
      window.clearInterval(this.timerCountId);
    }
  },
  computed: {
    getLang() {
      return this.$i18n.locale
    }
  },
  components: {
    Header,
    Footer,
    Hooltip,
    NumberGrow
  }
};
</script>
<style lang="less">
.blockIndex {
  margin-top: 70px;
  width: 100%;
  height: 100%;

  .top-banner {
    position: relative;
    width: 100%;
    height: 664px;
    background: url("../../assets/banner-02.png") no-repeat;
    background-size: 100% 100%;

    .banner-box {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      width: 1200px;
      height: 465px;

      .Block-height {
        position: absolute;
        top: 0;
        left: 0;
        width: 573px;
        height: 184px;
        display: flex;
        justify-content: space-between;
        background: url("../../assets/top-banner-02.png") no-repeat;

        .Block-number {
          position: relative;
          width: 373px;
          color: #fff;

          .Block-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;

            .number {
              height: 60px;
              font-size: 64px;
              text-align: center;

              .wrap {
                .box {
                  font-size: 60px;
                  font-weight: bold;
                  height: 60px;
                  width: 35px;
                  margin: 0 auto;
                  overflow: hidden;
                  display: inline-block;
                  color: #ffaf00;

                  .num-dom {
                    transition: 2s;

                    .num-span {
                      display: block;
                      line-height: 60px;
                      height: 60px;
                      width: 20px;
                    }
                  }
                }
              }

              .numActive {
                font-size: 50px !important;
              }
            }

            .Block-txt {
              margin-top: 20px;
              font-size: 18px;
              text-align: center;
            }
          }
        }

        .Block-img {
          position: relative;
          width: 240px;

          > img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      .Block-group {
        position: absolute;
        bottom: 44px;
        left: 0;
        width: 573px;
        height: 150px;

        .Block-account {
          position: absolute;
          top: 0;
          left: 0;
          padding: 0 15px;
          width: 280px;
          height: 70px;
          line-height: 70px;
          color: #fff;
          display: flex;
          justify-content: space-between;
          background: url("../../assets/top-banner-01.png") no-repeat;

          .Block-account-name {
            flex: 1;
            font-size: 16px;
          }

          .Block-account-number {
            flex: 1;
            font-size: 30px;
            text-align: center;

            .anbox {
              font-weight: bold;
              height: 70px;
              width: 20px;
              margin: 0 auto;
              overflow: hidden;
              display: inline-block;
              color: #fff;

              .num-dom1 {
                transition: 2s;

                .num-span {
                  display: block;
                  line-height: 70px;
                  height: 70px;
                  width: 20px;
                }
              }
            }
          }
        }

        .Block-history {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 15px;
          width: 280px;
          height: 70px;
          line-height: 70px;
          color: #fff;
          display: flex;
          justify-content: space-between;
          background: url("../../assets/top-banner-01.png") no-repeat;

          .Block-account-name {
            flex: 1;
            font-size: 16px;
          }

          .Block-account-number2 {
            flex: 1;
            font-size: 30px;
            text-align: center;

            .anbox2 {
              font-weight: bold;
              height: 70px;
              width: 20px;
              margin: 0 auto;
              overflow: hidden;
              display: inline-block;
              color: #fff;

              .num-dom2 {
                transition: 2s;

                .num-span {
                  display: block;
                  line-height: 70px;
                  height: 70px;
                  width: 20px;
                }
              }
            }
          }
        }

        .Block-property {
          position: absolute;
          top: 80px;
          left: 0;
          padding: 0 15px;
          width: 280px;
          height: 70px;
          line-height: 70px;
          color: #fff;
          display: flex;
          justify-content: space-between;
          background: url("../../assets/top-banner-01.png") no-repeat;

          .Block-account-name {
            flex: 1;
            font-size: 16px;
          }

          .Block-account-number3 {
            flex: 1;
            font-size: 30px;
            text-align: center;

            .anbox3 {
              font-weight: bold;
              height: 70px;
              width: 20px;
              margin: 0 auto;
              overflow: hidden;
              display: inline-block;
              color: #fff;

              .num-dom3 {
                transition: 2s;

                .num-span {
                  display: block;
                  line-height: 70px;
                  height: 70px;
                  width: 20px;
                }
              }
            }
          }
        }

        .Block-share {
          position: absolute;
          top: 80px;
          right: 0;
          padding: 0 15px;
          width: 280px;
          height: 70px;
          line-height: 70px;
          color: #fff;
          display: flex;
          justify-content: space-between;
          background: url("../../assets/top-banner-01.png") no-repeat;

          .Block-account-name {
            flex: 1;
            font-size: 16px;
          }

          .Block-account-number4 {
            flex: 1;
            font-size: 30px;
            text-align: center;

            .anbox4 {
              font-weight: bold;
              height: 70px;
              width: 20px;
              margin: 0 auto;
              overflow: hidden;
              display: inline-block;
              color: #fff;

              .num-dom4 {
                transition: 2s;

                .num-span {
                  display: block;
                  line-height: 70px;
                  height: 70px;
                  width: 20px;
                }
              }
            }
          }
        }
      }

      .map {
        position: absolute;
        top: 0;
        right: 137px;
        width: 420px;
        height: 404px;
        background: url("../../assets/top-banner-03.png") no-repeat;
        background-size: 100% 100%;

        .radius {
          position: absolute;
          top: 49px;
          left: 130px;
          width: 10px;
          height: 10px;
          margin: 0 auto;
          border-radius: 50%;
          text-align: center;
          color: #fff;
          background-color: #ffc000;
          cursor: pointer;

          .tooltip {
            position: absolute;
            top: -88px;
            right: -185px;
            width: 190px;
            height: 90px;
            z-index: 9999;

            > img {
              width: 100%;
            }
          }

          &:nth-child(2) {
            top: 70px;
            left: 97px;
          }

          &:nth-child(3) {
            top: 100px;
            left: 143px;
          }

          &:nth-child(4) {
            top: 103px;
            left: 100px;
          }

          &:nth-child(5) {
            top: 150px;
            left: 42px;
          }

          &:nth-child(6) {
            top: 152px;
            left: 151px;
          }

          &:nth-child(7) {
            top: 192px;
            left: 123px;
          }

          &:nth-child(8) {
            top: 211px;
            left: 20px;
          }

          &:nth-child(9) {
            top: 215px;
            left: 82px;
          }

          &:nth-child(10) {
            top: 244px;
            left: 64px;
          }

          &:nth-child(11) {
            top: 240px;
            left: 155px;
          }

          &:nth-child(12) {
            top: 290px;
            left: 73px;
          }

          &:nth-child(13) {
            top: 138px;
            left: 204px;
          }

          &:nth-child(14) {
            top: 40px;
            left: 262px;
          }

          &:nth-child(15) {
            top: 66px;
            left: 206px;
          }

          &:nth-child(16) {
            top: 240px;
            left: 100px;
          }

          &:nth-child(17) {
            top: 60px;
            left: 308px;
          }

          &:nth-child(18) {
            top: 92px;
            left: 342px;
          }

          &:nth-child(19) {
            top: 156px;
            left: 330px;
          }

          &:nth-child(20) {
            top: 248px;
            left: 330px;
          }

          &:nth-child(21) {
            top: 310px;
            left: 270px;
          }

          .animate-radius {
            width: 10px;
            height: 10px;
            position: absolute;
            left: 0;
            border-radius: 50%;
            background-color: #ffc000;
            animation: radius 1.5s ease-out infinite forwards;
            -webkit-animation: radius 1.5s ease-out infinite forwards;
            -moz-animation: radius 1.5s ease-out infinite forwards;
            -ms-animation: radius 1.5s ease-out infinite forwards;
          }
        }
      }

      .node-number {
        position: absolute;
        top: 0;
        right: 0;
        width: 140px;
        height: 140px;

        .activation {
          margin-bottom: 20px;
          width: 100%;
          height: 23px;

          .activation-img {
            float: left;
          }
          .activation-text {
            float: left;
            padding-left: 10px;
            font-size: 14px;
            color: #fff;
          }
        }
      }
    }

    .banner-bottom-box {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      width: 1200px;
      height: 101px;

      .Block-node {
        position: absolute;
        top: 0;
        left: 0;
        width: 130px;
        height: 101px;
        font-size: 58px;
        line-height: 101px;
        text-align: center;
        color: #fff;
        background: url("../../assets/top-banner-04.png") no-repeat;
        background-size: 100% 100%;
      }

      .Block-swiper {
        position: absolute;
        top: 0;
        left: 140px;
        width: 1060px;
        height: 100px;
        // background: url("../../assets/top-banner-05.png") no-repeat;
        // background-size: 100% 100%;
        overflow: hidden;

        > p {
          font-size: 16px;
          color: #6ffaff;
        }

        .marquee {
          position: absolute;
          bottom: 2px;
          left: 3px;
          // width: 2760px;
          width: 5520px;
          height: 72px;
          border: 2px solid #55acef;
          animation: marquee 30s linear infinite;
          // overflow: hidden;

          .img {
            float: left;
            margin-right: 10px;
            width: 120px;
            height: 68px;

            > img {
              width: 100%;
              height: 100%;
            }
          }
        }
        @keyframes marquee {
          0% {
            // transform: translateX(0%);
            left: 0;
          }
          100% {
            // transform: translateX(-100%);
            left: -2730px;
          }
        }
      }
    }
  }

  .node-inquire {
    padding-top: 96px;
    padding-bottom: 96px;
    width: 100%;

    .w {
      padding: 0;

      .none-title {
        position: relative;
        font-size: 34px;
        text-align: center;
        color: #0984e3;

        &::after {
          content: " ";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background-color: #0984e3;
        }
      }

      .node-group {
        margin-top: 42px;
        margin-bottom: 42px;
        width: 100%;

        .node-tit-list {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .node-item {
            flex: 1;
            padding: 0 15px;
            height: 53px;
            line-height: 53px;
            text-align: center;
            font-size: 18px;
            background-color: #000;
            color: #fff;

            &:nth-child(5) {
              padding: 0 30px;
            }


          }
        }

        .node-list {
          width: 100%;
          display: flex;
          justify-content: space-between;
          background-color: #f3f3f3;
          color: #000;

          &:nth-child(2n-1) {
            background-color: #fff;

            .node-item-img {
              display: none;
            }
          }

          &:hover {
            background-color: #0984e3;
            color: #fff;

            .node-item {
              &:nth-child(5) {
                .node-item-img {
                  display: none;
                }
              }
            }


          }

          .node-item {
            position: relative;
            padding: 0 15px;
            flex: 1;
            height: 53px;
            line-height: 53px;
            text-align: center;
            font-size: 14px;
            text-overflow: ellipsis;
            overflow: hidden;
            // cursor: pointer;

            .node-item-img {
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);

              > img {
                width: 100%;
              }


            }
            > a {
              color: #0984e3;
              cursor: pointer;
            }

            &:nth-child(5) {
              padding: 0 30px;
            }

            &:hover {
              &:nth-child(5) {
                .copy {
                  display: block;
                }
              }
              > a {
                color: #fff;
                cursor: pointer;
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

      .node-mroe {
        margin: auto;
        width: 60px;
        font-size: 18px;
        text-align: center;
        cursor: pointer;

        &:hover {
          font-weight: bold;
        }

        > img {
          margin: auto;
          width: 38px;
          height: 36px;
          // animation: start 1.5s infinite ease-in-out;
        }
      }
    }
  }

  .new-deal {
    padding-bottom: 96px;
    width: 100%;

    .w {
      padding: 0;

      .deal-title {
        position: relative;
        font-size: 34px;
        text-align: center;
        color: #0984e3;

        &::after {
          content: " ";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background-color: #0984e3;
        }

        .watchAll {
          position: absolute;
          bottom: -20px;
          right: 0;
          font-size: 24px;
          cursor: pointer;

          > a {
            color: #000;

            &:hover {
              color: #0984e3;
            }
          }
        }
      }

      .deal-group {
        margin-top: 42px;
        margin-bottom: 42px;
        width: 100%;

        .deal-tit-list {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .deal-item {
            padding: 0 15px;
            flex: 1;
            height: 53px;
            line-height: 53px;
            text-align: center;
            font-size: 18px;
            background-color: #000;
            color: #fff;
            > a {
              color: #0984e3;
            }

            &:nth-child(1) {
              padding: 0 30px;
            }
            &:nth-child(3) {
              padding: 0 30px;
            }
            &:nth-child(4) {
              padding: 0 30px;
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

          &:hover {
            background-color: #0984e3;
            color: #fff;

            .deal-item {
              > a {
                color: #fff;
              }

              &:nth-child(1) {
                .deal-item-img {
                  display: none;
                }
              }

              &:nth-child(3) {
                .deal-item-img {
                  display: none;
                }
              }

              &:nth-child(4) {
                .deal-item-img {
                  display: none;
                }
              }
            }
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

            .deal-item-img {
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);

              > img {
                width: 100%;
              }
            }

            &:nth-child(1) {
              padding: 0 30px;
              cursor: pointer;
            }
            &:nth-child(3) {
              padding: 0 30px;
              // cursor: pointer;
            }
            &:nth-child(4) {
              padding: 0 30px;
              // cursor: pointer;
            }

            &:hover {
              &:nth-child(1) {
                .copy {
                  display: block;
                }
              }

              &:nth-child(3) {
                .copy {
                  display: block;
                }
              }

              &:nth-child(4) {
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

  .new-record {
    padding-bottom: 96px;
    width: 100%;

    .w {
      padding: 0;

      .record-title {
        position: relative;
        font-size: 34px;
        text-align: center;
        color: #0984e3;

        &::after {
          content: " ";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background-color: #0984e3;
        }

        .watchAll {
          position: absolute;
          bottom: -20px;
          right: 0;
          font-size: 24px;
          cursor: pointer;

          > a {
            color: #000;

            &:hover {
              color: #0984e3;
            }
          }
        }
      }

      .record-group {
        margin-top: 42px;
        margin-bottom: 42px;
        width: 100%;

        .record-tit-list {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .record-item {
            // flex: 1;
            height: 53px;
            line-height: 53px;
            text-align: center;
            font-size: 18px;
            background-color: #000;
            color: #fff;

            &:nth-child(1) {
              width: 25%;
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
              width: 10%;
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

          &:hover {
            background-color: #0984e3;
            color: #fff;

            .record-item {
              > a {
                color: #fff;
              }
              &:nth-child(1) {
                .record-item-img {
                  display: none;
                }
              }
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
              width: 25%;
              text-overflow: ellipsis;
              overflow: hidden;
              cursor: pointer;
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
              width: 10%;
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

@keyframes radius {
  0% {
    transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    opacity: 0.8;
  }
  50% {
    transform: scale(2, 2);
    -webkit-transform: scale(2, 2);
    -moz-transform: scale(2, 2);
    -ms-transform: scale(2, 2);
    opacity: 0.5;
  }
  100% {
    transform: scale(3, 3);
    -webkit-transform: scale(3, 3);
    -moz-transform: scale(3, 3);
    -ms-transform: scale(3, 3);
    opacity: 0.1;
  }
}

// @keyframes start {
//   0%, 30% {
//     opacity: 0;
//     transform: translateY(0px);
//   }
//   60% {
//     opacity: 1;
//     transform: translate(-20);
//   }
//   100% {
//     opacity: 0;
//     transform: translateY(-36px);
//   }
// }
</style>
