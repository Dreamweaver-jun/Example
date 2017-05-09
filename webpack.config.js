var webpack = require('webpack');

module.exports = {
    entry: './js/entry.js',                 //Ψһ����ļ�
    output: {
        path: __dirname,                    //�������ļ���ŵĵط�
        filename: 'js/bundle.js'            //���������ļ����ļ���
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
