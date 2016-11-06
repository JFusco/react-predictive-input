'use strict';

import React from 'react';

const Suggestion = props => {
	return (
		<li
			role="option"
			{ ...props } />
	);
};

export default Suggestion;

Suggestion.propTypes = {
	onMouseOver: React.PropTypes.func.isRequired,
	onMouseDown: React.PropTypes.func.isRequired,
	className: React.PropTypes.string.isRequired
};
