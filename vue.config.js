const webpackConfig = require("./webpack.config.js");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
 transpileDependencies: ["vuetify"],
 configureWebpack: webpackConfig,
 // publicPath: '/',
 outputDir: 'dist',
 assetsDir: './assets/',
 //  css: {
 //    extract: true,
 //    modules: false,
 //    sourceMap: false,
 //  }
 runtimeCompiler: true,

 pluginOptions: {
   vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
 }
};
