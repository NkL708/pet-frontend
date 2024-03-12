const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'window.DEBUG': JSON.stringify(process.env.DEBUG),
    }),
  ],
};
