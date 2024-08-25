To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000


コンテナの起動
```
docker-compose up -d
```

以下でコンテナに入ることができる
```
docker exec -it postgres_container /bin/bash
```

postgresのコンテナに入ったら以下でpsqlを起動できる
```
psql -U user -d userdatabase
```


ボリュームの削除
```
docker volume rm hono-rest-api_postgres_data
```
