import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/stock',
    name: 'Stock',
    component: () => import('../views/stock.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/editStockPage',
    name: 'EditStockPage',
    component: () => import('../views/editStockPage.vue')
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: () => import('../views/invoice.vue')
  },
  {
    path: '/invoiceDetail',
    name: 'InvoiceDetail',
    component: () => import('../views/detailInvoice.vue')
  },
  {
    path: '/addStock',
    name: 'addStock',
    component: () => import('../views/addStock.vue')
  },
  {
    path: '/newInvoice',
    name: 'newInvoice',
    component: () => import('../views/newInvoice.vue')
  },
  {
    path: '/newStock',
    name: 'newStock',
    component: () => import('../views/newStock.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
// const isAuthenticated = localStorage.getItem('access_token')
// if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
// else next()
// if (to.name === 'Register' && !isAuthenticated) next()
// else if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
// else if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
// else if (to.name === 'Register' && isAuthenticated) next({ name: 'Home' })
// else if (to.path === '/' && isAuthenticated) next({ name: 'Home' })
// else next()
// })

export default router
