<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useAPIClientStore } from '@/stores/apiClientStore';
export default {
  mounted() {
    const { initAPIClient } = useAPIClientStore();
    initAPIClient();
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <div>hello world</div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
