const path = require('path');

module.exports = (api, options = {}) => {
  api.cache(true);

  const __DEV__ = process.env.NODE_ENV !== 'production';
  const __TEST__ = process.env.NODE_ENV === 'jest' || process.env.NODE_ENV === 'test';

  const runtimePath = __TEST__ ? false : path.dirname(require.resolve('@babel/runtime/package.json'));
  const runtimeVersion = require('@babel/runtime/package.json').version;

  const {
    ignoreBrowserslistConfig = process.env.NODE_ENV === 'test',
    // entry file list
    // Undocumented option of @babel/plugin-transform-runtime.
    // When enabled, an absolute path is used when importing a runtime helper after transforming.
    // This ensures the transpiled file always use the runtime version required in this package.
    // However, this may cause hash inconsistency if the project is moved to another directory.
    // So here we allow user to explicit disable this option if hash consistency is a requirement
    // and the runtime version is sure to be correct.
    absoluteRuntime = runtimePath,
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime#version
    // By default transform-runtime assumes that @babel/runtime@7.0.0-beta.0 is installed,
    // which means helpers introduced later than 7.0.0-beta.0 will be inlined instead of imported.
    // See https://github.com/babel/babel/issues/10261
    // And https://github.com/facebook/docusaurus/pull/2111
    version = runtimeVersion,
  } = options;

  const presets = [
    [
      require('@babel/preset-env'),
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: 3,
        // exclude transforms that make all code slower
        exclude: ['transform-typeof-symbol'],
      },
    ],
    [
      require('@babel/preset-react'),
      {
        development: __DEV__,
        // will use the native built-in instead of trying to polyfill behavior for any plugins that require one.
        useBuiltIns: true,
      },
    ],
    [
      require('@babel/preset-typescript'),
      {
        // this is important for proper files watching
        // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/blob/master/examples/babel-loader/.babelrc.js
        onlyRemoveTypeImports: true,
      },
    ],
  ];

  const plugins = [
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    [require('@babel/plugin-proposal-class-properties'), { loose: true }],
    [require('@babel/plugin-proposal-numeric-separator')],
    [
      require('@babel/plugin-transform-runtime'),
      {
        corejs: false,
        regenerator: true,
        absoluteRuntime,
        version,
      },
    ],
    // Optional chaining and nullish coalescing are supported in @babel/preset-env,
    // but not yet supported in webpack due to support missing from acorn.
    // These can be removed once webpack has support.
    // See https://github.com/facebook/create-react-app/issues/8445#issuecomment-588512250
    [require('@babel/plugin-proposal-optional-chaining')],
    [require('@babel/plugin-proposal-nullish-coalescing-operator')],
    // supported lodash
    [require('babel-plugin-lodash')],
    // supported antd (ant design)
    [
      require('babel-plugin-import'),
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ];

  return {
    sourceType: 'unambiguous',
    overrides: [
      {
        presets,
        plugins,
        env: {
          development: {},
          production: {
            plugins: [
              [require('@babel/plugin-transform-react-inline-elements')],
              [require('babel-plugin-transform-react-remove-prop-types')],
            ],
          },
        },
        exclude: [/@babel[/\\]runtime/, /core-js/],
      },
    ],
  };
};
