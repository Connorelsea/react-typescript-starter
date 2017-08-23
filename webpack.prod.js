const Merge = require("webpack-merge")
const CommonConfig = require("./webpack.dev.js")
const webpack = require("webpack")

// Plugins
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
var CompressionPlugin = require("compression-webpack-plugin")
var SizeAnalyzerPlugin = require("webpack-bundle-size-analyzer")
  .WebpackBundleSizeAnalyzerPlugin
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          screw_ie8: true,
          dead_code: true,
          evaluate: true,
          conditionals: true,
          booleans: true,
          unused: true,
          drop_console: true,
          unsafe: true,
          unsafe_comps: true,
          pure_getters: true,
        },
      },
      mangle: {
        screw_ie8: true,
      },
      ie8: false,
      cache: true,
      workers: 2,
      beautify: false,
      comments: false,
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
    new SizeAnalyzerPlugin("size_report.txt"),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "size_report_visual.html",
      defaultSizes: "gzip",
    }),
  ],
})
