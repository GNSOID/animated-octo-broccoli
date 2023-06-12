import { createRouter, createWebHistory } from 'vue-router'



const routes =[
  {
    path: '/',
    name: 'start',
    component: () => import('../views/start/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/index.vue')
  },
  {
    path: '/sellbook',
    name: 'sellbook',
    component: () => import('../views/sellbook/index.vue'),
    children:[
      {
        path: 'book1',
        name: 'book1',
        component: () => import('../views/sellbook/book1.vue'),
      },
      {
        path: 'book2',
        name: 'book2',
        meta: {
          hidden:true
        },
        component: () => import('../views/sellbook/book2.vue'),
      },
      {
        path: 'book3',
        name: 'book3',
         meta: {
      hidden:true
    },
        component: () => import('../views/sellbook/book3.vue'),
      }
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: {
      hidden: true,
    }
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      hidden:true
    },
    component: () => import('../views/register/index.vue'),
    children:[
      {
        path: 'step1',
        name: 'step1',
        component: () => import('../views/register/step1.vue'),
      },
      {
        path: 'step2',
        name: 'step2',
        component: () => import('../views/register/step2.vue'),
      },
      {
        path: 'step3',
        name: 'step3',
        component: () => import('../views/register/step3.vue'),
      }
    ]
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
