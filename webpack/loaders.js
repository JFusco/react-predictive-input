'use strict';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const { NODE_ENV } = process.env;

const loaders = [
	{
		loader: 'babel',
		exclude: '/node_modules/',
		test: /\.js?$/
	}
];

if(NODE_ENV === 'prod'){
	loaders.push({
			loader: ExtractTextPlugin.extract(
				'style',
				'css?sourceMap!sass?sourceMap'
			),
			test: /\.scss$/
		}
	);
}else{
	loaders.push({
			loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
			test: /\.scss$/
		}
	);
}

export default loaders;
