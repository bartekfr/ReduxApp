var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
	filename: "bundle.css",
});

module.exports =  {
	entry: ['babel-polyfill', __dirname + "/js/app.js"],
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js",
		publicPath: '/dist'
	},
	devtool: '#source-map',
	module: {
		rules: [{
			loader: 'babel-loader',
			exclude: /node_modules/,
			test: /\.js/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ["transform-object-rest-spread"]
			}
		}, {
			test: /\.scss$/,
			loader: extractSass.extract({
				loader: [{
					loader: "css-loader"
				}, {
					loader: "sass-loader",
					options:{
						outputStyle: 'compressed',
					includePaths: ['node_modules/foundation-sites/scss']
					}
				}]
			})
			},{
			test: /(foundation\.core)/,
			use: 'exports-loader?foundation=jQuery.fn.foundation'
		}]
	},
	plugins: [
		extractSass,
		new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery"
		})
	]
};
