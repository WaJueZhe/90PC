<template>
  <div class="x-bar">
    <div :id="id" :option="option"></div>
  </div>
</template>
<script>
import HighCharts from 'highcharts';
export default {
   props: {
      id: {
          type: String
      },
      option: {
          type: Object
      },
      uuid:{
        type:String
      }
  },
  watch: {
    'uuid': {
      handler: function (val, oldVal) {
        HighCharts.chart(this.id, this.option)
      },
      deep: true
    }
  },
   mounted() {
    HighCharts.chart(this.id, this.option)
  }
}
</script>

