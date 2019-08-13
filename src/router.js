import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Lab',
      name: 'Lab',
      component: () => import('./views/Lab.vue')
    },
    {
      path: '/Doctor',
      name: 'Doctor',
      component: () => import('./views/Doctor.vue')
    },
    {
      path: '/Pharmacy',
      name: 'Pharmacy',
      component: () => import('./views/Pharmacy.vue')
    },
    {
      path: '/Patient',
      name: 'Patient',
      component: () => import('./views/Patient.vue')
    },
    {
      path: '*',
      redirect: {
        name: "Home"
      }
    },
  ]
})
