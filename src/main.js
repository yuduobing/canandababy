// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/a1'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.use(MintUI)

/*使用VueResource插件*/


new Vue({

  el: '#app',
  data: {

  },
  created: function () {

  },
  components: { App },
  template: '<App/>',
  methods: {}
})

