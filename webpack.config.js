"use strict";

const production = require('minimist')(process.argv.slice(2)).production,
 	webpack = require('webpack'),
	CopyWebpackPlugin = require('copy-webpack-plugin'),
	path = require('path');



const NODE_ENV = process.env.NODE_ENV;

const entry = [];

if(NODE_ENV === 'development') {
    entry.push('webpack-dev-server/client?http://localhost:8100');
}

entry.push('./js/index');

module.exports = {
	context: __dirname,
	entry,
	output: {
		path: `${__dirname}/dist`,
		filename: "js/app.js",
		library: "app",
		libraryTarget: 'var',
	},
	module: {
		loaders: [{
			test: /.js?$/,
			loaders: ['babel', 'eslint'],
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
