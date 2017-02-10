var webpack = require('webpack');

module.exports = {
    entry: './js/entry.js',
    output: {
        path: __dirname,
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()),
        new webpack.BannerPlugin(new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate()),
        new webpack.BannerPlugin('This file is created by zyj')
    ]
};
