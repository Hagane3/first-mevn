<script setup></script>

<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
.navbar {
  background-color: rgb(235, 235, 235);
  border-bottom: 1px solid lightgray;
  padding: 1em 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.navbar ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
}

.navbar li {
  list-style: none;
  font-size: 1.5rem;
}
</style>
