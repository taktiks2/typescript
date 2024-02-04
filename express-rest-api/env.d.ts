declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        readonly DATABASE_URL: string;
        readonly PORT: string;
      }
    }
  }
}
