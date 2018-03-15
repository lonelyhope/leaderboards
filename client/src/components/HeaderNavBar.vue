<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>
    <el-menu-item index="/">主页</el-menu-item>
    <el-menu-item index="/chart">榜单</el-menu-item>
    <el-menu-item index="/search">其他</el-menu-item>
    
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '/'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>