<template>
  <div class="checkout">
    <app-navbar></app-navbar>

    <div class="container mt-5 pt-5">
      <div class="row justify-content-between">
        <div class="col-md-8">
          <h4 class="mt-3 mb-5">Checkout Page</h4>
          <ul class="pl-0">
            <li class="media ml-0 mb-3" v-for="(item, index) in this.$store.state.cart" v-bind:key="index">
              <img v-bind:src="item.productImage" width="80" class="align-self-center mr-3">
              <div class="media-body">
                <h5 class="mt-0">
                  {{ item.productName }}
                  <span class="float-right" v-on:click="removeItem(item)">X</span>
                </h5>
                <p class="mt-0">{{ item.productPrice }}</p>
                <p class="mt-0">Qty: {{ item.productQty }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="mt-3 mb-5">Total Price</h5>
        </div>
      </div>
    </div>

    <mini-cart></mini-cart>
  </div>
</template>

<script>

export default {
  name: 'Checkout',
  methods: {
    removeItem(item) {
      this.$store.commit('removeFromCart', item)
    }
  }
}

</script>
