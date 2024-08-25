<script lang="ts">
import { type V1UsersIdGet200Response as User } from 'open-api';
import { useAPIClientStore } from '@/stores/apiClientStore';
export default {
  data() {
    return {
      users: [] as User[],
    };
  },
  methods: {},
  async mounted() {
    const { apiClient } = useAPIClientStore();
    try {
      const users = await apiClient.usersApi.v1UsersGet();
      this.users = users;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch' + error);
    }
  },
};
</script>

<template>
  <main>
    <div>test test test</div>
    <div v-for="user in users" :key="user.id">
      <div>{{ user.id }}</div>
      <div>{{ user.name }}</div>
    </div>
  </main>
</template>

<style scoped></style>
