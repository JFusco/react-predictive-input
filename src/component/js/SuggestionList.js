import React from 'react';
import PropTypes from 'prop-types';
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
  onItemOver: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  selectedSuggestion: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  renderSuggestions: PropTypes.bool.isRequired
};
