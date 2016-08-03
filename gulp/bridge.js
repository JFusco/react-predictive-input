'use strict';

module.exports = (gulp, tasks, $) => {
	tasks.forEach(name => {
		require('./tasks/' + name)(gulp, $);
	});
};
