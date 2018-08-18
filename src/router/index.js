import Router from 'vue-router'
import a1 from '@/components/a1'
import a2 from '@/components/a2'
import a3 from '@/components/a3'
import a4 from '@/components/a4'
import newsinfo from '@/components/newsinfo'
import index from '@/components/index'

var router = new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {
      path: '/index',

      component: index
    },
    {
      path: '/a1',

      component: a1
    },
    {
      path: '/a2',

      component: a2
    },
    {
      path: '/a3',

      component: a3
    },
    {
      path: '/a4',

      component: a4
    },
    {
      path: '/a1/newsinfo/:id',

      component: newsinfo
    }
  ]
})
export default router
