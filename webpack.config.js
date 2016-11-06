'use strict';

const webpack = require("webpack");
const localConfig = require('./gulp/config.local.js');
const path = require('path');

module.exports = {
  // Root directory of sources.
  context: __dirname + "/assets/scripts",

  // Devtools.
  devtool: "#cheap-source-map",

  // Entry points.
  entry: {
    global: [
      "./bootstrap.js",
      "./global.js",
    ],
  },

  // Destination folder of the bundles.
  output: {
    path: __dirname + "/js",
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    // publicPath: path.resolve(__dirname, "js"),
  },

  // Bundling methods, loaders, etc.
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: [["es2015", {modules: false}]], plugins: [
            "babel-plugin-transform-es2015-template-literals",
            "babel-plugin-transform-es2015-literals",
            "babel-plugin-transform-es2015-function-name",
            "babel-plugin-transform-es2015-arrow-functions",
            "babel-plugin-transform-es2015-block-scoped-functions",
            "babel-plugin-transform-es2015-classes",
            "babel-plugin-transform-es2015-object-super",
            "babel-plugin-transform-es2015-shorthand-properties",
            "babel-plugin-transform-es2015-computed-properties",
            "babel-plugin-transform-es2015-for-of",
            "babel-plugin-transform-es2015-sticky-regex",
            "babel-plugin-transform-es2015-unicode-regex",
            "babel-plugin-check-es2015-constants",
            "babel-plugin-transform-es2015-spread",
            "babel-plugin-transform-es2015-parameters",
            "babel-plugin-transform-es2015-destructuring",
            "babel-plugin-transform-es2015-block-scoping",
            "babel-plugin-transform-es2015-typeof-symbol",
            ["babel-plugin-transform-regenerator", { async: false, asyncGenerators: false }],
          ]}
        }],
      },
    ],
  },

  // Resolve paths.
  resolve: {
    modules: [
      __dirname + "/assets/scripts",
      __dirname + "/node_modules",
    ]
  },

  // Webpack Dev Server
  devServer: {
    proxy: {
      "**": localConfig.webpack.contentBase
    }
  },

  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
  }
};
