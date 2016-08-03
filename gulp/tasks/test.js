'use strict';

module.exports = (gulp, $) => {
	gulp.task('test', () => {
		return gulp.src('./src/js/Autocomplete.js', {read: false})
			.pipe($.shell('npm test'));
	});
};
