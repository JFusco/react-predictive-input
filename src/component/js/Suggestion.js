import React from 'react';
import PropTypes from 'prop-types';

const Suggestion = props => {
  return (
    <li
      role="option"
      { ...props } />
  );
};

export default Suggestion;

Suggestion.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};
