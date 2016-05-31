"use strict";

const ExtractTextPlugin = require('extract-text-webpack-plugin'),
	production = require('minimist')(process.argv.slice(2)).production,
 	webpack = require('webpack'),
	path = require('path'),
	postcssPlugins = [
		require('postcss-import'),
		//require('postcss-nested')(),
		require('postcss-cssnext')(),
		require('postcss-calc')()
	];

module.exports = [{
	context: `${__dirname}/src`,
	entry: production ? [
			'./app'
		] : [
			'webpack-dev-server/client?http://localhost:8100',
			'./app'
		],
	output: {
		path: `${__dirname}/dist`,
		filename: "app.js",
		library: "app",
		libraryTarget: 'var',
		publicPath: '/dist/',
	},
	module: {
		preLoaders: [{
			test: /.js?$/,
			loaders: ['babel', 'eslint'],
			include: path.resolve('src/')
		}]
	},
	devtool: 'source-map',
	eslint: {
		configFile: '.eslintrc.json'
	}
}, {
	context: `${__dirname}/pcss`,
	entry: [
		'webpack-dev-server/client?http://localhost:8100',
		'./style.pcss'
	],
	output: {
		path: `${__dirname}/dist`,
		filename: "style.css",
		publicPath: '/dist/',
	},
	module: {
		loaders: [{
			test: /\.css$|\.pcss$/,
			loader: ExtractTextPlugin.extract("style", ["css", "postcss"])
		}, {
			test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
			loader: 'url-loader?limit=100000'
		}]
	},
	postcss: postcssPlugins,
	plugins: [
		new ExtractTextPlugin("style.css", { allChunks: true })
	]
}];
