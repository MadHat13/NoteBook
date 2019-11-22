var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output:{
        path: path.resolve(__dirname,'./dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    }
}