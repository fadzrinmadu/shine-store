<template>
  <section class="my-5 py-5 products">
    <div class="container">
      <div class="row mb-5">
        <div class="col">
          <h2>Featured Products</h2>
        </div>
      </div>
      <div class="row justify-content-between mb-5">
        <div class="col-lg col-md-6 product" v-for="(product, index) in products" v-on:key="index">
          <div class="img-wrapper">
            <img v-bind:src="product.images[0]" v-bind:alt="product.name" class="mb-3 mb-3 img-fluid">
            <add-to-cart 
              v-bind:productId="product.id"
              v-bind:name="product.name"
              v-bind:price="product.price"
              v-bind:productImage="product.images[0]">
            </add-to-cart>
          </div>
          <div class="product-details text-center">
            <h5>{{ product.name }}</h5>
            <p class="font-weight-bold">{{ formatPrice(product.price) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import  { db } from '@/firebase.js';

export default {
  name: 'Products',
  firestore() {
    return {
      products: db.collection('products'),
    }
  },
  data() {
    return {
      products: [],
    }
  },
  methods: {
    formatPrice(price) {
      let formatter = new Intl.NumberFormat('id', {
        style: 'currency',
        currency: 'IDR'
      });
      return formatter.format(price).replace(/\D00(?=\D*$)/, '');
    }
  }
};
</script>

<style scoped lang="scss">
.product {
  .img-wrapper {
    position: relative;

    .btn {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      visibility: hidden;
      transition: .4s;
    }
  }

  .img-wrapper:hover {
    .btn {
      opacity: 1;
      visibility: visible;
    }
  }
}

.product-details {
  h5 {
    font-size: 16px;
  }
}
</style>
