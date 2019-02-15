const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

let prod = false;
if (process.env.NODE_ENV === 'production') {
    prod = true;
}

let config = {
    entry: "./src/js/app.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./www/js"),
        filename: "./main.js"
    },
    devtool: prod ? "source-map" : "eval-source-map", // I have to test this
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../css/fonts/'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {}
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../img/', // relative to MiniCssExtractPlugin loader
                            name:'[name].[ext]'
                        }
                    }
                ],
            }]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "../css/styles.css"}), // relative path to output.path above
        new CopyWebpackPlugin([{ from: "src/index.html", to: "../index.html" }]), // copy index.html into www
    ],
    optimization: {
        minimizer: [],
    }
};

module.exports = config;

if (prod) {
    module.exports.plugins.push(new OptimizeCSSAssetsPlugin());
    module.exports.optimization.minimizer.push(new UglifyJsPlugin());
}