import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

const { NODE_ENV } = process.env;

const entry = [];

if (NODE_ENV === 'development') {
	entry.push('webpack-dev-server/client?http://localhost:8100');
}

entry.push('../js/index');

module.exports = {
	context: __dirname,
	entry,
	output: {
		path: path.resolve('dist/'),
		filename: 'js/app.js',
		library: 'app',
		libraryTarget: 'var',
	},
	module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel',
			include: path.resolve('src/')
		}]
	},
	devtool: 'source-map',
	eslint: {
		configFile: '.eslintrc.json'
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: 'css/style.css', to: 'css/style.css' },
			{ from: 'index.html', to: 'index.html' },
			{ from: 'img', to: 'img' }
		])
	]
};
