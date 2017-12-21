const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = (env) => ({
  context: join(process.cwd(), 'src', 'app'),
  entry: './index',
  output: {
    path: join(process.cwd(), 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: join(process.cwd(), "dist"),
    port: 9000
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.d.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/, exclude: /node_modules/, use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: [require('babel-plugin-transform-vue-jsx')]
            }
          },
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env && env.NODE_ENV || 'production')
      }
    }),
    new HtmlWebpackPlugin({
      template: join(process.cwd(), 'src', 'index.html')
    }),
    new CleanWebpackPlugin([
      join(process.cwd(), 'dist', '*.html*'),
      join(process.cwd(), 'dist', '*.js*'),
    ])
  ]
});
