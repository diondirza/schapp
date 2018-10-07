module.exports = {
  presets: [['@babel/preset-env', { modules: false, useBuiltIns: 'entry' }]],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-transform-runtime', { helpers: false, regenerator: true }],
  ],
  env: {
    test: {
      presets: [['@babel/preset-env']],
    },
  },
};
