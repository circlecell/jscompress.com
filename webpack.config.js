"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin"),
 	webpack = require('webpack'),
	path = require('path'),
	postcssPlugins = [
		require('postcss-import'),
		require('postcss-url')({
			url: "inline",
			from: "pcss/stype.pcss"
		}),
		require('postcss-nested')(),
		require('postcss-cssnext')(),
		require('postcss-calc')()
	];

module.exports = [{
	context: `${__dirname}/src`,
	entry: {
		app: './app'
	},
	output: {
		path: `${__dirname}/js`,
		filename: "[name].js",
		library: "[name]"
	},
	module: {
		preLoaders: [{
			test: /.js?$/,
			loaders: ['babel', 'eslint'],
			include: path.resolve('src/')
		}, {
			test: /\.css$|\.pcss$/,
			loader: "style-loader!css-loader!postcss-loader"
		}]
	},
	postcss: postcssPlugins,
	devtool: 'source-map',
	eslint: {
		configFile: '.eslintrc.json'
	}
}, {
	context: `${__dirname}/pcss`,
	entry: {
		style: './style.pcss'
	},
	output: {
		path: `${__dirname}/css`,
		filename: "[name].css"
	},
	module: {
		loaders: [{
			test: /\.css$|\.pcss$/,
			loader: ExtractTextPlugin.extract("style", ["css", "postcss"])
		}]
	},
	postcss: postcssPlugins,
	plugins: [
	   new ExtractTextPlugin("style.css", {
		   allChunks: true
	   })
   ]
}];

Господа, в проект нужно подключить либу, которая создаёт глобальную переменную.
