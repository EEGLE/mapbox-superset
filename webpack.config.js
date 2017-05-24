const path = require('path');
const webpack = require('webpack');

const defaultLibrary = {
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
  }
}

const minimizedLibrary = Object.assign({}, defaultLibrary, {
   output: {
    path: path.resolve(__dirname, './lib/js/'),
    filename: 'mapbox-superset.min.js',
    library: 'mapboxSuperset',
    libraryTarget: 'umd',
    sourceMapFilename: './mapbox-superset.min.js.map'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
});

module.exports = [defaultLibrary, minimizedLibrary]
