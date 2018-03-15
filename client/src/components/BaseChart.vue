<template>
  <div>
    <div>
      <div class="chart-name">{{chartName}}</div>
    </div>
    <div class="chart-table-container">
      <el-table :data="chartBodyData"  style="width: 90%">
        <el-table-column 
          v-for="(value, key) in chartHead" 
          v-bind:prop="key" 
          v-bind:label="value">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      chartName:this.$route.params.chartName,
      chartHeadMapping: {
        'rank': 'rank', 
        'change': 'change', 
        'changes': 'change',
        'song_title': 'title', 
        'album_title': 'album',
        'artist': 'artist', 
        'album' : 'album',
        'month_counts': 'month count',
        'production': 'production'
      },
      chartHead: {},
      chartBodyData: []
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.chartName = this.$route.params.chartName;
      this.getChartData();
    }
  },

  created() {
    this.getChartData();
  },

  methods: {
    // getTestData() {
    //   this.getChartData();
    //   return {
    //     chartName:  this.$route.params.chartName,
    //     chartHead: {
    //       'rank': 'rank', 
    //       'change': 'change', 
    //       'song_title': 'title', 
    //       'artist': 'artist', 
    //       'album_title': 'album'
    //     },
    //     chartBodyData: [{
    //       rank: 1,
    //       change: 'new',
    //       song_title: 'Gee',
    //       artist:'소녀시대',
    //       album:'\'Gee\' The First Mini Album'
    //     }, {
    //       rank:2, 
    //       change:'27', 
    //       song_title:'이젠 남이야 (Feat. Baby-J of Jewelry)', 
    //       artist:'김경록', 
    //       album:'People & People'
    //     }, {
    //       rank: 3, 
    //       change:'113', 
    //       song_title:'Strong Baby (승리 solo)',
    //       artist:'BIGBANG', 
    //       album:'REMEMBER'
    //     }]
    //   }
    // },

    getChartData() {
      var chartName = this.chartName;
      console.log(chartName);
      var Axios = axios.create({
        baseURL: 'http://localhost:8082'
      })
      var url = '/' + (chartName === "gaon" ? chartName + "_month_album" : chartName + "_month");

      var that = this;
      Axios.post(url)
      .then(function(response) { 
        console.log('Get response:');
        console.log(response);

        if (response.data.test && response.data.test.length > 0) {
          var keys = Object.keys(response.data.test[0]);
          var chartHead = {};
          keys.forEach(function(key) {
            if (that.chartHeadMapping[key]) {
              chartHead[key] = that.chartHeadMapping[key];
            }
          })
          console.log(chartHead);

          that.chartHead = chartHead;
          that.chartBodyData = response.data.test;
        }
      })
    }
  }

}

</script>



<style scoped>
  .chart-name {
    font: 20px bold;
  }

  .chart-table-container {
    width: 90%;
    border: 1px #EEEEEE;
    padding: 10px 10px;
  }

</style>
