/* eslint-disable max-len */
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
    // common
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
    // import
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
    // react
    'react-hooks/exhaustive-deps': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    //
    // ts
    '@typescript-eslint/dot-notation': 0, // for className e.g. `styles['style-name']`
    '@typescript-eslint/no-unused-vars': 0, // for debug temp vars
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/lines-between-class-members': 0,
  },
};
