import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import spellcheck from 'eslint-plugin-spellcheck';

export default [
  { ignores: ['eslint.config.js', 'prettier.config.js'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  ,
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
          skipWords: [],
        },
      ],
    },
  },
];
