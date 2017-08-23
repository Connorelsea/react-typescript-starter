const webpack = require("webpack")
const path = require("path")

// // `CheckerPlugin` is optional. Use it if you want async error reporting.
// // We need this plugin to detect a `--watch` mode. It may be removed later
// // after https://github.com/webpack/webpack/issues/3460 will be resolved.
// const { CheckerPlugin } = require("awesome-typescript-loader")

// module.exports = {
//   // Currently we need to add '.ts' to the resolve.extensions array.
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", ".jsx"],
//     modules: ["src", "node_modules"],
//   },

//   entry: ["index.ts"],

//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },

//   devtool: "eval",

//   // Add the loader for .ts files.
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         loader: ["babel-loader", "ts-loader"],
//       },

//       // {
//       //   test: /\.ts$/,
//       //   use: [
//       //     {
//       //       loader: "awesome-typescript-loader",
//       //       options: { sourceMap: true, useCache: true, useBabel: true },
//       //     },
//       //   ],
//       // },
//     ],
//   },

//   plugins: [new CheckerPlugin(), new webpack.HotModuleReplacementPlugin()],

//   devServer: {
//     contentBase: "./dist",
//     hot: true,
//   },

//   externals: {
//     react: "React",
//     "react-dom": "ReactDOM",
//   },
// }

var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/dist"),
  },

  devServer: {
    hot: true,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "cheap-module-source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
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
            options: { useBabel: true, useCache: true },
          },
        ],
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
    new webpack.HotModuleReplacementPlugin(),
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
}
