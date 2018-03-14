<template>
    <div>
        <el-menu
            class="nav-aside"
            default-active="1"
            :router="true"
            @select="handleSelect">
            <el-menu-item index="gaon">
                <span slot="title">Gaon</span>
            </el-menu-item>
            <el-menu-item index="melon">
                <span slot="title">Melon</span>
            </el-menu-item>
            <el-menu-item index="mnet">
                <span slot="title">Mnet</span>
            </el-menu-item>
          
        </el-menu>
        <router-view name="main-content" class="main-content"></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        handleSelect(index, indexPath) {
            console.log(index, indexPath);
        }
    }
}
</script>

<style scoped>
.nav-aside {
    width: 20%;
    float: left;
}
.main-content {
    width: 70%;
    float: right;
}
</style>