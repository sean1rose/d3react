var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/dist/'
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      // test: /\.js$/,
      test: /\.js|\.jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    }]
  }
};
