var HTMLWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
    entry: {
        index: __dirname + '/src/index.jsx',
        water: __dirname + '/src/water.jsx',
        earth: __dirname + '/src/earth.jsx',
        about: __dirname + '/src/about.jsx',
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            modifyVars: {
                            }
                        }
                    }
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader"
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
        }),
        new HTMLWebpackPlugin({
            inject: true,
            chunks: ["earth"],
            filename: "earth.min.html",
            template: __dirname + "/views/earth.html"
        }),
        new HTMLWebpackPlugin({
            inject: true,
            chunks: ["about"],
            filename: "about.min.html",
            template: __dirname + "/views/about.html"
        })
    ]
};