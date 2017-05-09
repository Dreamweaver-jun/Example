var webpack = require('webpack');

module.exports = {
    entry: './js/entry.js',                 //唯一入口文件
    output: {
        path: __dirname,                    //打包后的文件存放的地方
        filename: 'js/bundle.js'            //打包后输出文件的文件名
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()),
        new webpack.BannerPlugin(new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate()),
        new webpack.BannerPlugin('This file is created by zyj')
    ]
};
