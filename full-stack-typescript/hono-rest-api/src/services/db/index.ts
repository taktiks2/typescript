import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import { getConfig } from '@/utils/config';

const config = getConfig();

// NOTE: DB接続用のクライアント作成
const client = new Client({
  host: config.dbHost,
  port: config.dbPort,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
  ssl: false, // NOTE: docker containerに接続する場合はfalse
});

await client.connect();
const db = drizzle(client);

export default db;
