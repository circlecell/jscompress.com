/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import CopyWebpackPlugin from 'copy-webpack-plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import path from 'path';

const { NODE_ENV, PORT } = process.env;

const entry = [];
const plugins = [];

if (NODE_ENV === 'development') {
    entry.push(`webpack-dev-server/client?http://localhost:${PORT}`);
    plugins.push(new OpenBrowserPlugin({
        url: `http://localhost:${PORT}`,
        ignoreErrors: true
    }));
}

if (NODE_ENV === 'production') {
    plugins.push(new UglifyJSPlugin());
}

entry.push(
    'babel-polyfill',
    './js/index'
);

plugins.push(new CopyWebpackPlugin([
    { from: 'css', to: 'css' },
    { from: 'index.html' },
    { from: 'privacy-policy.html' },
    { from: 'img', to: 'img' },
    { from: 'icons', to: 'icons' }
]));

module.exports = {
    entry,
    plugins,
    devServer: {
        port: PORT
    },
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
    resolve: {
        alias: {
            Babel: 'babel-standalone'
        }
    },
    devtool: 'source-map'
};
