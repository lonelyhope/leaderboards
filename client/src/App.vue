<template>
    <div>
        <router-view name="navbar"></router-view>
        <div id="navbar">
            <router-link to="/search">search</router-link>
            <router-link to="/search">search</router-link>
        </div>
        <router-view name="content"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
/* #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} */
body {
  margin: 0;
  padding: 0;
}
</style>
