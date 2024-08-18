import { defineConfig } from "drizzle-kit";

// NOTE: migration用の設定
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/services/db/schema.ts",
  out: "./src/services/db/migrations",
  dbCredentials: {
    host: "127.0.0.1",
    port: 5432,
    user: "user",
    password: "userpassword",
    database: "userdatabase",
    ssl: false, // NOTE: docker containerに接続する場合はfalse
  },
});
