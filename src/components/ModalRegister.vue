<template>
  <div class="modal fade" id="modalRegister" tabindex="-1" aria-labelledby="modalRegisterLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body py-3 pb-4">
          <nav class="nav nav-pills flex-column flex-sm-row" id="myTab" role="tablist">
            <a class="flex-sm-fill text-sm-center nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
            <a class="flex-sm-fill text-sm-center nav-link" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a>
          </nav>
          <div class="tab-content mt-4" id="myTabContent">
            <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
              <h4 class="my-4 text-center text-secondary">Login to your account</h4>
              <!-- Login Form -->
              <form>
                <div class="form-group">
                  <label for="emailLogin">Email address</label>
                  <input type="email" class="form-control" id="emailLogin">
                </div>
                <div class="form-group">
                  <label for="passwordLogin">Password</label>
                  <input type="password" class="form-control" id="passwordLogin">
                </div>
                <div class="btn-wrapper d-flex justify-content-end mt-4">
                  <button type="button" class="btn btn-secondary mr-2" data-dismiss="modal">Close Modal</button>
                  <button class="btn btn-primary" type="submit">Login</button>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
              <h4 class="my-4 text-center text-secondary">Create your account</h4>
              <!-- Signup Form -->
              <form>
                <div class="form-group">
                  <label for="fullnameSignup">Full name</label>
                  <input type="text" class="form-control" id="fullnameSignup" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                  <label for="emailSignup">Email address</label>
                  <input type="email" class="form-control" id="emailSignup" aria-describedby="emailHelp">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="passwordSignup">Password</label>
                  <input type="password" class="form-control" id="passwordSignup">
                </div>
                <div class="btn-wrapper d-flex justify-content-end mt-4">
                  <button type="button" class="btn btn-secondary mr-2" data-dismiss="modal">Close Modal</button>
                  <button class="btn btn-primary" type="submit">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Login</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalRegister',
}
</script>
