<style lang="less" scoped>
    @import "userHome.less";
</style>
<style>
    @import '~@/styles/common.less';
</style>
<template>
    <div class="userHome-index">
        <Card>
            <userHomeComponent></userHomeComponent>
            <Row class="margin-top-10">
                <i-col span="6" class="avatar">
                    <img src="https://avatars2.githubusercontent.com/u/31715318?s=460&v=4"/>
                </i-col>
                <i-col span="18" class="padding-left-10">
                    <p>姓名：刘文龙</p>
                </i-col>
            </Row>
        </Card>
    </div>
</template>

<script>
    import userHomeComponent from '../commons/userHomeComponent.vue';
export default {
    name: 'userHome',
    data () {
        return {
            //
        };
    },
    components: {
        userHomeComponent: userHomeComponent
    }
};
</script>
