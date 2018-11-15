<template>
  <div class="personalHome">
    <Header></Header>
    <div class="w">
      <!-- <div class="left">
        <ul>
          <li class="left-item" :class="{ active:activeIndex == 1 }" @click="togole(1)">
            <i class="iconfont icon-daohangshouye"></i>
            <span>首页</span>
          </li>
          <li class="left-item">
            <div class="deal">
              <span>账户</span>
            </div>
          </li>
          <li class="left-item" :class="{ active:activeIndex == 2 }" @click="togole(2)">
            <i class="iconfont icon-youhuiquan01"></i>
            <span>零购券账户</span>
          </li>
          <li class="left-item" :class="{ active:activeIndex == 3 }" @click="togole(3)">
            <i class="iconfont icon-youhuiquan01"></i>
            <span>久零券账户</span>
          </li>
          <li class="left-item" :class="{ active:activeIndex == 4 }" @click="togole(4)">
            <i class="iconfont icon-youhuiquan01"></i>
            <span>购物券账户</span>
          </li>
          <li class="left-item">
            <div class="deal">
              <span>操作</span>
            </div>
          </li>
          <li class="left-item" :class="{ active:activeIndex == 5 }" @click="togole(5)">
            <i class="iconfont icon-084tuichu"></i>
            <span>退出</span>
          </li>
        </ul>
      </div> -->
      <LeftNav></LeftNav>
      <!-- <div class="right">
        <Personal v-if="activeIndex == 1"></Personal>
        <TradingRecord v-if="activeIndex == 2"></TradingRecord>
        <Ticket v-if="activeIndex == 3"></Ticket>
        <Shopping v-if="activeIndex == 4"></Shopping>
      </div> -->
      
    </div>
  </div>
</template>
<script>
import Header           from "../../components/header";
import LeftNav           from "../../components/left_nav";
import Personal         from "../../components/personalUser/personal";
import TradingRecord    from "../../components/personalUser/tradingRecord";
import Ticket           from "../../components/personalUser/ticket";
import Shopping         from "../../components/personalUser/shopping";
export default {
  data () {
    return {
      activeIndex:1
    }
  },
  methods: {
    logOut(){
        sessionStorage.removeItem("accessToken")
        this.$router.push({path: '/'})
    },
    togole(val){
      this.activeIndex = val;
      if(val==5){
        window.setTimeout(this.logOut,1000)
      }
    }
  },
  components: {
    Header,
    Personal,
    TradingRecord,
    Ticket,
    Shopping,
    LeftNav
  }
}
</script>
<style lang="less">
.personalHome {
  margin-top: 90px;
  width: 100%;

  .w {
    padding: 0;
    overflow: hidden;

    .right {
      width: 80%;
      height: 400px;
    }
  }
}
</style>
