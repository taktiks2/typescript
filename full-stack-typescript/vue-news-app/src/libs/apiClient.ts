import { Configuration, UsersApi, PostsApi } from 'open-api';

export class APIClient {
  usersApi: UsersApi;
  postsApi: PostsApi;

  constructor() {
    const conf = new Configuration({ basePath: 'http://localhost:3000' });
    this.usersApi = new UsersApi(conf);
    this.postsApi = new PostsApi(conf);
  }
}
