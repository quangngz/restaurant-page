const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "home.html",
      template: "./src/home.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html",
    }),
    new HtmlWebpackPlugin({
      filename: "menu.html",
      template: "./src/menu.html",
    }),
    new HtmlWebpackPlugin({
      filename: "reservation.html",
      template: "./src/reservation.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }, 
      {
        test: /\.html$/i,
        use: ["html-loader"],
      }
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/**/*.html"],
    open: true,
    historyApiFallback: {
      index: '/home.html'
    },
  }
};