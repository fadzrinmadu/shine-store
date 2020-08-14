import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Import jquery
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// Import popper.js, bootstrap.js, , main.scss (include bootstrap.scss)
import 'popper.js'
import 'bootstrap';
import './assets/scss/main.scss';

// Import firebase
import { fb } from '@/firebase.js';

// Import Vue Firestore
import VueFirestore from 'vue-firestore';
Vue.use(VueFirestore, {
  key: 'id',
  enumearable: true,
});

// Import vuex
import store from '@/store/store.js';

// Register component globally
Vue.component('app-navbar', require('./components/Navbar.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

