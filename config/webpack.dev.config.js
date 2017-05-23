const path = require('path')

const compiler = require('./webpack.config');

module.exports = Object.assign({}, compiler, {entry: './dev/js/index.js'});

