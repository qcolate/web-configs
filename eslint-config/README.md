# Qcolate Eslint Config

[![version][npm-img]][npm-url] [![license][license-img]][license-url]


## Installation

```bash
yarn add -D eslint @qcolate/eslint-config
```


## Usage

install config and deps

```bash
# React
yarn add -D eslint @qcolate/eslint-config \
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
yarn add -D eslint @qcolate/eslint-config \
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
  extends: ['@qcolate/eslint-config'], // for React [default]
  extends: ['@qcolate/eslint-config/nest'], // for Nest.js
};
```


## License

MIT © [Qcolate][qcolate-url]

<!-- link -->

[qcolate-url]: https://qcolate.com


[license-img]: https://img.shields.io/npm/l/@qcolate/eslint-config.svg?style=flat&colorA=000000&colorB=000000

[license-url]: ./LICENSE


[npm-img]: https://img.shields.io/npm/v/@qcolate/eslint-config?style=flat&colorA=000000&colorB=000000

[npm-url]: https://www.npmjs.com/package/@qcolate/eslint-config
