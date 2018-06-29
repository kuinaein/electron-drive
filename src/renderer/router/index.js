import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const REDIRECT_URI = 'http://localhost:11451/'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/LoginPage').default,
      meta: { redirectUri: REDIRECT_URI }
      // name: 'landing-page',
      // component: require('@/components/LandingPage').default
    },
    {
      path: '/drive',
      name: 'drive',
      component: require('@/components/DrivePage').default,
      meta: { redirectUri: REDIRECT_URI }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
