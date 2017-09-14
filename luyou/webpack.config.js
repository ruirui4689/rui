var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ["babel-loader"]
        }, {
            test: /\.html$/,
            use: ["html-loader"]
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.vue$/,
            use: ["vue-loader"]
        }, {
            test: /\.png|gif|jpg/,
            use: ["url-loader"]
        }]
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    devServer: {
        contentBase: __dirname + "/src/static",
        watchContentBase: true,
        compress: true,
        hot: true,
        port: 9990,
        host: "localhost"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons"
        })
    ]
}