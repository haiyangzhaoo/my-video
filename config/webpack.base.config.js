const path    = require('path')
const webpack = require('webpack')

function resolve(pathname)
{
  return path.resolve(__dirname, pathname)
}

const baseConfig = {
  entry: {
    index: resolve('../src/index.js')
  },
  output: {
    path: resolve('../dist/zhy'),
    filename: 'bundle.[hash:6].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': resolve('../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [resolve('../src')],
        loader: 'babel-loader',
        options: {
          presets: ["@babel/react", "@babel/preset-env"]
        }
      },
      {
        test: /\.less/,
        exclude: /node_modules/,
        include: [resolve('../src')],
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.s?css/,
        // exclude: /node_modules/, // antd的要解析
        // include: [resolve('../src')], // antd的要解析
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|woff|eot|ttf|svg|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}

module.exports = baseConfig
