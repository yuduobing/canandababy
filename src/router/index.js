import Router from 'vue-router'
import a1 from '@/components/a1'
import a2 from '@/components/2'
import a3 from '@/components/3'
import a4 from '@/components/4'
import newsinfo from '@/components/newsinfo'
var router = new Router({
  routes: [
    {path: '/', redirect: '/a1'},
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
