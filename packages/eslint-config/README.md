# eslint-config-qcolate

ESlint config for Qcolate


<!--
[![Build Status][build-img]][build-url]
-->
[![NPM version][npm-img]][npm-url]
[![License: MIT][mit-img]][mit-url]

## Usage

install config

```bash
yarn add -D eslint eslint-config-qcolate
```

install config and deps

```bash
# React
yarn add -D eslint eslint-config-qcolate \
eslint-config-airbnb \
eslint-config-airbnb-base \
eslint-config-airbnb-typescript \
eslint-config-prettier \
eslint-import-resolver-typescript \
eslint-loader \
eslint-plugin-import \
eslint-plugin-jest \
eslint-plugin-jsx-a11y \
eslint-plugin-prettier \
eslint-plugin-react \
eslint-plugin-react-hooks \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
prettier
```


```bash
# Node
yarn add -D eslint eslint-config-qcolate \
eslint-config-airbnb-base \
eslint-config-airbnb-typescript \
eslint-config-prettier \
eslint-import-resolver-typescript \
eslint-loader \
eslint-plugin-import \
eslint-plugin-prettier \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
prettier
```


Create an .eslintrc.js in the root directory of your project, then copy the following content into it:

```javascript
// .eslintrc.js
module.exports = {
  extends: ['qcolate'], // for React [default]
  extends: ['qcolate'], // for Nest
};
```


## License

© [MIT][mit-url]

<!-- badges -->

[mit-img]: https://img.shields.io/badge/License-MIT-blue.svg

[mit-url]: ./LICENSE

[npm-img]: https://img.shields.io/npm/v/eslint-config-qcolate.svg

[npm-url]: https://www.npmjs.com/package/eslint-config-qcolate
