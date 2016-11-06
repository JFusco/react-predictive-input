'use strict';

import path from 'path';
import plugins from './webpack/plugins';
import loaders from './webpack/loaders';
import entry from './webpack/entry';
import output from './webpack/output';

const { NODE_ENV } = process.env;

const config = {
	devtool: NODE_ENV === 'prod' ? 'source-map' : 'eval',
	entry,
	output,
	module: {
		loaders
	},
	plugins,
	resolve: {
		extensions: ['', '.js']
	}
};

if(NODE_ENV === 'prod'){
	config.externals = {
		'react': {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react'
		}
	};
}else{
	config.devServer = {
		contentBase: path.join(__dirname, 'src/component'),
		port: 8080
	};
}

module.exports = config;
