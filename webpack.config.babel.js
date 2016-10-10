'use strict';

import webpack from 'webpack';
import path from 'path';
import config from './config.json';

const { library, entry, fileName } = config.scripts;

module.exports =  {
	entry: {
		[fileName]: `./src/js/${entry}.js`,
		[`${fileName}.min`]: `./src/js/${entry}.js`
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		libraryTarget: 'umd',
		library
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				exclude: '/node_modules/',
				test: /\.js?$/
			}
		]
	},
	externals: {
		'react': 'React'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			comments: false,
			beautify: false,
			mangle: {
				screw_ie8 : true
			},
			compress: {
				warnings: false,
				drop_console: true
			},
			output: {
				comments: false
			}
		})
	],
	resolve: {
		extensions: ['', '.js']
	}
};
