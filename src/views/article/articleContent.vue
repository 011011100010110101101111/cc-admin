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
            <div>
                <b class="preview-tip">
                    <Icon type="navicon-round"></Icon>&nbsp;推荐阅读：
                </b>
            </div>
            <div>
                <ul style="margin-top: 8px">
                    <li v-for="item in classificationSelected" :key="item">
                        <a style="font-size: 8px">{{item}}</a>
                    </li>
                </ul>
            </div>
            <div style="text-align: right">
                <ButtonGroup>
                    <Badge count="10">
                        <Button @click="click1" type="text" icon="happy-outline" size="large">
                        </Button>
                    </Badge>
                    <Button @click="click1" type="text" icon="sad-outline" size="large">
                    </Button>
                </ButtonGroup>
            </div>
            <div style="text-align: right">
                <i-input type = "textarea" placeholder="请输入评论内容……" v-model="comment"></i-input>
                <Button style="margin-top: 8px">提交</Button>
            </div>
            <div>
                <p class="preview-publish-time">
                    <Icon type="android-alarm-clock"></Icon>&nbsp;{{ publishTime }}
                </p>
                <p class="preview-publish-time" style="margin-bottom: 8px">
                    <Icon type="person"></Icon>&nbsp;刘文龙
                </p>
                {{ c }}
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
                classificationSelected: ['教你如何进行单元测试。','持续集成实战集锦'],
                content: '2015年中，杜某跟他的同伙在电商平台通过虚假交易的方式为他人套现，以收取一定比例手续费的方式牟利。经公安机关侦查，在2015年11月10日至2015年11月13日期间，杜某等人利用多家网上店铺，在全国范围内串通多名电商用户虚构交易共计2500余笔，从“花呗”套现共计470余万元，从中收取手续费共计40余万元。',
                publishTime: '2018年01月01日 23:45:00',
                comment: '',
                c: '这篇文章写的太好了'
            };
        },
        methods: {
            click1() {
                alert('点击啊1');
            }
        }
    };
</script>


