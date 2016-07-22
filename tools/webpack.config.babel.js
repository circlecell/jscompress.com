import CopyWebpackPlugin from 'copy-webpack-plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import path from 'path';

const { NODE_ENV } = process.env;

const entry = [];
const plugins = [];

if (NODE_ENV === 'development') {
    entry.push('webpack-dev-server/client?http://localhost:8100');
	plugins.push(new OpenBrowserPlugin({
		url: 'http://localhost:8100'
	}));
}

entry.push('./js/index');
plugins.push(new CopyWebpackPlugin([
	{ from: 'css/style.css', to: 'css/style.css' },
	{ from: 'index.html', to: 'index.html' },
	{ from: 'img', to: 'img' }
]));


module.exports = {
    entry,
    plugins,
    context: path.resolve(__dirname, '..'),
    output: {
        path: path.resolve('dist/'),
        filename: 'js/app.js',
        library: 'app',
        libraryTarget: 'var',
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loaders: ['babel', 'eslint'],
            include: path.resolve('js/')
        }]
    },
    devtool: 'source-map',
    eslint: {
        configFile: '.eslintrc.json'
    },

};
