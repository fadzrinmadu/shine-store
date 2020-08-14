<template>
  <div class="col-lg-7">
    <div class="card shadow-lg border-0 rounded-lg mt-5">
      <div class="card-header">
        <h3 class="text-center font-weight-light my-3">Sign Up</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="small mb-1" for="inputFirstName">First Name</label>
                <input class="form-control py-4" id="inputFirstName" type="text" placeholder="Enter first name" v-model="firstname" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="small mb-1" for="inputLastName">Last Name</label>
                <input class="form-control py-4" id="inputLastName" type="text" placeholder="Enter last name" v-model="lastname" />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="small mb-1" for="inputEmailAddress">Email</label>
            <input class="form-control py-4" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Enter email address" v-model="email" />
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="small mb-1" for="inputPassword">Password</label>
                <input class="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" v-model="password" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="small mb-1" for="inputConfirmPassword">Confirm Password</label>
                <input class="form-control py-4" id="inputConfirmPassword" type="password" placeholder="Confirm password" />
              </div>
            </div>
          </div>
          <div class="form-group mt-4 mb-0">
            <button class="btn btn-primary btn-block" v-on:click.prevent="signup">Create Account</button>
          </div>
      </form>
      </div>
      <div class="card-footer text-center">
        <div class="small text-dark"><router-link to="/auth">Have an account? Go to login</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from '@/firebase.js';
 
export default {
  name: 'SignUp',
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
    }
  },
  methods: {
    signup() {
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // mengisi document baru di profiles
          db.collection('profiles').doc(user.user.uid).set({
            firstname: this.firstname,
            lastname: this.lastname
          });

          this.$router.replace('/admin');
        })
        .catch((error) => {
          // handle error 
          console.log(error);
        });
    }
  }
}
</script>

<style>
  
</style>
