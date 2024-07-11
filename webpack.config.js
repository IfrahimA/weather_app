const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'template', 
        filename: 'index.html',
        template: './src/index.html'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: 
  {
    static: {
      directory: path.resolve('__dirname', 'dist')
    }, 
    port: 3000, 
    open: true, 
    hot: true, 
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',    
      },
    ],
  },  
};