<template>
  <div>
  <div v-for="item  in  list"    :key="item.id">
  <div class="footer-w1" style=" border-bottom: 0.1px   solid  #EFEFEF;"   >


    <img :src="'http://canada-api.umsoft.cn'+item.cover" class="footer-p1"
         style=" width: 3.38rem ;height: 3.38rem;  float: left; "/>

    <div class="footer-w2  clearfix">

        <p class="footer-text1">{{item.title}}</p>
        <p class="footer-text2">{{item.description}}</p>
      <p class="footer-text3">{{item.type}}</p>

      </div>
     </div>
  </div>
    </div>
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
  @import '../static/css/index.css';

</style>
