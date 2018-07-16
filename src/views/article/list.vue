<style scoped>
.arcitleListCard{
    margin-bottom: 8px;
}
.arcitleListCard a {
    color: #4a5161;
}
</style>
<template>
    <div>
        <Row>
            <i-col span="24" v-for="item in articleList" :key="item.id" class="arcitleListCard">
                <Card @click="clickArticle(item.id)" dis-hover >
                    <a @click="clickArticle(item.id)" href="">{{item.name}}</a>
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
                    {name: '你好，这是一篇测试文章', id: 1},
                    {name: '你好，这是第二篇测试文章', id: 2},
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
</script
>
