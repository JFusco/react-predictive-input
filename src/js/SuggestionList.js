'use strict';

import React from 'react';
import Suggestion from './Suggestion';

const SuggestionList = ({
	value,
	onItemOver,
	onItemClick,
	renderSuggestions,
	selectedSuggestion,
	data,
	id,
	...itemProps
	}) => {

	const onOver = index => {
		onItemOver(index);
	};

	const onClick = value => {
		onItemClick(value);
	};

	const markSuggestion = (input, query) => {
		const escapedRegex = query.trim().replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

		return {
			__html: input.replace(new RegExp(escapedRegex, 'gi'), '<mark>$&</mark>')
		};
	};

	const items = renderSuggestions ? data.map((item, i) => {
		itemProps.className = (selectedSuggestion === i) ? 'active' : '';
		itemProps.onMouseOver = onOver.bind(this, i);
		itemProps.onMouseDown = onClick.bind(this, item);

		return (
			<Suggestion
				key={i}
				dangerouslySetInnerHTML={markSuggestion(item, value)}
				{ ...itemProps } />
		);
	}) : null;

	return (
		<ul
			id={id}
			role="listbox">

			{items}
		</ul>
	);
};

export default SuggestionList;

SuggestionList.propTypes = {
	onItemOver: React.PropTypes.func.isRequired,
	onItemClick: React.PropTypes.func.isRequired,
	selectedSuggestion: React.PropTypes.number.isRequired,
	id: React.PropTypes.string.isRequired,
	renderSuggestions: React.PropTypes.bool.isRequired
};
