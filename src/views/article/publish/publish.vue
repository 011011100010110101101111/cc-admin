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
            article_title: ''
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
    mounted ()
    {
        new SimpleMDE({
            element: document.getElementById('iview_admin_markdown_editor'),
            toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']
        });
    }
};
</script>
