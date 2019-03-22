const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require('file-loader');
require("@babel/polyfill");
const CleanWebpackPlugin = require('clean-webpack-plugin');


const optimization = {
    splitChunks: {
        chunks: "all",
        cacheGroups: {
            utilities: {
                test: /[\\/]src[\\/]utilities[\\/]/,
                minSize: 0
            }
        }
    }
};

module.exports = {
    entry: {
        Home: ["@babel/polyfill", "./Scripts/Entries/Home/HomeEntry.tsx", "./Scripts/Entries/Home/_homeEntry.scss"]
    },
    resolve: {
        extensions: ['.ts', '.tsx', ".js", ".jsx", ".json"]
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: __dirname + '/wwwroot/bundles/',
        jsonpFunction: 'webpackJsonp'
    },
    mode: "production",
    optimization: optimization,
    plugins: [
        new UglifyJsPlugin(),
        require('autoprefixer'),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: [
                    "babel-loader",
                    "ts-loader"
                ]

            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: { "presets": ["react"] }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
                use: ['file-loader', { loader: 'image-webpack-loader', options: { bypassOnDebug: true, disable: true } }]
            }
        ]
    }
};