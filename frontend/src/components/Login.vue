<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

function sendLoginData() {
  fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  });
}
</script>

<template>
  <div class="page">
    <h1>LOGIN</h1>
    <form @submit.prevent="sendLoginData">
      <div class="input_box">
        <label for="mail">Mail</label>
        <input type="mail" id="mail" v-model="email" />
      </div>
      <div class="input_box">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button>LOG IN</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 3em;
  margin-top: 5em;
  width: 30%;
}

.input_box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.input_box label {
  font-size: 1.5rem;
}

.input_box input {
  width: 100%;
  margin-top: 1em;
  height: 2em;
  padding: 0.2em;
}

button {
  width: 20%;
  margin: 0 auto;
  padding: 0.7em;
  background-color: lightcyan;
}
</style>
