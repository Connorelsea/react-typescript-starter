const webpack = require("webpack")
const path = require("path")

// Plugins
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
var CompressionPlugin = require("compression-webpack-plugin")
var SizeAnalyzerPlugin = require("webpack-bundle-size-analyzer")
  .WebpackBundleSizeAnalyzerPlugin
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin
var HtmlWebpackPlugin = require("html-webpack-plugin")

// Experimental Plugins
const PrepackWebpackPlugin = require("prepack-webpack-plugin").default
const ShakePlugin = require("webpack-common-shake").Plugin

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/dist"),
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
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          screw_ie8: true,
          dead_code: true,
          drop_debugger: true,
          evaluate: true,
          conditionals: true,
          booleans: true,
          if_return: true,
          inline: true,
          join_vars: true,
          unused: true,
          drop_console: true,
          unsafe: true,
          unsafe_comps: true,
        },
      },
      mangle: {
        screw_ie8: true,
      },
      // Check? Do sourcemaps work with parallel enabled?
      parallel: {
        cache: true,
        workers: 2,
      },
      ie8: false,
      cache: true,
      workers: 2,
      beautify: false,
      comments: false,
      sourceMap: true,
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 0,
      minRatio: 0,
    }),
    new SizeAnalyzerPlugin("size_report.txt"),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "size_report_visual.html",
      defaultSizes: "gzip",
    }),
  ],
}
