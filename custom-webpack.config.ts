const webpack = require("webpack");

module.exports = {
  plugins: [new webpack.EnvironmentPlugin(["COMMIT_SHA", "SENTRY_DSN"])],
};
