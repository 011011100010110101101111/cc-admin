<style lang="less">
    @import "userHome.less";
</style>
<template>
    <div class="userList-index">
        <h1>会员管理</h1>
        <Table stripe :columns="columns1" :data="data1"></Table>
        <button @click="list">lll---------</button>
    </div>
</template>

<script>
  /* eslint-disable indent,semi,no-undef,no-empty,no-trailing-spaces */

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
      list: function () {
        util.ajax.get('/user/list').then(function (p) {
          this.data1 = p.data.data;
        })
      },
      test: function () {
        alert(this.data1);
      }
    }
  };
</script>
