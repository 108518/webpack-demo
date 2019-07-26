const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('Html-Webpack-Plugin');


module.exports = {
  entry: glob.sync('./src/js/*.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(eot|svg|ttf|otf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
	plugins: [
    new CleanWebpackPlugin(),
	  new HtmlWebpackPlugin({
      title: 'webpack 打包测试',
      template:"./src/index.html",
      filename: 'index.html',
      hash: true,
      minify: {
        removeComments: true, //是否去除注释
        collapseWhitespace: false //是否压缩页面内容
      }
      }),
    new HtmlWebpackPlugin({
      template:"./src/page2.html",
      filename: 'page2.html',
      hash: true,
      minify: {
        removeComments: true, //是否去除注释
        collapseWhitespace: true //是否压缩页面内容
      }
      })
	]
};