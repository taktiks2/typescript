import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import spellcheck from 'eslint-plugin-spellcheck';

export default [
  { ignores: ['eslint.config.mjs', 'prettier.config.mjs'] },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      spellcheck,
    },
  },
  eslintConfigPrettier,
  {
    rules: {
      'no-console': 'error',
      'no-nested-ternary': 'error',
      yoda: 'error',
      'spellcheck/spell-checker': [
        'warn',
        {
          minLength: 4,
          skipWords: ['hono', 'middlewares', 'openapi', ''],
        },
      ],
    },
  },
];
