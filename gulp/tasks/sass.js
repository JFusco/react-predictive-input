'use strict';

module.exports = (gulp, $) => {
	gulp.task('sass', ['scss-lint'], () => {
		return gulp.src('./src/scss/**/*.scss')
			.pipe($.sass().on('error', $.sass.logError))
			.pipe(gulp.dest('./dist'))
			.pipe($.filelog('SASS'));
	});
};
