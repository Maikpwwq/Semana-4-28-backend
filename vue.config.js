const webpackConfig = require("./webpack.config.js");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
 transpileDependencies: ["vuetify"],
 configureWebpack: webpackConfig,

 // output.path
 publicPath: '', 
 outputDir: './dist',

 runtimeCompiler: true,

//  css: {
//    extract: true,
//    modules: false,
//    sourceMap: false,
//  }
};
