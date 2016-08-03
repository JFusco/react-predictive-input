'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins({pattern: ['gulp-*', 'run-sequence', 'del', 'minimist'], scope: ['devDependencies']});
const argv = $.minimist(process.argv.slice(2));

require('./gulp/bridge.js')(gulp, [
	'eslint',
	'webpack',
	'babel',
	'scss-lint',
	'sass',
	'clean-css',
	'test',
	'watch',
	'clean'
], $);

gulp.task('default', cb => {
	$.runSequence('clean', 'sass', 'cleanCSS', 'eslint', 'webpack', 'babel', () => {
		$.util.log($.util.colors.green.bold('FINISHED BUILD'));

		if(argv.w){
			$.runSequence('watch');
		}

		cb();
	});
});
