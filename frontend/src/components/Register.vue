<script setup></script>

<template>
  <div class="page">
    <h1>REGISTER</h1>
    <form action="">
      <div class="input_box">
        <label for="mail">Mail</label>
        <input type="mail" id="mail" />
      </div>
      <div class="input_box">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button>CREATE ACCOUNT</button>
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
  width: 50%;
  margin: 0 auto;
  padding: 0.7em;
  background-color: lightcyan;
}
</style>
