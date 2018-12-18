const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: 'show-password.js',
        path: __dirname + '/dist'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader', options: { minimize: false } }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}