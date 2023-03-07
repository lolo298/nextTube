const path = require("path");
module.exports = {
  //define entry file and output
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.js",
  },
  //define babel loader
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
