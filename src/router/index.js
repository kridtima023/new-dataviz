import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/User/Navbar'
import Addblog from '@/components/Admin/Addblog'
import Signin from '@/components/Admin/Signin'
import Detail from '@/components/User/Detail'
import Editblog from '@/components/Admin/Editblog'
import Detailblog from '@/components/Admin/Detailblog'

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
      path: '/edit-blog/:edit_slug',
      name: 'Editblog',
      component: Editblog
    }
    ,
    {
      path: '/detailblog/:detail_slug',
      name: 'Detailblog',
      component: Detailblog
    }


  
    
  ]
})
