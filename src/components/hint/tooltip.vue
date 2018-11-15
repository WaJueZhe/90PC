<template>
  <div class="tooltip-page">
    <div class="tooltip">
      <h6>{{tipTitle}}</h6>
      <p>{{tipContent}}</p>
      <div class="btn">
        <div class="cancel" v-show="cancel != ''" @click="abolish">{{cancel}}</div>
        <div class="confirm" @click="confirm">{{ensure}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tipTitle','tipContent','cancel','ensure'],
  data () {
    return {
    }
  },
  methods: {
    confirm(){
      this.$emit('confirm');
    },
    abolish(){
      this.$emit('abolish');
    }
  }
}
</script>
<style lang="less">
.tooltip-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.3);
  z-index: 99999;

  .tooltip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 40px 20px;
    width: 380px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 20px 4px #999;

    h6 {
      font-size: 24px;
      font-weight: normal;
      text-align: center;
    }

    p {
      padding-top: 20px;
      font-size: 18px;
      text-align: center;
      color: #747474;
    }

    .btn {
      margin-top: 30px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;

      > div {
        flex: 1;
        background-color: #0984e3;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;

        &:first-child {
          margin-right: 10px;
          background-color: #fff;
          color: #0984e3;
          border: 1px solid #0984e3;
        }
      }
    }
  }
}
</style>
