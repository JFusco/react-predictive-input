'use strict';

module.exports = (gulp, $) => {
	gulp.task('babel', () => {
		return gulp.src('./src/js/Autocomplete.js', {read: false})
			.pipe($.shell('babel src/js --out-dir dist-components'));
	});
};
