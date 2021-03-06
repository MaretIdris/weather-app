// Webpack Configuration for Development.

const path = require('path');

module.exports = {
  entry: './src/main',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './docs'),
  },
  watch: true,
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './docs'),
    compress: true,
    hot: true,
    open: true,
  },
};
