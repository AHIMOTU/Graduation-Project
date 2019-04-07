import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/common/Index.vue'
import Home from '@/pages/Home.vue'
import Detail from '@/pages/common/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'detail',
          name: 'detail',
          component: Detail
        }
      ]
    }
  ]
})
