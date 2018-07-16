<style>
.arcitleListCard{
    margin-bottom: 8px;
}
.arcitleListCard a {
    color: #4a5161;
}
.arcitleListCard a:hover {
    text-decoration:underline;
}
.aoutherPortrait{
    float: left;
    margin-right: 8px;
}
.arcitleInfo{
    color: #4a5161;
    font-size: 8px;
    margin-bottom: 5px;
}
</style>
<template>
    <div>
        <Row>
            <i-col span="24" v-for="item in articleList" :key="item.id" class="arcitleListCard">
                <Card @click="clickArticle(item.id)" dis-hover >
                    <div class="aoutherPortrait">
                        <Avatar style="background-color: #87d068" :src="item.src" shape="square" size="large"/>
                    </div>
                    <div class="arcitleInfo">
                       <Icon type="android-alarm-clock"></Icon>&nbsp;2018-07-07 12:25:36 · 15浏览 &nbsp;&nbsp;&nbsp; 5回帖
                    </div>
                    <div calss="articleTitleLink">
                        <a @click="clickArticle(item.id)">{{item.name}}</a>
                    </div>
                </Card>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                articleList: [
                    {name: '你好，这是一篇测试文章', id: 1,src: 'https://i.loli.net/2017/08/21/599a521472424.jpg'},
                    {name: '你好，这是第二篇测试文章', id: 2, src: 'https://img.hacpai.com/20180711qibot.jpg'},
                    {name: '你好，这是一篇测试文章', id: 1},
                    {name: '你好，这是第二篇测试文章', id: 2},
                    {name: '你好，这是一篇测试文章', id: 1},
                    {name: '你好，这是第二篇测试文章', id: 2}
                ]
            };
        },
        methods: {
            clickArticle (id) {
                let params = {
                    id: id
                };
                this.$router.push({
                    name: 'article',
                    params: params
                });
            }
        }
    };
</script>
