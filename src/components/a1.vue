<template>
  <body>

  <mt-swipe :auto="4000">
    <mt-swipe-item><img src="../../static/image/s0.jpg" style="width: 100%"></mt-swipe-item>
    <mt-swipe-item><img src="../../static/image/s1.jpg" style="width: 100%"></mt-swipe-item>
    <mt-swipe-item><img src="../../static/image/s2.jpg" style="width: 100%"></mt-swipe-item>
  </mt-swipe>


  <!-- Add Pagination -->


  <div style="height: 0.5rem;width: 100%;background-color: #FAFAFA"></div>
  <div style="height: 1.36rem;width: 100%;">

    <div style="height:0.72rem;width: 0.12rem;margin-top: 0.64rem;background-color: red;float: left;">
    </div>
    <div style="font-size:0.46rem ;margin-top: 0.64rem;margin-left: 0.46rem;display:inline-block; ">
      最新资讯
    </div>
  </div>


  <div>
    <div v-for="item  in  list" :key="item.id">
      <div class="footer-w1" style=" border-bottom: 0.1px   solid  #EFEFEF;">


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
  </body>
</template>


<script>

  import {Toast} from "mint-ui";
  import {bootstrap} from '../../static/bootstrap-3.3.5-dist/js/bootstrap.min.js';
  import {jquery} from '../../static/bootstrap-3.3.5-dist/js/jquery-2.1.4.min.js';

  (function () {
    var ua = window.navigator.userAgent;
    var docEl = document.documentElement;
    var html = document.querySelector('html');
    var isAndorid = /Android/i.test(ua);
    var dpr = window.devicePixelRatio || 1;
    var rem = docEl.clientWidth / 15;

    // 设置 rem 基准值
    html.style.fontSize = rem + 'px';

    // Nexus 5 上 rem 值不准，
    // 如：设置100px，getComputedStyle 中的值却为 85px，导致页面错乱
    // 这时需要检查设置的值和计算后的值是否一样，
    // 不一样的话重新设置正确的值
    var getCPTStyle = window.getComputedStyle;
    var fontSize = parseFloat(html.style.fontSize, 15);
    var computedFontSize = parseFloat(getCPTStyle(html)['font-size'], 15);
    if (getCPTStyle && Math.abs(fontSize - computedFontSize) >= 1) {
      html.style.fontSize = fontSize * (fontSize / computedFontSize) + 'px';
    }

    // 设置 data-dpr 属性，留作的 css hack 之用
    html.setAttribute('data-dpr', dpr);

    // 安卓平台额外加上标记类
    if (isAndorid) {
      html.setAttribute('data-platform', 'android');
    }
  })();
  export default {
    name: 'fu1',
    data() {
      return {
        list: []
      };
    },
    created: function () {


      this.getList();
      console.log("启动中");
    },
    methods: {
      getList() {
        console.log("获取中");


        this.$http.get('/api/lists?page_num=1&page_size=5', {}, {
          headers: {},
          emulateJSON: true
        }).then(function (res) {
          this.list = res.body.data.rows;
          console.log("成功了")
          console.log(this.list)
        }, function (error) {
          console.log("失败了")
          console.log(error)
        })


      }


    }
  };

</script>

<style scoped>


  @import '../../static/bootstrap-3.3.5-dist/css/bootstrap.min.css';
  @import '../../static/css/index.css';

  .mint-swipe {
    height: 6.76rem;

  }


</style>
