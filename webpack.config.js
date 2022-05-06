const path = require("path");
const package = require("./package.json");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, package.source),
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
    library: {
      name: "ReactTranslate",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        include: /src/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "source-map",
  externals: {
    react: "react",
  },
};
