var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './polyfills.ts',
    'vendor': './vendor.ts',
    'app': './app/main.ts',
    'budgeted-app': './budgeted-app/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('assets','assets/marketing.css'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['budgeted-app', 'app', 'vendor', 'polyfills']
    // }),
   
    new HtmlWebpackPlugin({
      inject: true,
      chunks:['budgeted-app', 'vendor', 'polyfills'],        
      template: 'budgeted.html',
      filename:'budgeted.html'
      
    }),
     new HtmlWebpackPlugin({
      inject: true,
      chunks:['app', 'vendor', 'polyfills'],
      template: 'Index.html',
      filename:'index.html'
    }),
  ]
};

