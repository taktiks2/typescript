#### typescript環境構築

```
npm install -D typescript @types/node ts-node
```

#### tsconfig.jsonの作成
```
{
  "compilerOptions": {
    "skipLibCheck": true,
    "esModuleInterop": true,
    "strict": true,
    "resolveJsonModule": true,
    "outDir": "./dist",
    "baseUrl": "./src",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "env.d.ts"],
  "exclude": ["node_modules"]
}
```

#### prettierとeslintの設定
```
npm install -D prettier eslint eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin npm-run-all
```

#### eslintの設定
```
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {},
};

```

#### prettierの設定
```
module.exports = {
  tabWidth: 2,
  printWidth: 120,
  trailingComma: "es5",
  semi: true,
  singleQuote: false,
};

```

#### pakcage.jsonの編集
```
{
  "scripts": {
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "lint": "run-p -l -c --aggregate-output lint:*",
    "lint:eslint": "eslint src/**/*.ts",
    "lint:prettier": "prettier --check .",
    "fix": "run-s -l -c fix:eslint fix:prettier",
    "fix:eslint": "eslint --fix src/**/*.ts",
    "fix:prettier": "prettier --write ."
  },
  "devDependencies": {...}
}
```

#### .editorconfigの作成
```
root = true

[*]
end_of_line = lf
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.json]
indent_style = space
indent_size = 2

[*.js]
indent_style = space
indent_size = 2

[*.yml]
indent_style = space
```
