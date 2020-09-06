<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-white py-3 fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="/images/logo.svg" alt="shine shop logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item mr-md-4">
              <router-link class="nav-link" exact to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item mx-md-4">
              <router-link class="nav-link" exact to="/products">Shop</router-link>
            </li>
            <li class="nav-item mx-md-4">
              <router-link class="nav-link" exact to="/features">Blog</router-link>
            </li>
            <li class="nav-item ml-md-4">
              <router-link class="nav-link" exact to="#">Contact</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click.prevent="showMiniCart">
                <i class="fas fa-shopping-cart"></i> 
                (<span>0</span>)
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user"></i>
                Guest
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modalRegister">Login or Signup</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <modal-register></modal-register>
  </header>
</template>

<script>
import ModalRegister from './ModalRegister.vue';

export default {
  name: 'Navbar',
  props: {

  },
  components: {
    'modal-register': ModalRegister,
  },
  methods: {
    showMiniCart() {
      $('#miniCart').modal('show');
    }
  },
};
</script>

<style scoped lang="scss">
.nav-link {
  color: #1B2437 !important;
  font-family: 'Playfair Display', serif;
  font-size: 20px;

  &.router-link-active {
    text-decoration: line-through;
  }
}
</style>
