const path    = require('path')
const webpack = require('webpack')
const {merge}   = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const htmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const PORT = 8000

function resolve(pathname)
{
  return path.resolve(__dirname, pathname)
}

const devConfig = {
  mode: 'development',
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // JSON.stringify('development')
      IS_DEVELOPMETN: true
    }),
    // 将打包后的资源注入到html文件内
    new htmlWebpackPlugin({
      template: resolve('../public/index.html'),
      filename: 'app.html',
      inject: true,
      minify: {
        removeComments: true,
      }
    }),
    new OpenBrowserPlugin({
      url: `http://30.77.42.23:${PORT}`,
    })
  ],
  devServer: {
    // host: '30.77.42.23',
    port: PORT,
    historyApiFallback: true,
    contentBase: resolve('../dist'),
    open: true,
    proxy: {
      '/api': {
        target: "http://php.test.com:8081",
        pathRewrite: {"^/api" : ""},
        secure: false,
        changeOrigin: true
      }
    }
  }
}

module.exports = merge(webpackConfigBase, devConfig)
