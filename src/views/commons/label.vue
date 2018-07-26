<template>
    <div class="margin-top-10">
        <Card>
            <a v-for="item in labelList" :key="item.id">{{item.label}}</a>
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


