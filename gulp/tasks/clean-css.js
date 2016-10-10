'use strict';

import configuration from '../../config.json';

module.exports = (gulp, $) => {
	gulp.task('cleanCSS', () => {
		return gulp.src(`./dist/${configuration.css.fileName}.css`)
			.pipe($.cleanCss({
				debug: true
			}, details => {
				$.util.log($.util.colors.red.bold(`${details.name} -> original file size: ${details.stats.originalSize}`));
				$.util.log($.util.colors.green.bold(`${details.name} -> minified file size: ${details.stats.minifiedSize}`));
			}))
			.pipe($.rename({extname: '.min.css'}))
			.pipe($.filelog('minify CSS'))
			.pipe(gulp.dest('./dist/'));
	});
};
