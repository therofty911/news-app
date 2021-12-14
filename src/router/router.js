import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import PageNotFound from '@/components/PageNotFound'
import Developer from '../views/Developer.vue'
Vue.use(Router)

let baseRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
    // beforeEnter: (to, from, next) => {
    //   const loggedIn = localStorage.getItem('user')
    //   if (to.name !== 'Login' && !loggedIn) {
    //     next('/')
    //   } else if (to.name === 'Login' && loggedIn) {
    //     next('/home')
    //   } else {
    //     next()
    //   }
    //   const isAuthen = false
    //   if (to.name !== 'Login' && !isAuthen) next({ name: 'Login' })
    //   if (to.name === 'Login' && isAuthen) next({ name: "'Home'" })
    //   else next()

    //   // if(to.name !== 'Login' && !isAuthen){
    //   //   next({ name: "Login" });
    //   // } else if(to.name === 'Login' && isAuthen){
    //   //   next({ name: "Home" });
    //   // } else{
    //   //   next();
    //   // }
    // }
  },
  {
    path: '/developer',
    name: 'Developer',
    component: Developer
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: baseRoutes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ['/login', '/signup']
  // const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (to.name !== 'Login' && !loggedIn) {
    next('/')
  } else if (to.name === 'Login' && loggedIn) {
    next('/home')
  } else {
    next()
  }
})

export default router
