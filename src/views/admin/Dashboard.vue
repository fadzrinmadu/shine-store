<template>
  <main>
    <div class="container-fluid">
      <h1 class="mt-4">Dashboard</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item">
          Welcome, <span class="text-success font-weight-bold">{{ name }}</span>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
import { fb } from '@/firebase.js';

export default {
  name: 'Dashboard',
  data() {
    return {
      name: null
    }
  },
  methods: {

  },
  created() {
    // get current user
    let user = fb.auth().currentUser;
    this.name = user.email;
  }
}
</script>
