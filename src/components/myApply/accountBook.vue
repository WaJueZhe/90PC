<template>
  <div class="accountBook-page">
    <ul class="group">
      <li class="group-item" v-for="(item, index) in list" :key="index">
        <div class="haxi">[{{[item.bsType,$i18n.locale]|sbookTypeToName}}]<router-link :to="{path:'/recordDetail', query:{hash:item.tHash}}">{{item.tHash}}</router-link></div>
        <div class="ztai" v-if="!item.applyResult">{{ $t("myApplyFor.myApplyFor8") }}</div>
        <div class="ztai" style="color:green" v-if="item.applyResult=='1'">{{ $t("myApplyFor.myApplyFor9") }}</div>
        <div class="ztai" style="color:red" v-if="item.applyResult=='-1'">{{ $t("myApplyFor.myApplyFor10") }}</div>
        <div class="ztai" style="color:#8B4726" v-if="item.applyResult=='99'">{{ $t("myApplyFor.myApplyFor11") }}</div>
        <div style="margin-top: 20px;">{{ $t("myApplyFor.myApplyFor12") }}{{item.created}}</div>
        <div v-if="!item.applyResult" class="btn">
            <div @click="cancelApply(item.id)" class="refuse">{{ $t("myApplyFor.myApplyFor13") }}</div>
        </div>
      </li>
    </ul>

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
import Hooltip from '../hint/tooltip.vue';
export default {
  props: ["list"],
  data() {
    return {
      hooltip:{
        isShow:false,
        cancel:'',
        ensure:'确定',
        tipTitle:'提示',
        tipContent:'成功'
      }
    };
  },
  filters: {
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
    }
  },
  methods:{

    abolish(){
      this.hooltip.isShow = false
      this.$emit('confirm');
    },
    confirm(){
      this.hooltip.isShow = false
      this.$emit('confirm');
    },  

    cancelApply(id){
      let p={
        id:id
      }

      this.axios
        .post(`${this.api.baseURL}/bsCheckApply/cancelCheckApply`, p)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'提示',
              tipContent:'申请已成功取消'
            }
          }
        });

    }
  },
  components: {
    Hooltip
  }
};
</script>
<style lang="less">
.accountBook-page {
  width: 100%;
  height: 100%;

  .group{
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;

    .group-item{
      margin-bottom: 20px;
      padding: 10px 10px;
      width: 100%;
      background-color:#ccc;
      border-radius: 10px;


      .haxi{
        font-weight: bold;
        width: 70%;
        float: left;

        >a{
          color: #10ade4;
        }
      }
      .ztai{
        width: 30%;
        float: right;
        padding-right: 60px;
        text-align: right;
      }

      .btn{
        width: 100%;
        margin-top: 10px;
        .refuse {
          display: inline-block;
          width: 80px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 14px;
          background-color: #10ade4;
          color: #fff;
          border-radius: 6px;
          cursor: pointer;
        }
      }

    }

  }
}
</style>

