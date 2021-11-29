module.exports = {
  common: {
    // common
    'max-len': [2, 80],
    'no-console': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'no-restricted-exports': 0,
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

  },
  typescript: {
    '@typescript-eslint/dot-notation': 0, // for className e.g. `styles['style-name']`
    '@typescript-eslint/no-unused-vars': 0, // for debug temp vars
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/lines-between-class-members': 0,
  },
  import: {
    'import/named': 0,
    'import/prefer-default-export': 0,
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
  }
}
