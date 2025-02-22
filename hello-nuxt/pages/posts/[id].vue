<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1>post page</h1>
    <div>{{ route.params.id }}</div>
  </div>
</template>
