var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Uglify = require('uglifyjs-webpack-plugin');
var Minify = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'out')
  },
  mode:'development',
  devServer: {
    contentBase:'out',
    port: 9900
  },
  // 应用loader
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [Minify.loader,'css-loader']
      },
      // html loader
      {
        test: /\.html$/,
        use: [
          // 对单独抽离的HTML文件进行配置
          {
            loader: 'file-loader',
            options:{
              name: 'index.html'
            }
          },
          //单独抽离html
          {
            loader:'extract-loader'
          },
          //找到html文件
          {
            loader:'html-loader'
          }
        ]
      },
      //js loader
      // {
      //   test: /\.js$/,
      //   use:['babel-loader']
      // },
      //img loader
      {
        test:/\.(png|jpg)$/,
        use:[
          {
            loader:'url-loader',
            // 对图片进行处理
            options:{
              limit:8192,// 当大于8192字节对它进行处理
              name:'img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  // 应用插件
  plugins:[
    new HtmlWebpackPlugin({
      // minify:{
      //   template: './src/index.html',
      //   collapseWhitespace:false
      // }
    }),
    // 对html进行压缩
    new Uglify(),
    // 对css单独打包
    new Minify({
      filename:'[name]_[contenthash:8].css'
    })
  ]
}