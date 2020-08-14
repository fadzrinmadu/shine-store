<template>
  <section class="my-5 py-5 offers">
    <div class="container">
      <div class="row mb-5">
        <div class="col">
          <h2>Deal Of The Week</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="col-12 d-flex pt-4 pb-3 bg-light product">
            <img class="product-img" src="/images/products/offers/offer1.jpg" alt="">
            <div class="product-details ml-4">
              <h4>Auis Nostrum Uilamb</h4>
              <p class="font-weight-bold"><strike class="text-secondary">$85.00</strike> $60.00</p>
              <p class="text-danger">Hurry Up Deals Ends!!</p>
              <div class="time mb-4">
                <span><b>863</b> <br> Days</span>
                <span><b>11</b> <br> Hours</span>
                <span><b>52</b> <br> Mins</span>
                <span><b>1</b> <br> Secs</span>
              </div>
              <button class="btn btn-primary"><i class="fas fa-shopping-cart"></i> Add To Chart</button>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="col-12 d-flex pt-4 pb-3 bg-light product">
            <img class="product-img" src="/images/products/offers/offer2.jpg" alt="">
            <div class="product-details ml-4">
              <h4>Denimad Minima Veniam</h4>
              <p class="font-weight-bold"><strike class="text-secondary">$98.00</strike> $85.00</p>
              <p class="text-danger">Hurry Up Deals Ends!!</p>
              <div class="time mb-4">
                <span><b>703</b> <br> Days</span>
                <span><b>10</b> <br> Hours</span>
                <span><b>44</b> <br> Mins</span>
                <span><b>27</b> <br> Secs</span>
              </div>
              <button class="btn btn-primary"><i class="fas fa-shopping-cart"></i> Add To Chart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductOffers',
  props: {

  },
};
</script>

<style scoped lang="scss">
.product-img {
  width: 180px;
  height: 246px;
  object-fit: contain;
}

.time {
  span {
    background: #ddd;
    width: 54px;
    height: 54px;
    box-sizing: border-box;
    padding: 4px;
    display: inline-block;
    text-align: center;
    margin-right: 8px;
  }
}
</style>
