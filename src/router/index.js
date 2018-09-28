import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/User/Navbar'
import Addblog from '@/components/Admin/Addblog'
import Signin from '@/components/Admin/Signin'
import Detail from '@/components/User/Detail'
<<<<<<< HEAD
import Editblog from '@/components/Admin/Editblog'
import Detailblog from '@/components/Admin/Detailblog'
=======
import Readmore from '@/components/User/Readmore'
>>>>>>> ba72ffa2148c549bcd09d03b7b1c9f0398b91a6a

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
<<<<<<< HEAD
      path: '/edit-blog/:edit_slug',
      name: 'Editblog',
      component: Editblog
    }
    ,
    {
      path: '/detailblog',
      name: 'Detailblog',
      component: Detailblog
    }


=======
      path: '/readmore',
      name: 'Readmore',
      component: Readmore
    }
>>>>>>> ba72ffa2148c549bcd09d03b7b1c9f0398b91a6a
  ]
})
