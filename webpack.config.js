module.exports =  {
	entry: __dirname + "/js/app.js",
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js",
		publicPath: '/dist'
	},
	module: {
		loaders: [{
			loader: 'babel',
			exclude: /node_modules/,
			test: /\.js/,
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]

		}]
	},
  sassLoader: {
    outputStyle: 'compressed'
  }
}