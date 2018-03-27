import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../indexPage/home'
import Tab1 from '../indexPage/tab1'
import Tab2 from '../indexPage/tab2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path:'/tab1',
          name: 'Tab1',
          component: Tab1
        },
        {
          path: '/tab2',
          name: 'tab2',
          component: Tab2
        }
      ]
    }
  ]
})
