'use strict';

module.exports = (gulp, $) => {
	gulp.task('eslint', () => {
		return gulp.src('./src/**/*.js', {read: false})
			.pipe($.shell('eslint --fix --ignore-path .eslintignore ./src/js/*'))
			.pipe($.filelog('Fixing JS'));
	});
};
