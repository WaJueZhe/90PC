<template>
  <div class="numberAsset-page">
    <div class="consent">
      <div v-if="list.length>0" @click="doAllApply('1')" class="all-consent">{{ $t("receiveApply.receiveApply8") }}</div>
      <div v-if="list.length>0" @click="doAllApply('-1')" class="all-reject">{{ $t("receiveApply.receiveApply9") }}</div>
    </div>
    <div class="numberAsset">

      <div v-for="(item,index) in list" :key="index" class="numberAsset-item">
        <div class="item-msg">
          <div class="apply-name">{{ $t("receiveApply.receiveApply10") }}</div>
          <div class="apply-text">{{item.applicant}}</div>
        </div>
        <div class="item-msg">
          <div class="apply-name">{{ $t("receiveApply.receiveApply11") }}</div>
          <router-link class="apply-text" style="color: #10ade4;" v-if="item.type==1" :to="{path:'transDetail/', query:{hash:item.tHash}}">
            {{item.tHash}}
          </router-link>
          <router-link class="apply-text" style="color: #10ade4;" v-if="item.type==2" :to="{path:'recordDetail/', query:{hash:item.tHash}}">
            {{item.tHash}}
          </router-link>          
        </div>
        <div class="item-msg">
          <div class="apply-name">{{ $t("receiveApply.receiveApply12") }}</div>
          <div class="apply-text">{{item.created}}</div>
          <div v-if="!item.applyResult" class="apply-btn">
            <div @click="doApply(item.id,'1')" class="agree">{{ $t("receiveApply.receiveApply13") }}</div>
            <div @click="doApply(item.id,'-1')" class="refuse">{{ $t("receiveApply.receiveApply14") }}</div>
          </div>

          <div v-if="item.applyResult" class="apply-btn">
            <span style="color:green;padding-right:20px;" v-if="item.applyResult=='1'">{{ $t("receiveApply.receiveApply15") }}</span>
            <span style="color:red;padding-right:20px;" v-if="item.applyResult=='-1'">{{ $t("receiveApply.receiveApply16") }}</span>
            <span style="color:#8B4726;padding-right:20px;" v-if="item.applyResult=='99'">{{ $t("receiveApply.receiveApply17") }}</span>
          </div>

        </div>

        <div v-if="item.applyResult&&item.applyResult!='99'" class="item-msg">
          <div class="apply-name">{{ $t("receiveApply.receiveApply18") }}</div>
          <div class="apply-text">{{item.acceptor}}</div>
        </div>
        <div v-if="item.applyResult&&item.applyResult!='99'" class="item-msg">
          <div class="apply-name">{{ $t("receiveApply.receiveApply19") }}</div>
          <div class="apply-text">{{item.feedbackTime}}</div>
        </div>

      </div>

    </div>



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
  data () {
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
  methods: {
    abolish(){
      this.hooltip.isShow = false
      this.$emit('confirm');
    },
    confirm(){
      this.hooltip.isShow = false
      this.$emit('confirm');
    },  
    doApply(id,result){
      let p={
        id:id,
        checkResult:result
      }
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/checkApply`,p)
        .then(res => {        
        if (res.data.success) {
            this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'提示',
              tipContent:'申请处理成功'
            }
        } else {
            this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'提示',
              tipContent:res.data.message
            }
        }
      });
    },
    doAllApply(result){
      let p={
        type:this.list[0].type,
        checkResult:result
      }
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/checkApplyAll`,p)
        .then(res => {
          console.log(res)
        if (res.data.success) {
            this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'提示',
              tipContent:'申请处理成功'
            }          
        } else {
            this.hooltip={
              isShow:true,
              cancel:'',
              ensure:'确定',
              tipTitle:'提示',
              tipContent:res.data.message
            }
        }
      });      
    }

  },
  components: {
    Hooltip
  }
}
</script>
<style lang="less">
.numberAsset-page {
  width: 100%;
  height: 100%;

  .consent {
    padding: 10px 30px;
    width: 100%;
    color: #10ade4;

    .all-consent {
      display: inline-block;
      cursor: pointer;
    }

    .all-reject {
      display: inline-block;
      padding-left: 30px;
      cursor: pointer;
    }
  }

  .numberAsset {
    padding: 0 15px;
   

    .numberAsset-item {
      padding: 0 10px;
      margin-bottom: 10px;
      width: 100%;
      // height: 100px;
      background-color: #ccc;
       border-radius: 5px;

      .item-msg {
        width: 100%;
        height: 30px;
        line-height: 30px;

        &:nth-child(3) {
          .apply-text {
            display: inline-block;
            width: 35%;    
          }

          .apply-btn {
              float: right;

              .agree {
                display: inline-block;
                width: 60px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 14px;
                background-color: #10ade4;
                color: #fff;
                border-radius: 6px;
                cursor: pointer;
              }
              .refuse {
                display: inline-block;
                margin-left: 20px;
                width: 60px;
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

        .apply-name {
          display: inline-block;
          width: 12%;
        }

        .apply-text {
          display: inline-block;
          width: 85%;
        }
      }
    }
  }
}
</style>
