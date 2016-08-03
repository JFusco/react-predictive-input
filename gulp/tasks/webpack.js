'use strict';

module.exports = (gulp, $) => {
	gulp.task('webpack', () => {
		return gulp.src('./src/js/Autocomplete.js', {read: false})
			.pipe($.shell('webpack --display-chunks --display-modules --progress --colors'));
	});
};
