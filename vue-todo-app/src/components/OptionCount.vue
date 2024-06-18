<script lang="ts">
export default {
  data() {
    return {
      title: 'Hello, Vue 3!',
      titleClass: 'title',
      count: 0,
      buttonText: 'Count up!'
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template>
  <h1 :class="titleClass">{{ title }}</h1>
  <p>Count: {{ count }}</p>
  <button @click="increment">{{ buttonText }}</button>
</template>

<style>
.title {
  color: red;
}
</style>
