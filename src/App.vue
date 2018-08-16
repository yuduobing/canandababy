<template>

  <!--循环列表-->


  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    list: []
    };
  },
  created: function () {
    this.getList();
    console.log("启动中");
  },
  methods:{
    getList(){
      console.log("获取中");


      this.$http.get('/api/lists?page_num=1&page_size=5', {}, {
        headers: {

        },
        emulateJSON: true
      }).then(function (res) {
        this.list= res.body.data.rows;
        console.log("成功了")
        console.log(this.list)
      }, function (error) {
        console.log("失败了")
        console.log(error)
      })



    }


  }
}
</script>

<style>

</style>
