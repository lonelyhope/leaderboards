<template>
    <div>
        <div v-for="(searchType) in searchTypes" :key="searchType">
          {{ searchType }}:<input type="text" :name="searchType" v-model="typeName[searchType]" />
        </div>
        <!--<img href="searchicon(none)" v-on:click="submitSearch" />-->
        <button v-on:click="submitSearch">search</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return { //the information of types the clients can choose
            searchTypes: ['artist', 'album_title', 'record_stamp'], //if add new type here,you should also add it in 'typeName'
            typeName: {  //不好，待改进
                artist: '',
                album_title: '',
                record_stamp: ''
            }
        }
    },
    methods: {
        getSearchInfo: function() { //get the search request send to the server
            var originObjKeys = Object.keys(this.typeName); //get the attr name
            console.log(originObjKeys);
            var searchObj = {};
            var flag = false; //detect if the client has input something at least one
            for(let i = 0; i < originObjKeys.length; i++) {
                let key = originObjKeys[i];
                console.log(key, this.typeName[key]);
                if ((this.typeName[key]) != '') { //需要修改
                    flag = true;
                    searchObj[key] = this.typeName[key];
                }
            }
            return {
                ifSearch: flag,
                search: searchObj
            };
        },

        submitSearch: function () { //submit the search to server and get the result
            var SearchInfo =  this.getSearchInfo();
            if (!SearchInfo.ifSearch) {
                alert("You haven't input any thing!");
                return;
            }
            axios.post('/gaon_month_album', {SearchInfo})
             .then(function(response) { 
                 console.log('Get response:');
                //  console.log(response);
                 this.$emit('getSearchRes', response);
             })
             .catch(function(err) {
                 console.log('The search get an err:');
                 console.log(err);
             });
            console.log(SearchInfo);
            this.$emit('getsearchres', SearchInfo);
        }
    }
}
</script>

