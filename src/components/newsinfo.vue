<template>
  <div>
    <div class="newsinfo-container">
      <h3 class="title"> {{newsinfo.title}}</h3>
      <span class="subtitle">{{newsinfo.create_time|dateFormat}}</span>
      <hr>
      <div class="content" v-html="newsinfo.content">newsinfo</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newsinfo",
    data() {

      return {
        newsinfo: {},
        id: null,
      };
    },
    created: function () {

      this.id = this.$route.params.id;
      this.getList();
      console.log("启动中");
    }
    ,
    methods: {
      getList() {
        console.log("获取中");


        this.$http.get('/api/detail?id=' + this.id, {}, {
          headers: {},
          emulateJSON: true
        }).then(function (res) {
          this.newsinfo = res.body.data;
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

<style lang="scss" scoped>
  .newsinfo-container {
    padding: 0 8px;
    .title {
      font-size: 0.6rem;

      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .subtitle {
      color: #737373;
      font-size: 13px;
    }
    .content {
    }

  }
</style>
