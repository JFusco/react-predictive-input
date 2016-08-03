'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Suggestion = require('./Suggestion');

var _Suggestion2 = _interopRequireDefault(_Suggestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SuggestionList = function SuggestionList(_ref) {
	var value = _ref.value;
	var onItemOver = _ref.onItemOver;
	var onItemClick = _ref.onItemClick;
	var renderSuggestions = _ref.renderSuggestions;
	var selectedSuggestion = _ref.selectedSuggestion;
	var data = _ref.data;
	var id = _ref.id;

	var itemProps = _objectWithoutProperties(_ref, ['value', 'onItemOver', 'onItemClick', 'renderSuggestions', 'selectedSuggestion', 'data', 'id']);

	var onOver = function onOver(index) {
		onItemOver(index);
	};

	var onClick = function onClick(value) {
		onItemClick(value);
	};

	var markSuggestion = function markSuggestion(input, query) {
		var escapedRegex = query.trim().replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

		return {
			__html: input.replace(new RegExp(escapedRegex, 'gi'), '<mark>$&</mark>')
		};
	};

	var items = renderSuggestions ? data.map(function (item, i) {
		itemProps.className = selectedSuggestion === i ? 'active' : '';
		itemProps.onMouseOver = onOver.bind(undefined, i);
		itemProps.onMouseDown = onClick.bind(undefined, item);

		return _react2.default.createElement(_Suggestion2.default, _extends({
			key: i,
			dangerouslySetInnerHTML: markSuggestion(item, value)
		}, itemProps));
	}) : null;

	return _react2.default.createElement(
		'ul',
		{
			id: id,
			role: 'listbox' },
		items
	);
};

exports.default = SuggestionList;


SuggestionList.propTypes = {
	onItemOver: _react2.default.PropTypes.func.isRequired,
	onItemClick: _react2.default.PropTypes.func.isRequired,
	selectedSuggestion: _react2.default.PropTypes.number.isRequired,
	id: _react2.default.PropTypes.string.isRequired,
	renderSuggestions: _react2.default.PropTypes.bool.isRequired
};