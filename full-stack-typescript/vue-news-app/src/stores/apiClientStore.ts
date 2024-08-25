import { defineStore, type _GettersTree } from 'pinia';
import { APIClient } from '@/libs/apiClient';

interface State {
  apiClient: APIClient;
}

interface Actions {
  initAPIClient(): void;
}

export const useAPIClientStore = defineStore<string, State, _GettersTree<State>, Actions>({
  id: 'apiClientStore',
  state: () => ({
    apiClient: new APIClient(),
  }),
  actions: {
    initAPIClient() {
      this.apiClient = new APIClient();
    },
  },
});
