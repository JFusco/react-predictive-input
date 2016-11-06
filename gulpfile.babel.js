'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins({pattern: ['gulp-*', 'run-sequence', 'del'], scope: ['devDependencies']});

require('./gulp/bridge.js')(gulp, [
	'clean',
	'scss-lint'
], $);

gulp.task('default', cb => {
	$.runSequence('clean', 'scss-lint', () => {
		$.util.log($.util.colors.green.bold('FINISHED BUILD'));

		cb();
	});
});
