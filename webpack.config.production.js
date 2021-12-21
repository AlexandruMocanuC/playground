const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
    home: {
      dependOn: 'app',
      import: './src/pages/Home/index.js',
    },
    flamingo: {
      dependOn: 'app',
      import: './src/pages/Flamingo/Home.js',
    },
    flamingo: './src/pages/Flamingo/style.scss',
    'flamingo/services': {
      dependOn: 'flamingo',
      import: './src/pages/Flamingo/Services.js',
    },
    'flamingo/about': {
      dependOn: 'flamingo',
      import: './src/pages/Flamingo/About.js',
    },
    'flamingo/works': {
      dependOn: 'flamingo',
      import: './src/pages/Flamingo/Works.js',
    },
    'flamingo/contact': {
      dependOn: 'flamingo',
      import: './src/pages/Flamingo/Contact.js',
    },
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/playground/',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      '~': path.join(__dirname, 'src'),
      '~c': path.join(__dirname, 'src', 'components'),
      '~s': path.join(__dirname, 'src', 'sections'),
    },
    extensions: ['.js', '.css', '.scss'],
  },
  optimization: {
    sideEffects: true,
    minimize: false,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
              },
              sourceMap: true,
              importLoaders: 2,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      chunks: ['app', 'home'],
      template: './src/index.html',
      inject: 'head',
    }),
    new HtmlWebPackPlugin({
      filename: 'flamingo/index.html',
      chunks: ['app', 'flamingo'],
      template: './src/index.html',
      inject: 'head',
    }),
    new HtmlWebPackPlugin({
      filename: 'flamingo/services/index.html',
      chunks: ['app', 'flamingo', 'flamingo/services'],
      template: './src/index.html',
      inject: 'head',
    }),
    new HtmlWebPackPlugin({
      filename: 'flamingo/about/index.html',
      chunks: ['app', 'flamingo', 'flamingo/about'],
      template: './src/index.html',
      inject: 'head',
    }),
    new HtmlWebPackPlugin({
      filename: 'flamingo/works/index.html',
      chunks: ['app', 'flamingo', 'flamingo/works'],
      template: './src/index.html',
      inject: 'head',
    }),
    new HtmlWebPackPlugin({
      filename: 'flamingo/contact/index.html',
      chunks: ['app', 'flamingo', 'flamingo/contact'],
      template: './src/index.html',
      inject: 'head',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/style.css',
      chunkFilename: '[name]/style.css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'static' }],
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor/vendor-manifest.json'),
    }),
  ],
};
