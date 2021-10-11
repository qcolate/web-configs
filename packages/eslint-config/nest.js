/* eslint-disable max-len */
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
    'max-len': [2, 80],
    'no-console': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    //
    //
    'import/named': 0,
    'import/prefer-default-export': 0,
    'import/no-mutable-exports': 1, // for mobx displayName by `babel-plugin-add-react-displayname`
    'import/extensions': [
      2,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
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
        // pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    //
    //
    // Nest.js
    'class-methods-use-this': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    //
    //
    '@typescript-eslint/dot-notation': 0, // for className e.g. `styles['style-name']`
    '@typescript-eslint/no-unused-vars': 0, // for debug temp vars
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/lines-between-class-members': 0,
  },
};
