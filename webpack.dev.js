const webpack = require("webpack")
const path = require("path")

// Plugins
var HtmlWebpackPlugin = require("html-webpack-plugin")

// Experimental Plugins
const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin")

module.exports = {
  entry: ["react-hot-loader/patch", "react-error-overlay", "./src/index.tsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/dist"),
  },

  devServer: {
    hot: true,
    inline: true,
  },

  devtool: "cheap-module-source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src"),
        loader: [
          "react-hot-loader/webpack",
          "babel-loader",
          {
            loader: "awesome-typescript-loader",
            options: { useBabel: true, useCache: true, sourceMap: true },
          },
        ],
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          /* Loader options go here */
        },
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    // new DynamicCdnWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
