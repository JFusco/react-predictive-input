'use strict';

import webpack from 'webpack';
import config from '../config.json';

const { entry, fileName } = config.scripts;
const { NODE_ENV } = process.env;
const entryFile = {};

if(NODE_ENV === 'prod'){
	entryFile[fileName] = `./src/component/js/${entry}.js`;
}else{
	entryFile.index = './src/component/';
}

export default entryFile;
