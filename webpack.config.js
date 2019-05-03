const path = require('path');

const config = {
  entry: './lib/components/Index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;