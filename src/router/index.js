import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Checkout from '../views/Checkout.vue';

// Auth routes
import Auth from '../views/Auth.vue';
import Login from '../views/auth/Login.vue';
import SignUp from '../views/auth/SignUp.vue';

// Admin routes
import Admin from '../views/Admin.vue';
import Dashboard from '../views/admin/Dashboard.vue';
import Products from '../views/admin/Products.vue';
import Orders from '../views/admin/Orders.vue';
import Profiles from '../views/admin/Profiles.vue';

// Import firebase
import { fb } from '@/firebase.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login,
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp,
      }
    ]
  },
  {
    path: '/admin',
    component: Admin,
    meta: { requireAuth: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'products',
        name: 'Products',
        component: Products,
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
      },
      {
        path: 'profiles',
        name: 'Profiles',
        component: Profiles,
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// cek jika sebuah routes memerlukan authentication\
// to: data url yang mau dikunjungi
// from: data dari url saat ini atau sebelum berpindah url
// next: function yang berguna untuk meneruskan / menyelesaikan action
router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(x => x.meta.requireAuth);
  const currentUser = fb.auth().currentUser;

  fb.auth().onAuthStateChanged((user) => { 
    if (requireAuth && !user) {
      next('/');
    } else if (requireAuth && user) {
      next();
    }

    next();
  });

});

export default router;
