<style lang="less">
    @import "./publish.less";
    @import '../../../styles/common.less';
</style>
<template>
    <div>
        <Row class="margin-top-20">
            <Col span="20" offset="2">
                <Input v-model="article_title" placeholder="请输入文章标题"></Input>
            </Col>
        </Row>
        <Row class="margin-top-20">
            <Col span="4" offset="2">
            <Select v-model="model1" style="width:200px" placeholder="请选择类型……" filterable clearable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            </Col>
            <Col span="15" offset="1">
                <Input v-model="article_title" placeholder="请选择标签"></Input>
            </Col>
        </Row>
        <Row class="margin-top-20">
            <Col span="20" offset="2">
            <div class="markdown-con">
                <Card>
                    <textarea  id="iview_admin_markdown_editor" style="display:none;"></textarea>
                </Card>
            </div>
            </Col>
        </Row>
        <Row class="margin-top-20">
            <Col span="20" offset="2">
                <div style="text-align: right">
                    <Button type="primary" shape="circle" @click="saveToDraft">保存草稿</Button>
                    <Button type="primary" shape="circle" @click="publish">发布</Button>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import SimpleMDE from 'simplemde';
import './simplemde.min.css';
export default {
    name: 'markdown-editor',
    data () {
        return {
            article_title: '',
            cityList: [
                {
                    value: 'New York',
                    label: '散文'
                },
                {
                    value: 'London',
                    label: '随笔'
                },
                {
                    value: 'Sydney',
                    label: '小说'
                },
                {
                    value: 'Ottawa',
                    label: '吹牛'
                },
                {
                    value: 'Paris',
                    label: '测试'
                },
                {
                    value: 'Canberra',
                    label: '不知道'
                }
            ],
            model1: ''
        };
    },
    methods : {
        publish () {
            alert('发布成功');
        },
        saveToDraft () {
            alert('保存成功');
        }
    },
    mounted () {
        new SimpleMDE({
            element: document.getElementById('iview_admin_markdown_editor'),
            toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']
        });
    }
};
</script>
