<script setup lang="ts">
const count = ref(0);

const handleClick = () => {
  count.value++; // ref の値を更新するには .value を使う
};
</script>

<template>
  <div>{{ count }}</div>
  <button @click="handleClick">Button!</button>
</template>
