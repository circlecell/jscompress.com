/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import CopyWebpackPlugin from 'copy-webpack-plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import path from 'path';

const { NODE_ENV } = process.env;

const entry = [];
const plugins = [];

if (NODE_ENV === 'development') {
    entry.push('webpack-dev-server/client?http://localhost:8100');
    plugins.push(new OpenBrowserPlugin({
        url: 'http://localhost:8100',
        ignoreErrors: true
    }));
}

entry.push(
    'babel-polyfill',
    './js/index'
);

plugins.push(new CopyWebpackPlugin([
    { from: 'css', to: 'css' },
    { from: 'index.html' },
    { from: 'img', to: 'img' },
    { from: 'icons', to: 'icons' }
]));

module.exports = {
    entry,
    plugins,
    context: path.resolve(__dirname, '..'),
    output: {
        path: path.resolve('dist/'),
        filename: 'js/app.js',
        library: 'app',
        libraryTarget: 'var'
    },
    module: {
        rules: [{
            test: /.js?$/,
            use: ['babel-loader'],
            include: path.resolve('js/')
        }]
    },
    devtool: 'source-map'
};
