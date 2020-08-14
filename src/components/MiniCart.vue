<template>
  <div class="modal fade" id="miniCart" tabindex="-1" aria-labelledby="miniCartLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="miniCartLabel">My Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="pl-0">
            <li class="d-flex mb-3" v-for="(item, index) in this.$store.state.cart" v-bind:key="index">
              <img class="mr-3" width="80px" v-bind:src="item.productImage" v-bind:alt="item.productName">
              <div class="media-body">
                <h5>
                  {{ item.productName }}
                  <span class="float-right" v-on:click="removeItem(item)">X</span>
                </h5>
                <div>{{ item.productPrice }}</div>
                <div>Qty: {{ item.productQty }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
          <button type="button" class="btn btn-primary" v-on:click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MiniCart',
  methods: {
    checkout() {
      $('#miniCart').modal('hide');
      this.$router.push('/checkout');
    },
    removeItem(item) {
      this.$store.commit('removeFromCart', item)
    }
  }
}

</script>
