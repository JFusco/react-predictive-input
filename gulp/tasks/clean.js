'use strict';

module.exports = (gulp, $) => {
	gulp.task('clean', () => {
		$.del(['dist/**', 'dist-components/**', 'coverage/**']).then(paths => {
			$.util.log($.util.colors.green.bold(`Deleted files and folders: ${paths.join('\n')}`));
		});
	});
};
