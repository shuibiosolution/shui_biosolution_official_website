var HTMLWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
    entry: {
        index: __dirname + '/src/index.jsx',
        water: __dirname + '/src/water.jsx',
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                // exclude: ["/node_modules/", "/public/", "/routes/", "/src/", "/app.js", "/server.js"],
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: ["/public/stylesheets/"],
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader',"less-loader"]
            },
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build',
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            chunks: ["index"],
            filename: "index.min.html",
            template: __dirname + "/views/index.html"
        }),
        new HTMLWebpackPlugin({
            inject: true,
            chunks: ["water"],
            filename: "water.min.html",
            template: __dirname + "/views/water.html"
        })
    ]
};