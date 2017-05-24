const path = require('path');
const webpack = require('webpack');

const compiler = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './lib/js/'),
    filename: 'mapbox-superset.js',
    library: 'mapboxSuperset',
    libraryTarget: 'umd',
    sourceMapFilename: './mapbox-superset.js.map'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
}

module.exports = compiler
