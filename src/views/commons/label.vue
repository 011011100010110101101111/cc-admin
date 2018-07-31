<template>
    <div class="margin-top-10">
        <Card>
            <p slot="title">
                <Icon type="ios-lightbulb"></Icon>
                热门标签
            </p>
            <a href="#" slot="extra" content="标签墙……">
                <Icon type="more"></Icon>
            </a>
            <a class="label-content" style="font-size:15px;" v-for="item in labelList" :key="item.id">{{item.label}}</a>
        </Card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            labelList : [
                {id: 1,label:'2'},
                {id: 2,label:'2'},
                {id: 3,label:'2'},
                {id: 4,label:'2'},
                {id: 5,label:'2'}
            ]
        }
    }
}
</script>
<style scoped>
.label-content {
    margin: 2px;
}
</style>


