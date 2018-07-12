<template>
    <div>
        <Card>
            <h1>{{ articleTitle }}</h1>
            <p class="preview-publish-time">
                <Icon type="android-alarm-clock"></Icon>&nbsp;发布时间：{{ publishTime }}
            </p>
            <div class="preview-tags-con">
                <b class="preview-tip">
                    <Icon type="ios-pricetags-outline"></Icon>&nbsp;标签：</b>
                <Tag v-for="item in tagsList" type="border" color="blue" :key="item">{{ item }}</Tag>
            </div>
            <div class="preview-content-con" v-html="content"></div>
            <div class="preview-classifition-con">
                <b class="preview-tip">
                    <Icon type="navicon-round"></Icon>&nbsp;目录：</b>
                <a class="preview-classifition-item" v-for="item in classificationSelected" :key="item">
                    <Icon type="android-folder-open"></Icon>
                    {{ item }}
                </a>
            </div>
            <div style="text-align: right">
                <ButtonGroup>
                    <Badge count="10">
                        <Button @click="click1" type="text">
                            <Icon type="happy-outline" size="20" color="orange"></Icon>
                        </Button>
                    </Badge>
                    <Button @click="click1" type="text">
                        <Icon type="sad-outline" size="20"></Icon>
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <i-input type = "textarea"></i-input>
            </div>
        </Card>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                articleTitle: '这是一篇测试文章',
                tagsList: ['测试', 'Java', '蛋疼'],
                classificationSelected: [],
                content: '2015年中，杜某跟他的同伙在电商平台通过虚假交易的方式为他人套现，以收取一定比例手续费的方式牟利。经公安机关侦查，在2015年11月10日至2015年11月13日期间，杜某等人利用多家网上店铺，在全国范围内串通多名电商用户虚构交易共计2500余笔，从“花呗”套现共计470余万元，从中收取手续费共计40余万元。',
                publishTime: '2018年01月01日 23:45:00'
            };
        },
        methods: {
            click1() {
                alert('点击啊1');
            }
        }
    };
</script>


