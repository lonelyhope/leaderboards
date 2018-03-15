<template>
    <div>
        <el-menu
            class="nav-aside"
            default-active="1"
            @select="handleSelect"
            router>
            <el-menu-item index="/chart/gaon">
                <span slot="title">Gaon</span>
            </el-menu-item>
            <el-menu-item index="/chart/melon">
                <span slot="title">Melon</span>
            </el-menu-item>
            <el-menu-item index="/chart/mnet">
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
            console.log(this.$route);
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