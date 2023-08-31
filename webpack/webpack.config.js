const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  mode: 'development',
  entry: path.join(__dirname, '../src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.bundle.min.js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true })],
  },
  resolve: {
    fallback: {
      os: false,
      fs: false,
      util: false,
      path: false,
      stream: false,
      crypto: false,
    },
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['thread-loader', 'babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: ['cache-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2|eot)$/i,
        use: ['file-loader'],
      },
    ],
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public', 'index.html'),
    }),
    new CheckerPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public', filter: path => path.indexOf('html') === -1 }],
    }),
  ],
});
