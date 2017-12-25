<style lang="less">
    @import "./home.less";
</style>
<template>
    <div class="home-main">
        <h1>欢迎  {{userName}}  </h1>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    name: 'home',
    data () {
        return {
            userName: ''
        };
    },
    methods: {
        init () {
            this.userName = Cookies.get('user');
        }
    },
    mounted () {
        this.init();
    }
};
</script>
