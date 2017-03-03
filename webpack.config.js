var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
const { resolve } = require('path');

const extractSass = new ExtractTextPlugin({
	filename: "bundle.css",
});

module.exports =  {
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/only-dev-server',
		'babel-polyfill', __dirname + "/js/app.js"
	],
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js",
		publicPath: '/dist'
	},
	devtool: '#source-map',
	devServer: {
		hot: true,
		publicPath: '/dist'
	},
	module: {
		rules: [{
			exclude: /node_modules/,
			test: /\.js/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [['es2015', {modules: false}], "stage-2", "react"],
					plugins: ["react-hot-loader/babel"]
				}
			}]
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
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	]
};
