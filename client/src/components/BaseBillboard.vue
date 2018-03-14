<template>
  <div>
    <div>
      <div class="rank_name">{{rankName}}</div>
    </div>
    <div class="rank_table_container">
      <el-table :data="rankData"  style="width: 90%">
        <el-table-column 
          v-for="(value, key) in rankHead" 
          v-bind:prop="key" 
          v-bind:label="value">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import ElementUI from 'element-ui'
export default {
  data () {
    return this.getTestData();
  },
  //props: ['rankName', 'rankHead', 'rankData'],
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.rankName = this.$route.params.chartName;
    }
  },

  methods: {
    getTestData() {
      return {
        rankName:  this.$route.params.chartName,
        rankHead: {
          'rank': 'rank', 
          'change': 'change', 
          'song_title': 'title', 
          'artist': 'artist', 
          'album': 'album'
        },
        rankData: [{
          rank: 1,
          change: 'new',
          song_title: 'Gee',
          artist:'소녀시대',
          album:'\'Gee\' The First Mini Album'
        }, {
          rank:2, 
          change:'27', 
          song_title:'이젠 남이야 (Feat. Baby-J of Jewelry)', 
          artist:'김경록', 
          album:'People & People'
        }, {
          rank: 3, 
          change:'113', 
          song_title:'Strong Baby (승리 solo)',
          artist:'BIGBANG', 
          album:'REMEMBER'
        }]
      }
    },

    getRankData(rankName, type, startTime, endTime) {

    }
  }

}

</script>



<style scoped>
  .rank_name {
    font: 20px bold;
  }

  .rank_table_container {
    width: 90%;
    border: 1px #EEEEEE;
    padding: 10px 10px;
  }

</style>
