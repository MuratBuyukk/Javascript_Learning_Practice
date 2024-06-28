const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common,{
    mode: 'production',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: {
            removeComments: true,
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyURLs: true,
            preserveLineBreaks: true
        }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash:4].css"
    })
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              //"style-loader", 
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
    }
});