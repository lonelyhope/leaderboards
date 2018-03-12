<template>
    <div>
        <search-input v-on:getsearchres="transfer"></search-input>
        <div v-if="showSerach">
            <div v-for="(searchResult, index) in searchResults" :key="index">
                <data-analysis :content="searchResult"></data-analysis>
            </div>
        </div>
        <div v-else>
            {{ hint }}
        </div>
    </div>
</template>

<script>
import searchInput from './searchInput.vue'
import dataAnalysis from './dataAnalysis.vue'

export default {
    components: {
        searchInput,
        dataAnalysis
    },
    data: function () {
        return {
            hint: 'there is no info',
            showSerach: false,
            searchResults: {}
        };
    },
    methods: {
        transfer(SearchInfo) {
            console.log('get searchres');
            // if (searchRes is empty) so... (add)
            this.showSerach = true;
            this.searchResults = SearchInfo;
        }
    }
}
</script>
