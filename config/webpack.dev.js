const path = require('path');

const getEntries = require('get-entries');

const op = require('./index.js');

const config = op.webpackConfig;

const entries = getEntries('./src/pages/**/index.ts', './dist');


Object.assign(config, {
	entry: entries,
	devServer: {
		contentBase: path.resolve('./'),
		compress: false,
		port: 9000,
		watchContentBase: true
	}
});

module.exports = config;
