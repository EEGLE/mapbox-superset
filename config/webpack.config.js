const path = require('path')

const compiler = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, '../dist/js/'),
    filename: 'bundle.js',
    library: 'mapbox-superset',
    libraryTarget: 'var',
    sourceMapFilename: './bundle.js.map'
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

module.exports = compiler
