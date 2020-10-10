const path = require ('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const isProd = env === 'production';

  return ({
    entry: './src/app.js',
    output: {
      path: path.join (__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.s?css$/i,
          use: [MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            }, {
              loader: 'sass-loader',
              options: { sourceMap: true },
            },
          ]
        },
      ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 8080,
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  });
};
