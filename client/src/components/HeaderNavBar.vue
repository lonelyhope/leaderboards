<template>
  <el-menu
    :default-active="activeIndex2"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">主页</el-menu-item>
    <el-menu-item index="2">榜单</el-menu-item>
    <el-menu-item index="3">其他</el-menu-item>
    
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>