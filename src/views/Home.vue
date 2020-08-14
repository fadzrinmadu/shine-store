<template>
  <div class="home">
    <app-navbar></app-navbar>
    <app-slideshow></app-slideshow>
    <product-offers></product-offers>
    <app-services></app-services>
    <app-product></app-product>
    <app-footer></app-footer>
    <mini-cart></mini-cart>>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideShow from '@/components/SlideShow.vue';
import ProductOffers from '@/components/ProductOffers.vue';
import Services from '@/components/Services.vue';
import Products from '@/components/Products.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    'app-slideshow': SlideShow,
    'product-offers': ProductOffers,
    'app-services': Services,
    'app-product': Products,
    'app-footer': Footer,
  },
};
</script>

<style>

</style>
