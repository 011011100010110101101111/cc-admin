<template>
    <div class="margin-top-10">
        <Card>
            <p slot="title">
                <Icon type="fireball"></Icon>
                热门文章
            </p>
            <a href="#" slot="extra" @click.prevent="">
                <Icon type="more"></Icon>
            </a>
            <div class="preview-placeholderCon">
                <p v-for="item in hotartical" :key='item.id'><a>{{item.name}}</a></p>
            </div>
        </Card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      hotartical: [
        { id: "1", name: "最新文章……" },
        { id: "1", name: "又一篇新文章！！！" },
        { id: "1", name: "测试" },
        { id: "1", name: "测试" }
      ]
    };
  }
};
</script>

