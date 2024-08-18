import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

// NOTE: DB接続用のクライアント作成
const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "user",
  password: "userpassword",
  database: "userdatabase",
  ssl: false, // NOTE: docker containerに接続する場合はfalse
});

await client.connect();
const db = drizzle(client);

export default db;
