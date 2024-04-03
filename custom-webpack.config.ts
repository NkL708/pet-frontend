const webpack = require("webpack");

module.exports = {
  plugins: [new webpack.EnvironmentPlugin(["SERVER_IP"])],
};
