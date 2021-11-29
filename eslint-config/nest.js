/* eslint-disable max-len */
const baseRules = require('./_base.rules');

const EXTENSIONS = ['.ts', '.d.ts', '.js', '.json'];

module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: false,
    es2021: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
    'import/resolver': {
      node: { extensions: EXTENSIONS },
      typescript: {},
    },
    'import/extensions': EXTENSIONS,
  },
  //
  // 0 (off) / 1 (warn) / 2 (error)
  rules: {
    ...baseRules.common,
    ...baseRules.typescript,
    ...baseRules.import,
    //
    // Nest.js
    'class-methods-use-this': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
