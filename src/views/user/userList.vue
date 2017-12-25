<style lang="less">
    @import "userHome.less";
</style>
<template>
    <div class="userList-index">
        <h1>会员管理</h1>
        <Table stripe :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
  /* eslint-disable indent,semi,no-undef,no-empty,no-trailing-spaces,padded-blocks */

  import util from '../../libs/util'

  export default {
  name: 'userHome',
  data () {
    return {
      columns1: [
        {
          title: 'id',
          key: 'id'
        },
        {
          title: 'realName',
          key: 'realName'
        },
        {
          title: 'passWord',
          key: 'passWord'
        },
        {
          title: 'userName',
          key: 'userName'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'sex',
          key: 'sex'
        }
      ],
      data1: []
      }

  },
  methods: {
      init () {
          this.list();
      },
      list () {
          util.ajax.get('/user/list').then(p => {
              this.data1 = p.data.data;
          });
      }
  },
  mounted () {
      this.init();
  }
};
</script>
