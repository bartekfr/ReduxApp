var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = function(){return {}};
webpackConfig.devtool = 'inline-source-map'

module.exports = function(config) {
	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '',
		plugins: [
			'karma-phantomjs-launcher',
			'karma-sourcemap-loader',
			"karma-spec-reporter",
			"karma-mocha",
			"karma-sinon",
			"karma-chai",
			"karma-webpack"
		],
		// frameworks to use
		frameworks: ['mocha', 'sinon', 'chai'],
		webpack: webpackConfig,
		// list of files / patterns to load in the browser
		files: [
			//'/src/main.js',
			'tests/test.bundle.js',
			//'test/**/*spec.js'
		],
		preprocessors: {
				// add webpack as preprocessor
				//'/src/main.js': ['webpack'],
				'tests/test.bundle.js': ['webpack', 'sourcemap'],
				//'/test/*spec.js': ['webpack', 'sourcemap']
		},
		reporters: ['spec'],
		specReporter: {
			maxLogLines: 10,         // limit number of lines logged per test
			suppressErrorSummary: false,  // do not print error summary
			suppressFailed: false,  // do not print information about failed tests
			suppressPassed: false,  // do not print information about passed tests
			suppressSkipped: true,  // do not print information about skipped tests
			showSpecTiming: false // print the time elapsed for each spec
		},
		// web server port
		port: 9876,
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,
		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		browsers: ['PhantomJS'],
		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,
		browserConsoleLogOptions: {
			level: 'log',
			terminal: true
		},
		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true
	});
};