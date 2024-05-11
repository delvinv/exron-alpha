<template>
  <!-- Fixed navbar -->
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><RouterLink class="routerLink" :to="{ name: 'dashboard' }">ExRoN Rostering</RouterLink></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><RouterLink class="routerLink" :to="{ name: 'dashboard' }">Dashboard</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink class="routerLink" :to="{ name: 'settings' }">Settings</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink class="routerLink" :to="{ name: 'about' }">About</RouterLink></a
            >
          </li>
        </ul>
        <span class="navbar-text nav-item">
          <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            >Login/Register</a
          >
        </span>
      </div>
    </div>
  </nav>
  <div class="mb-7"></div>
</template>

<style scoped>
/* nav a {
    font-weight: bold;
    color: #2c3e50;
    }
    nav a.router-link-exact-active {
    color: #42b983;
    } */
.routerLink {
  text-decoration: none;
  color: inherit;
}
</style>

<script setup></script>
