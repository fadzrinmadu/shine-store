<template>
  <div class="admin sb-nav-fixed">
    <app-topnav></app-topnav>
    <div id="layoutSidenav">
      <app-sidenav></app-sidenav>
      <div id="layoutSidenav_content">
        <router-view></router-view>
        <app-footer></app-footer>
      </div>
    </div>
    <logout-modal></logout-modal>
  </div>
</template>

<script>
import TopNav from '@/components/admin/TopNav.vue';
import SideNav from '@/components/admin/SideNav.vue';
import Footer from '@/components/admin/Footer.vue';
import LogoutModal from '@/components/admin/LogoutModal.vue';

export default {
  name: 'Admin',
  components: {
    'app-topnav': TopNav,
    'app-sidenav': SideNav,
    'app-footer': Footer,
    'logout-modal': LogoutModal,
  },
  methods: {

  }
}
</script>

<style>

</style>
