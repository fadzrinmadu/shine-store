<template>
  <section class="services">
    <div class="container">
      <div class="row mb-4">
        <div class="col-lg-3 d-flex col-md-6 product">
          <div class="service-icon mr-3">
            <i class="fas fa-truck"></i>
          </div>
          <div class="service-txt">
            <h5>Free Delivery</h5>
            <p>Free Shipping On All Order</p>
          </div>
        </div>
        <div class="col-lg-3 d-flex col-md-6 product">
          <div class="service-icon mr-3">
            <i class="fas fa-dollar-sign"></i>
          </div>
          <div class="service-txt">
            <h5>Money Return</h5>
            <p>Back Guarantee In 7 Days</p>
          </div>
        </div>
        <div class="col-lg-3 d-flex col-md-6 product">
          <div class="service-icon mr-3">
            <i class="fas fa-tags"></i>
          </div>
          <div class="service-txt">
            <h5>Member Discount</h5>
            <p>Onevery Order Over $130.00</p>
          </div>
        </div>
        <div class="col-lg-3 d-flex col-md-6 product">
          <div class="service-icon mr-3">
            <i class="fas fa-user-clock"></i>
          </div>
          <div class="service-txt">
            <h5>Online Support</h5>
            <p>Support 24 Hours A Day</p>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  props: {

  },
};
</script>

<style scoped lang="scss">
.service-icon i {
  font-size: 40px;
}

.service-txt {
  h5 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
}
</style>
