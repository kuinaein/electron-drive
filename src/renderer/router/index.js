import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/LoginPage').default
      // name: 'landing-page',
      // component: require('@/components/LandingPage').default
    },
    {
      path: '/drive',
      name: 'drive',
      component: require('@/components/DrivePage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
