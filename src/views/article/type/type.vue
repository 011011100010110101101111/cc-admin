<style lang="less">
    @import "./type.less";
</style>
<template>
    <div>
        <Button type="primary" icon="plus" style="margin-bottom: 10px">添加类型</Button>
        <Table border ref="selection" :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
export default {
    name: 'page2',
    data () {
        return {
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '类型描述',
                    key: 'name'
                },
                {
                    title: '类型编号',
                    key: 'id'
                },
                {
                    title: '操作',
                    key: 'address',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index);
                                    }
                                }
                            }, '查看'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index);
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ],
            data: [
                {
                    name: '散文',
                    id: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    id: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    id: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    id: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        };
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: '类型详情',
                content: `Name：${this.data[index].name}<br>id：${this.data[index].age}<br>Address：${this.data[index].address}`
            });
        },
        remove (index) {
            this.data.splice(index, 1);
        }
    }
};
</script>