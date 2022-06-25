// const webpack = require("webpack");
const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
// const VueLoaderPlugin = require("vue-loader-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const NODE_ENV = process.env.NODE_ENV || "development";
// const ASSET_PATH = process.env.ASSET_PATH || "/";
const isDevelopment = NODE_ENV !== "production";

module.exports = {
  name: "client",
  target: isDevelopment ? "web" : "browserslist",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: ["./src/main.js"],
  mode: NODE_ENV,
  output: {
    // these were set in vue.config.js
    // publicPath: ASSET_PATH,
    path: __dirname + "/dist",
    filename: "[name].[contenthash].js",
    sourceMapFilename: "[name].[contenthash].map",
    chunkFilename: "[id].[contenthash].js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ["*", ".js", ".vue", ".css", ".json"],
    alias: {
      // vue: "@vue/compat",
      // vue: "@vue/runtime-dom",
      // vue$: "vue/dist/vue.esm.js",
    },
    fallback: {
      url: require.resolve("url/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        // options: {
        //   compilerOptions: {
        //     compatConfig: {
        //       MODE: 2,
        //     },
        //   },
        // },
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s(c|a)ss$/,
        // oneOf: [
        use: [
          "vue-style-loader", // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            // Requires >= sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
              // sassOptions: {
              //   indentedSyntax: true // optional
              // },
            },
          },
        ],
      },
      // {
      //   test: /\.s(c|a)ss$/,
      //   use: [
      //     "vue-style-loader",
      //     {
      //       loader: "css-loader",
      //       // options: { modules: true , localIdentName: '[local]_[hash:base64:5]' }
      //     },
      //     {
      //       loader: "sass-loader",
      //       // Requires >= sass-loader@^8.0.0
      //       options: {
      //         implementation: require("sass"),
      //         // sassOptions: {
      //         //   indentedSyntax: true // optional
      //         // },
      //       },
      //     },
      //   ],
      // },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new VueLoaderPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      appMountId: "root",
      template: path.resolve(__dirname, "/public/index.html"),
      filename: "index.html",
      inject: "body",
      hash: true,
      templateParameters: {
        titulo: "Naga Regeneracion y Tratamiento de Aguas",
      },
    }),
  ],
};
