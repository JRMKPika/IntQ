const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

console.log(`Launching in ${process.env.NODE_ENV} mode`);

module.exports = {
  entry: './client/index.js',
  mode: process.env.NODE_ENV,

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'client'),
    },
    compress: true,
    port: 8080,
    hot: true,
    proxy: {
      '*': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/transform-async-to-generator',
            ],
          },
        },
      },

      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,

        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
};
// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: {
//     index: './client/index.js',
//   },
//   output : {
//     path: path.resolve(__dirname, 'build'),
//     filename : "bundle.js",
//     publicPath: '/build',
//   },
//   module : {
//     rules : [
//         {
//             test : /\.jsx?/,
//             exclude : /node_modules/,
//             use : {
//                 loader: "babel-loader",
//                 options : {
//                     presets : ["@babel/preset-env", "@babel/preset-react"],
//                 }
//             }
//         },
//         {
//             test: /\.css$/i,
//             use: ["style-loader", "css-loader"],
//         }
//     ]
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, '/client'),
//     },
//     compress: true,
//     port: 8080,
//     proxy: {
//       '/api': 'http://localhost:3000',
//     },
//   },
// };
