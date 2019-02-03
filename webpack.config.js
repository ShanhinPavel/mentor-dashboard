const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },

  node: {
    fs: "empty"
  },

  devtool: 'cheap-eval-source-map',
 
  devServer: {
    stats: 'errors-only'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    
    new CopyWebpackPlugin([
      { from: './src/mentor-student.json', to: './' }
    ]),

    // new WriteFilePlugin()
  ]
};



