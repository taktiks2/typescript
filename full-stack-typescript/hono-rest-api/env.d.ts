declare module 'bun' {
  interface Env {
    SERVER_PORT: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
  }
}
