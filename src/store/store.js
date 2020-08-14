import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
  },
  getters: {

  },
  mutations: {
    addToCart(state, product) {
      // cek jika barang sudah ada di cart
      let checkItem = state.cart.find(item => item.productId === product.productId);
      if (checkItem) {
        checkItem.productQty++;
      } else {
        state.cart.push(product);
      }

      // simpan ke localstorage
      this.commit('saveData');
    },
    saveData(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      console.log(index);
      
      // delete item from cart berdasarkan index;
      state.cart.splice(item, 1);
      this.commit('saveData');
    }
  }
});
