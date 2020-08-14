<template>
  <button class="btn btn-primary" v-on:click="addToCart">
    <i class="fas fa-shopping-cart"></i>
  </button>
</template>

<script>
export default {
  name: 'AddToCart',
  props: {
    productId: String,
    name: String,
    price: String,
    productImage: String,
  },
  data() {
    return {
      product: {
        productId: this.productId,
        productName: this.name,
        productPrice: this.price,
        productImage: this.productImage,
        productQty: 1,
      }
    }
  },
  methods: {
    addToCart() {
      $('#miniCart').modal('show');
      this.$store.commit('addToCart', this.product);
    }
  }
};
</script>

<style scoped lang="scss">

</style>
