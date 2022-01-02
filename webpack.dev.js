const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = (env) => {
  return merge(common(env), {
    mode: 'development',
    target: 'web',
    devtool: 'eval',
    output: {
      pathinfo: true,
      publicPath: '/',
      filename: '[name].bundle.js',
    },
    devServer: {
      host: '0.0.0.0',
    },
  });
};