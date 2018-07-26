// 全局样式和本地样式分开写
<style scoped>
    @import './index.less';
</style>
<style>
    @import '../../styles/common.less';
</style>

<template>
    <div class="preview-main">
        <my-header></my-header>
        <Row class="margin-top-20" type="flex" justify="center">
            <i-col span="13">
                <router-view></router-view>
            </i-col>
            <i-col span="5" class="padding-left-10">
                <user-info></user-info>
                <labels></labels>
                <hotArticle></hotArticle>
                <newest-article></newest-article>
            </i-col>
        </Row>
        <my-footer></my-footer>
    </div>
</template>
<script>
    import footer from '../commons/footer';
    import header from '../commons/header';
    import userInfo from '../commons/userInfo';
    import util from '../../libs/util';
    import articleContent from '../article/articleContent.vue';
    import newestArticle from '../commons/newestArticle.vue';
    import hotArticle from '../commons/hotArticle.vue';
    import labels from '../commons/label.vue';
    export default {
        data () {
            return {

            };
        },
        components: {
            'myFooter': footer,
            'myHeader': header,
            'userInfo': userInfo,
            'articleContent': articleContent,
            'newestArticle': newestArticle,
            'hotArticle': hotArticle,
            'labels': labels
        },
        methods: {
            login () {
                this.$router.push({
                    name: 'login'
                });
            }
        },
        mounted () {
            // this.articleTitle = localStorage.articleTitle;
            // this.tagsList = localStorage.tagsList ? JSON.parse(localStorage.tagsList) : [];
            this.classificationSelected = localStorage.classificationSelected ? JSON.parse(localStorage.classificationSelected) : ['s', 'dsf', 'fsdfs', 'dfsd', 'fsdfsdf'];
            // this.content = localStorage.content;
            // this.publishTime = localStorage.publishTime;
            util.title('你好');
        }
    };
</script>
