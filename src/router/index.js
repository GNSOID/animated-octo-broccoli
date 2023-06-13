import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'start',
    component: () => import('../views/start/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/index.vue'),
    children: [
      {
        path:'firstcart',
        name:'firstcart',
        component: () => import('../views/cart/cart.vue'),
      },
      {
        path: 'confirm',
        name: 'confirm',
        component: () => import('../views/cart/confirm.vue'),
        meta: {
          hidden: true
        }
      },
      {
        path: 'settlement',
        name: 'settlement',
        component: () => import('../views/cart/settlement.vue'),
        meta: {
          hidden: true
        }
      }, 
    ],
  },

  {
    path: '/sellbook',
    name: 'sellbook',
    component: () => import('../views/sellbook/index.vue'),
    children: [
      {
        path: 'book1',
        name: 'book1',
        component: () => import('../views/sellbook/book1.vue'),
      },
      {
        path: 'book2',
        name: 'book2',
        meta: {
          hidden: true
        },
        component: () => import('../views/sellbook/book2.vue'),
      },
      {
        path: 'book3',
        name: 'book3',
        meta: {
          hidden: true
        },
        component: () => import('../views/sellbook/book3.vue'),
      },
      {
        path: 'book4',
        name: 'book4',
         meta: {
      hidden:true
    },
        component: () => import('../views/sellbook/book4.vue'),
      },
      {
        path: 'book5',
        name: 'book5',
         meta: {
      hidden:true
    },
        component: () => import('../views/sellbook/book5.vue'),
      },   {
        path: 'book6',
        name: 'book6',
         meta: {
             hidden:true
           },
        component: () => import('../views/sellbook/book6.vue'),
      },
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/index.vue'),
    children:[
      {
        path: 'mymessage',
        name: 'mymessage',
        component: () => import('../views/my/mymessage.vue'),
      },
      {
        path: 'shopaddress',
        name: 'shopaddress',
        component: () => import('../views/my/shopaddress.vue'),
        meta: {
          hidden:true
        },
      },
      {
        path: 'myonsale',
        name: 'myonsale',
        component: () => import('../views/my/myonsale.vue'),
        meta: {
          hidden:true
        },
      },
      {
        path: 'personone',
        name: 'personone',
        component: () => import('../views/my/personone.vue'),
        meta: {
          hidden:true
        },
      },
      {
        path: 'alreadysale',
        name: 'alreadysale',
        component: () => import('../views/my/alreadysale.vue'),
        meta: {
          hidden:true
        },
      },
      {
        path: 'mybuy',
        name: 'mybuy',
        component: () => import('../views/my/mybuy.vue'),
        meta: {
          hidden:true
        },
      },
      {
        path: 'mywant',
        name: 'mywant',
        component: () => import('../views/my/mywant.vue'),
        meta: {
          hidden:true
        },
      },
      {
        path: 'addmap',
        name: 'addmap',
        component: () => import('../views/my/addmap.vue'),
        meta: {
          hidden:true
        },
      }


    ]
     
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
      hidden: true
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
  {
    path: '/bigkind',
    name: 'bigkind',
    meta: {
      hidden:true
    },
    component: () => import('../views/kind/index.vue'),
    children:[
      {
        path: 'kind',
        name: 'kind',
        component: () => import('../views/kind/kind.vue'),
      },
      {
        path: 'onsale',
        name: 'onsale',
        component: () => import('../views/kind/onsale.vue'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/kind/search.vue'),
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('../views/kind/message.vue'),
      }
    ]
  },
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
