<style scoped>
.arcitleListCard{
    margin-bottom: 8px;
}
.arcitleListCard a {
    color: #4a5161;
}
.aouther{
    margin-bottom: 8px;
}
</style>
<template>
    <div>
        <Row>
            <i-col span="24" v-for="item in articleList" :key="item.id" class="arcitleListCard">
                <Card @click="clickArticle(item.id)" dis-hover >
                    <Row>
                        <i-col span="3">
                            <Avatar style="background-color: #87d068" icon="person" />
                        </i-col>
                        <i-col span="21">
                            <Row>
                                <i-col>
                                    刘文龙
                                </i-col>    
                            </Row>
                            <Row>
                                <i-col>
                                    <a @click="clickArticle(item.id)" href="">{{item.name}}</a>
                                </i-col>    
                            </Row>
                        </i-col>
                    </Row>
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
