import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/test'
import User from '../components/users'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base:__dirname,
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test,
      props: {
        msg:'Hold door'
      }
    },
    {
      path: '/',
      name: 'user',
      component: User,
    },
  ]
})
