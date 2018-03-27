import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Eletest from '@/pages/test/pages/eletest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/eletest',
      name: 'Eletest',
      component: Eletest
    }
  ]
})
