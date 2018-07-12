<template>
    <div class="userHome-index">
        <Menu mode="horizontal" theme="light" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                主页
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people"></Icon>
                帖子
            </MenuItem>
            <MenuItem name="3">
                <Icon type="ios-people"></Icon>
                回帖
            </MenuItem>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="5">
                <Icon type="settings"></Icon>
                关注者
            </MenuItem>
        </Menu>
    </div>
</template>

<script>
export default {
    name: 'userHome',
    data () {
        return {
            //
        };
    }
};
</script>
