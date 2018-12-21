const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const appName = require('../route').name;

module.exports = {
  name: appName,

  watch:true,

  mode: 'development',

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },

  entry: ['@babel/polyfill', path.resolve(__dirname, `../../${appName}/app.js`)],

  output: {
    path: path.resolve(__dirname, '../../../dist', appName),
    filename: '[name].[hash].js',
    publicPath: `/${appName}/assets/`,
  },

  optimization: {
    runtimeChunk: false,
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../../../'),
    }),
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],

  externals: [
    'canvas',
  ],

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              // localIdentName: '[local]_[hash:base64:5]'
            },
          },
          'sass-loader',
        ],
      },
      // WOFF Font
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash].[ext]',
            outputPath: 'fonts/',
            publicPath: '/admin/assets/fonts/',
            mimetype: 'application/font-woff',
          },
        },
      },
      // WOFF2 Font
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash].[ext]',
            outputPath: 'fonts/',
            publicPath: '/admin/assets/fonts/',
            mimetype: 'application/font-woff',
          },
        },
      },
      // TTF Font
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash].[ext]',
            outputPath: 'fonts/',
            publicPath: '/admin/assets/fonts/',
            mimetype: 'application/octet-stream',
          },
        },
      },
      // EOT Font
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
          },
        },
      },
      // SVG Font
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: '[name].[hash].[ext]',
            // mimetype: 'image/svg+xml',
          },
        },
      },
      // Common Image Formats
      {
        test: /images\/.*/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            publicPath: '/admin/assets/images/',
          },
        },
      },
      // Audio Files
      {
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'audio/',
            publicPath: '/admin/assets/audio/',
          },
        },
      },
      // SVG Files
      {
        test: /\.svg$/,
        use: 'svg-url-loader',
      },
      {
        test: /\.jsx?$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': ['@babel/preset-env', '@babel/preset-react'],
            'plugins': ['lodash', ['transform-class-properties', { 'spec': true }], ['@babel/plugin-proposal-decorators', { 'legacy': true }]],
            'babelrc': false,
          },
        },
      },
      {
        test: /\.jsx?$/,
        include: /node_modules\/@take2/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              'presets': ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
              'plugins': [['transform-class-properties', { 'spec': true }],  ['@babel/plugin-proposal-decorators', { 'legacy': true }]],
              'babelrc': false,
            },
          },
        ],
      },
    ],
  },
};
