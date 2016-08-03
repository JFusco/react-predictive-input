'use strict';

module.exports = (gulp, $) => {
	gulp.task('scss-lint', function() {
		return gulp.src('./src/scss/**/*.scss')
			.pipe($.scssLint({
				config: './.scsslint.yml',
				customReport: $.scssLintStylish
			}))
			.pipe($.scssLint.failReporter('E'))
			.pipe($.filelog('SCSS lint'));
	});
};
