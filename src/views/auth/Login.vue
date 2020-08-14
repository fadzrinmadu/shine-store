<template>
  <div class="col-lg-5">
    <div class="card shadow-lg border-0 rounded-lg mt-5">
      <div class="card-header">
        <h3 class="text-center font-weight-light my-3">Login</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label class="small mb-1" for="inputEmailAddress">Email</label>
            <input class="form-control py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" v-model="email" />
          </div>
          <div class="form-group">
            <label class="small mb-1" for="inputPassword">Password</label>
            <input class="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" v-model="password" />
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
              <label class="custom-control-label" for="rememberPasswordCheck">Remember password</label>
            </div>
          </div>
          <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
            <a class="small" href="password.html">Forgot Password?</a>
            <button class="btn btn-primary" v-on:click.prevent="login">Login</button>
          </div>
        </form>
      </div>
      <div class="card-footer text-center">
        <div class="small"><router-link to="/auth/signup">Need an account? Sign up!</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from '@/firebase.js';

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      fb.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace('/admin');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
}
</script>

<style>
  
</style>
