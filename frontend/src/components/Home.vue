<script setup>
import { onMounted, ref, reactive } from "vue";

const state = reactive({
  allComments: [],
});

onMounted(() => {
  fetch("http://localhost:4000/comments")
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => state.allComments.push(item));
    })
    .catch((err) => console.log(err));
});
</script>

<template>
  <div class="page">
    <ul>
      <li
        class="comment_item"
        v-for="comment in state.allComments"
        :key="comment.title"
      >
        <h4>{{ comment.title }}</h4>
        <h5>{{ comment.description }}</h5>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-top: 3em;
}
.comment_item {
  list-style: none;
}
</style>
