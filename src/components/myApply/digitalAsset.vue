<template>
  <div class="DigitalAsset-page">

    <ul class="group">
      <li class="group-item" v-for="(item, index) in list" :key="index">
        <div class="haxi">[{{[item.asset_type,$i18n.locale]|assetTypeName}}]<router-link :to="{path:'/transDetail', query:{hash:item.tHash}}">{{item.tHash}}</router-link></div>
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
    }
  },
  filters:{
    assetTypeName([key,lang]){
      switch (key) {
        case '1':
          if(lang=='en'){
            return 'LG'
          }
          return '零购券'
          break;
        case '2':
          if(lang=='en'){
            return 'JL'
          }        
          return '久零券'
          break;  
        case '3':
          if(lang=='en'){
            return 'GW'
          }        
          return '购物券'
          break;          
          
        default:
          if(lang=='en'){
            return 'Unkonw'
          }        
          return '未知券种'
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
.DigitalAsset-page {
  width: 100%;

  .txdiv {
    width: 100%;
    box-shadow: 0 6px 20px 0 rgba(34, 59, 88, 0.1);
    border-radius: 10px;

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
        width: 70%;

        > a {
          cursor: pointer;
          color: #10ade4;
        }
      }

      .top-r {
        float: left;
        width: 30%;
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
        // color: #10ade4;
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
