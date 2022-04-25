const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'cheap-module-source-map',
    entry: './src/index',
    output: {   // output is where the bundle will be created
        path: path.resolve(__dirname, 'build'),
        publicPath: '/', // path that will be used to access the bundle
        filename: 'bundle.js'
    },
    devServer: {
        stats: 'minimal', // minimal, normal, verbose
        overlay: true,  // show errors in browser
        historyApiFallback: true, // redirects all requests to index.html
        disableHostCheck: true, // allows to use localhost:3000
        headers: { 'Access-Control-Allow-Origin': '*' }, // allows to use localhost:3000
        https: false
    },
    plugins: [
        new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled JS.
            template: 'src/index.html',
            favicon: 'src/favicon.ico'
        })
    ],
    module: { // rules are used to specify how to handle different file types
        rules: [
            {
                test: /\.(js|jsx)$/, // test is used to match files
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'] //specify how to handle the matched files
            },
            {
                test: /(\.css)$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    }
}


