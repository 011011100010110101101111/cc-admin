<style>
    ul{

    }
</style>
<template>
    <Card>
        <ul>
            <li v-for="item in articleList" :key="item.id" style="margin-top: 8px">
                <a @click="clickArticle(item.id)">
                    {{item.name}}
                </a>
            </li>
        </ul>
    </Card>
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
