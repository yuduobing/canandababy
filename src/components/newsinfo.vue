<template>
  <div>
    <div style="padding-top: 1.85rem"></div>
    <mt-header class="head-title" fixed title="赴加生子福利">
      <router-link to="this.$router.go(-1)" slot="left">
        <div class="backTo">
          <span v-on:click="back">返回</span>
        </div>

      </router-link>

    </mt-header>
    <img :src="'http://canada-api.umsoft.cn'+newsinfo.cover" class="footer-p1"
         style=" width:100%;  height: 10rem;  "/>
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
      back() {
        this.$router.go(-1);//返回上一层
      },
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
