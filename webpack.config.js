var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports =  {
	entry: __dirname + "/js/app.js",
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js",
		publicPath: '/dist'
	},
	devtool: '#source-map',
	module: {
		loaders: [{
			loader: 'babel',
			exclude: /node_modules/,
			test: /\.js/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ["transform-object-rest-spread"]
			}
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract(
			'style',
			'css!sass'
			)
		}]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css')
	],
	sassLoader: {
		outputStyle: 'compressed',
		includePaths: ['node_modules/foundation-sites/scss']
	}
}