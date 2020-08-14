<template>
  <div class="bg-primary login">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <router-view></router-view>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
}
</script>
