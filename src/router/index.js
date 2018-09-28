import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/User/Navbar'
import Addblog from '@/components/Admin/Addblog'
import Signin from '@/components/Admin/Signin'
import Detail from '@/components/User/Detail'
import Readmore from '@/components/User/Readmore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/add-blog',
      name: 'Addblog',
      component: Addblog
    },
    {
      path: '/sign-in',
      name: 'Signin',
      component: Signin
    }
    ,
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
    ,
    {
      path: '/readmore',
      name: 'Readmore',
      component: Readmore
    }
  ]
})
