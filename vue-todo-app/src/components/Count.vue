<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const titleClass = ref('title')

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">Count up!</button>
  <h1 :class="titleClass">Count is {{ count }}</h1>
</template>

<style>
.title {
  color: red;
}
</style>
