// webpack的配置文件遵循着commonjs规范

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: "development", // 打包方式：production(生产环境-默认) development(开发环境)，区别为是否进行打包混淆
  // mode: "development",
  // watch: false, // 是否开启监视模式，若开启进行打包时会自动监视文件变化
  entry: './src/main.js',
  output: {
    // resolve: 将当期的相对路径解析成绝对路径
    // path: path.resolve("./dist/"),
    // 对当期的相对路径和项目的绝对路径拼接，获得文件的绝对路径
    path: path.join(__dirname, "./dist/"),
    filename: "bundle.js"
  },
  devServer: {
    open: true, // 自动打开
    port: 3000, // 端口号
    compress: true, // 是否启用压缩
    // contentBase: './src', // 开发环境目录
    hot: true // 热模块更替
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin( [
        { from: path.resolve(__dirname, 'assets'), to: 'assets' },
      ],
    )


  ],
  module: {
    // webpack读取loader时，是从右到左读取的，会将
    rules: [
      {
        test: /\.css$/,
        // webpack读取loader时，是从右到左读取的，会将css文件先交给最右侧的loader来处理
        // loader的执行顺序是管道的方式链式调用
        // css-loader: 解析css文件
        // style-loader: 将解析出来的结果放到html中
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ["style-loader", 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|bmp|gif)$/,
        // url-loader是file-loader的包装升级，要使用ta必须先安装file-loader
        use: {
          loader: "url-loader",
          options: {
            // 一定体积内的图片，打包成base64格式
            limit: 5 * 1024,
            // 文件输出目录
            outputPath: 'images',
            // 保留原图片名和扩展名，中间添加哈希值
            name: '[name]-[hash:5].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|svg|ttf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
