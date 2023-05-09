/* eslint-disable max-len */
const baseRules = require('./_base.rules');

const TS_EXTENSIONS = ['.ts', '.tsx', '.d.ts', '.json'];
const JS_EXTENSIONS = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'];

module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['import', 'react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 12,
    project: ['tsconfig.json'],
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
    __IS_DEV__: true,
    __IS_PROD__: true,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': TS_EXTENSIONS,
    },
    'import/resolver': {
      node: { extensions: JS_EXTENSIONS },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'import/extensions': JS_EXTENSIONS,
  },
  //
  // 0 (off) / 1 (warn) / 2 (error)
  rules: {
    ...baseRules.common,
    ...baseRules.typescript,
    ...baseRules.import,
    'import/order': [
      2,
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    //
    // react
    'react-hooks/exhaustive-deps': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/no-unused-class-component-methods': 0,
    'react/no-unstable-nested-components': 0,
    'react/function-component-definition': 0,
  },
};
