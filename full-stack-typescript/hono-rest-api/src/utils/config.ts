interface Config {
  serverPort: number;
  dbHost: string;
  dbPort: number;
  dbUser: string;
  dbPassword: string;
  dbDatabase: string;
}

const assert = (value: string | undefined, key: string) => {
  if (typeof value === 'undefined' || value === '') {
    throw new Error('Config Error: ' + key + ' is required');
  }
  return value;
};

export const getConfig = (): Config => ({
  serverPort: parseInt(assert(Bun.env.SERVER_PORT, 'SERVER_PORT')),
  dbHost: assert(Bun.env.DB_HOST, 'DB_HOST'),
  dbPort: parseInt(assert(Bun.env.DB_PORT, 'DB_PORT')),
  dbUser: assert(Bun.env.DB_USER, 'DB_USER'),
  dbPassword: assert(Bun.env.DB_PASSWORD, 'DB_PASSWORD'),
  dbDatabase: assert(Bun.env.DB_DATABASE, 'DB_DATABASE'),
});
