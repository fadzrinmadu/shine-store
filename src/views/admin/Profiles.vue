<template>
  <main>
    <div class="container-fluid">
      <h1 class="mt-4">Profiles</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Profiles</li>
      </ol>
      <div class="card mb-4">
        <div class="card-body">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-profiles-tab" data-toggle="tab" href="#nav-profiles" role="tab" aria-controls="nav-profiles" aria-selected="true">Profile</a>
              <a class="nav-item nav-link" id="nav-settings-tab" data-toggle="tab" href="#nav-settings" role="tab" aria-controls="nav-settings" aria-selected="false">Account Settings</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-profiles" role="tabpanel" aria-labelledby="nav-profiles-tab">

              <!-- Form profiles -->
              <form class="mt-4">
                <div class="row">
                  <div class="col-md-5">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="First name" v-model="profile.firstname">
                    </div>  
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Last name" v-model="profile.lastname">
                    </div>  
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-10">
                    <div class="form-group">
                      <textarea class="form-control" placeholder="Your address" rows="5" v-model="profile.address"></textarea>
                    </div>  
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-5">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Phone number" v-model="profile.phone">
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Post code" v-model="profile.postcode">
                    </div>  
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 text-right">
                    <button class="btn btn-primary w-100" v-on:click.prevent="updateProfile">Save Changes</button>
                  </div>
                </div>
              </form>
              <!-- / Form profiles -->

            </div>
            <div class="tab-pane fade" id="nav-settings" role="tabpanel" aria-labelledby="nav-settings-tab">

              <!-- Form account settings -->
              <form class="mt-4">
                <div class="row">
                  <div class="col-md-5">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="User name">
                    </div>  
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <input type="email" class="form-control" placeholder="Email address">
                    </div>  
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-5">
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="New password">
                    </div>  
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Confirm password">
                    </div>  
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-10">
                    <div class="form-group">
                      <input type="file" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <button class="btn btn-success w-100" v-on:click.prevent="resetPassword">Reset Password</button>
                  </div>
                  <div class="col-md-3">
                    <button class="btn btn-primary w-100">Save Changes</button>
                  </div>
                </div>
              </form>
              <!-- / Form account settings -->

            </div>
          </div>
          
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { fb, db } from '@/firebase';

export default {
  name: 'Profiles',
  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection('profiles').doc(user.uid),
    }
  },
  data() {
    return {
      profile: {
        firstname: null,
        lastname: null,
        phone: null,
        address: null,
        postcode: null,
      },
      account: {
        name: null,
        email: null,
        photoURL: null,
        emailVerified: null,
        password: null,
        confirmPassword: null,
        uid: null,
      }
    }
  },
  methods: {
    resetPassword() {
      const auth = fb.auth();
      auth.sendPasswordResetEmail(auth.currentUser.email)
        .then(() => {
          console.log('Email sent');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateProfile() {
      this.$firestore.profile.update(this.profile);
    }
  }
}
</script>
