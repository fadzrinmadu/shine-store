<template>
  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="logoutModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="logoutModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="#" v-on:click.prevent="logout">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from '@/firebase.js';

export default {
  name: 'LogoutModal',
  methods: {
    logout() {
      fb.auth().signOut()
        .then(() => {
          $('#logoutModal').modal('hide');
          this.$router.replace('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style>
  
</style>
