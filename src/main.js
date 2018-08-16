// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
Vue.use(VueRouter)

Vue.use(VueResource)
Vue.use(MintUI)

/*使用VueResource插件*/


new Vue({

  el: '#app',
  data: {

  },
  router,
  created: function () {

  },
  components: { App },
  template: '<App/>',
  methods: {}
})

