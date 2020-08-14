<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Overview</div>
          <router-link class="nav-link" exact to="/admin">
            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
            Dashboard
          </router-link>
          <div class="sb-sidenav-menu-heading">Menu</div>
          <router-link class="nav-link" exact to="/admin/products">
            <div class="sb-nav-link-icon"><i class="fas fa-archive"></i></div>
            Products
          </router-link>
          <router-link class="nav-link" exact to="/admin/orders">
            <div class="sb-nav-link-icon"><i class="fas fa-shopping-cart"></i></div>
            Orders
          </router-link>
          <div class="sb-sidenav-menu-heading">Utilities</div>
          <a class="nav-link" href="#" data-toggle="modal" data-target="#logoutModal">
            <div class="sb-nav-link-icon"><i class="fas fa-sign-out-alt"></i></div>
            Logout
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
.router-link-active {
  color: #fff !important;
}
</style>
