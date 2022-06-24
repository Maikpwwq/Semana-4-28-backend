// const webpack = require("webpack");
const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || "development";
// const ASSET_PATH = process.env.ASSET_PATH || "/";
const isDevelopment = NODE_ENV !== "production";

module.exports = {
  name: "client",
  target: isDevelopment ? "web" : "browserslist",
  entry: ["./src/main.js"],
  mode: NODE_ENV,
  output: {
    // these were set in vue.config.js
    // publicPath: ASSET_PATH,
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".vue", ".css", ".json"],
    alias: {
      vue: "@vue/compat",
    },
    fallback: {
      url: require.resolve('url/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        },
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader',
            },
        ],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            // options: { modules: true , localIdentName: '[local]_[hash:base64:5]' }
          },
          {
            loader: 'sass-loader',
            // Requires >= sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              // sassOptions: {
              //   indentedSyntax: true // optional
              // },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      template: path.resolve(__dirname, '/public/index.html'),
      filename: 'index.html',
      hash: true,
      templateParameters: {
          titulo: 'Naga Regeneracion y Tratamiento de Aguas',
      },
  }),
  ],
};
