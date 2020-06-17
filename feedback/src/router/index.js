import Vue from 'vue'
import Router from 'vue-router'
import Chatlist from '@/components/Chatlist'
import ChatHome from '@/components/ChatHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chatlist',
      component: Chatlist
    },
    {
      path: '/ChatHome',
      name: 'ChatHome',
      component: ChatHome
    }
  ]
})
