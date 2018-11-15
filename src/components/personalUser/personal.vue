<template>
  <div class="personal">
    <div class="top-view">
      <div class="info">
        <div class="info-left">账户信息</div>
        <div class="info-right">
          <!-- <div class="f-20">Total Balance</div> -->
          <!-- <div class="f-20">
            <span>久零券</span>
            <span>¥0.00</span>
          </div> -->
        </div>
      </div>
    </div>
    <div class="message">
      <div class="message-l">
        <h5 class="h5">零购券</h5>
        <div class="money">
          <div class="number">
            <div>
              <p>余额</p>
              <p>{{LGQamount}}</p>
            </div>
          </div>
        </div>
        <div class="mes-bot">
          <div class="bot-item">
            <span>合计交易</span>
            <span>{{LGQSUMCOUNT.getCount+LGQSUMCOUNT.sendCount}}次</span>
          </div>
          <div class="bot-item">
            <span>交易量</span>
            <span>{{LGQSUMCOUNT.getTotal+LGQSUMCOUNT.sendTotal}}</span>
          </div>
          <div class="bot-item">
            <span>最近交易</span>
            <span>{{LGQLT.created}}</span>
            <span>{{LGQLT.dataTime}}</span>
          </div>
        </div>
      </div>
      <div class="message-l">
        <h5 class="h5">久零券</h5>
        <div class="money">
          <div class="number">
            <div>
              <p>余额</p>
              <p>{{JLQamount}}</p>
            </div>
          </div>
        </div>
        <div class="mes-bot">
          <div class="bot-item">
            <span>合计交易</span>
            <span>{{JLQSUMCOUNT.getCount+JLQSUMCOUNT.sendCount}}次</span>
          </div>
          <div class="bot-item">
            <span>交易量</span>
            <span>{{JLQSUMCOUNT.getTotal+JLQSUMCOUNT.sendTotal}}</span>
          </div>
          <div class="bot-item">
            <span>最近交易</span>
            <span>{{JLQLT.created}}</span>
            <span>{{JLQLT.dataTime}}</span>
          </div>
        </div>
      </div>

      <div class="message-l">
        <h5 class="h5">购物券</h5>
        <div class="money">
          <div class="number">
            <div>
              <p>余额</p>
              <p>{{GWQamount}}</p>
            </div>
          </div>
        </div>
        <div class="mes-bot">
          <div class="bot-item">
            <span>合计交易</span>
            <span>{{GWQSUMCOUNT.getCount+GWQSUMCOUNT.sendCount}}次</span>
          </div>
          <div class="bot-item">
            <span>交易量</span>
            <span>{{GWQSUMCOUNT.getTotal+GWQSUMCOUNT.sendTotal}}</span>
          </div>
          <div class="bot-item">
            <span>最近交易</span>
            <span>{{GWQLT.created}}</span>
            <span>{{GWQLT.dataTime}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      JLQLT:{
        created:'',
        dataTime:''
      },
      JLQSUMCOUNT:{
        getTotal:0,
        sendTotal:0
      },
      JLQamount:0.00,
      LGQLT:{
        created:'',
        dataTime:''
      },
      LGQSUMCOUNT:{
        getTotal:0,
        sendTotal:0
      },
      LGQamount:0.00,
      GWQLT:{
        created:'',
        dataTime:''
      },
      GWQSUMCOUNT:{
        getTotal:0,
        sendTotal:0
      },
      GWQamount:0.00,
    }
  },
  methods: {
    
    init(){
      let p={}
      this.axios
        .post(`${this.api.baseURL}/me/index`, p)
        .then(res => {
          if (res.data.success) {
            if(res.data.data.JLQSUMCOUNT){
              this.JLQSUMCOUNT=res.data.data.JLQSUMCOUNT;
            }
            if(res.data.data.JLQLT){
              // this.JLQLT = res.data.data.JLQLT;
              this.JLQLT.created = res.data.data.JLQLT.created.slice(0,10);
              this.JLQLT.dataTime = res.data.data.JLQLT.created.slice(11)
            }
            if(res.data.data.JLQamount){
              this.JLQamount = res.data.data.JLQamount;
            }
            if(res.data.data.LGQLT){
              // this.LGQLT = res.data.data.LGQLT;
              this.LGQLT.created = res.data.data.LGQLT.created.slice(0,10);
              this.LGQLT.dataTime = res.data.data.LGQLT.created.slice(11)
            }
            if(res.data.data.LGQamount){
              this.LGQamount = res.data.data.LGQamount;
            }
            if(res.data.data.LGQSUMCOUNT){

              this.LGQSUMCOUNT = res.data.data.LGQSUMCOUNT;
            } 

            if(res.data.data.GWQSUMCOUNT){
              this.GWQSUMCOUNT=res.data.data.GWQSUMCOUNT;
            }
            if(res.data.data.GWQLT){
              // this.JLQLT = res.data.data.JLQLT;
              this.GWQLT.created = res.data.data.GWQLT.created.slice(0,10);
              this.GWQLT.dataTime = res.data.data.GWQLT.created.slice(11)
            }
            if(res.data.data.GWQamount){
              this.GWQamount = res.data.data.GWQamount;
            }
          }else{

          }
        });
    }
  },
  created () {
    this.init();
  }
}
</script>
<style lang="less">
.personal {
  width: 100%;

  .top-view {
    background: white;
    border-bottom: 1px solid #DDD;
    padding: 0 30px;
    height: 115px;

    .info {
      padding: 20px 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .info-left {
        flex: 1;
        font-size: 28px;
        color: #999;
      }

      .info-right {
        flex: 1;
        text-align: right;

        .f-20 {
          margin-bottom: 10px;
          font-size: 20px;
          color: #5f5f5f;

          > span:first-child {
            margin-right: 10px;
          }
        }
      }
    }
  }

  .message {
    padding: 20px 30px 0 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .message-l {
      padding:15px;
      flex: 1;
      height: 370px;
      border: 1px solid #DDD;

      &:first-child {
        margin-right: 20px;
      }
      
      &:nth-child(2) {
         margin-right: 20px;
      }

      .h5 {
        font-size: 24px;
        font-weight: 300;
      }

      .money {
        margin-top: 20px;
        width: 100%;

        .number {
          position: relative;
          margin: 0 auto;
          width: 193px;
          height: 193px;
          text-align: center;
          font-size: 24px;
          border: 25px solid #ccc;
          border-radius: 50%;
          color: #999;

          > div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }

      .mes-bot {
        margin-top: 30px;
        padding: 0 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .bot-item {
          padding-top: 5px;
          width: 30%;
          border-top: 4px solid #004a7c;

          &:nth-child(2) {
            border-top: 4px solid #10ADE4;
          }

          &:nth-child(3) {
            border-top: 4px solid #B2D5E5;
          }

          > span {
            display: block;
            height: 20px;
            color: rgb(16, 173, 228);

            &:first-child {
              color: #333;
            }
          }
        }
      }
    }

    // .message-r {
    //   flex: 1;
    //   height: 370px;
    //   border: 1px solid #DDD;
    // }
  }
}
</style>
