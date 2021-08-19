const path = require("path");

module.exports = {
  mode: "development",
  entry: "./run.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: false,
  resolve: {
    // symlinks: false,
  },
};
