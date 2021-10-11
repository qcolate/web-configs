/* eslint-disable max-len */
const EXTENSIONS = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'];

module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['react', '@typescript-eslint'],
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
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
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
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    //
    //
    'react-hooks/exhaustive-deps': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    //
    //
    '@typescript-eslint/dot-notation': 0, // for className e.g. `styles['style-name']`
    '@typescript-eslint/no-unused-vars': 0, // for debug temp vars
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/lines-between-class-members': 0,
  },
};
