import Vue from 'vue'
import Router from 'vue-router'
import a1 from '@/components/1'
import a2 from '@/components/2'
import a3 from '@/components/3'
import a4 from '@/components/4'
import VueRouter from 'vue-router'

var router = new Router({
  routes: [
    {path: '/', redirect: '/a1'},
    {
      path: '/a1',

      redirect: a1
    },
    {
      path: '/a2',

      redirect: a2
    },
    {
      path: '/a3',

      redirect: a3
    },
    {
      path: '/a4',

      redirect: a4
    }
  ]
})
export default router
