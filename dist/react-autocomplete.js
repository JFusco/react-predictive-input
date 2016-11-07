(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Autocomplete"] = factory(require("react"));
	else
		root["Autocomplete"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SuggestionList = __webpack_require__(2);
	
	var _SuggestionList2 = _interopRequireDefault(_SuggestionList);
	
	__webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Autocomplete = function (_Component) {
		_inherits(Autocomplete, _Component);
	
		function Autocomplete(props) {
			_classCallCheck(this, Autocomplete);
	
			var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));
	
			_this.state = {
				value: _this.props.value,
				data: _this.props.data,
				selectedSuggestion: -1
			};
			return _this;
		}
	
		_createClass(Autocomplete, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var value = this.props.value;
	
	
				if (value !== '') {
					this.setState({
						value: value,
						data: []
					});
				}
			}
		}, {
			key: 'filteredSuggestions',
			value: function filteredSuggestions(value) {
				var _props = this.props,
				    fuzzy = _props.fuzzy,
				    caseSensitive = _props.caseSensitive;
	
				var searchValue = !caseSensitive ? value.toLowerCase() : value;
	
				return this.props.data.filter(function (item) {
					var searchItem = !caseSensitive ? item.toLowerCase() : item;
	
					if (fuzzy) {
						return searchItem.indexOf(searchValue) !== -1;
					}
	
					return searchItem.indexOf(searchValue) === 0;
				});
			}
		}, {
			key: 'selectSuggestion',
			value: function selectSuggestion(value) {
				var _props2 = this.props,
				    selectedSuggestion = _props2.selectedSuggestion,
				    clearValueOnSelect = _props2.clearValueOnSelect,
				    onSelected = _props2.onSelected;
	
	
				var state = {
					value: ''
				};
	
				if (selectedSuggestion >= 0) {
					state.selectedSuggestion = -1;
				}
	
				if (!clearValueOnSelect) {
					state.value = value;
					state.data = [];
				}
	
				this.setState(state, function () {
					if (typeof onSelected !== 'undefined') {
						onSelected(value);
					}
				});
			}
		}, {
			key: 'moveSelectedUp',
			value: function moveSelectedUp() {
				var _this2 = this;
	
				var _state = this.state,
				    selectedSuggestion = _state.selectedSuggestion,
				    data = _state.data;
	
	
				this.setState({
					selectedSuggestion: selectedSuggestion - 1
				}, function () {
					if (selectedSuggestion <= 0) {
						_this2.setState({
							selectedSuggestion: data.length - 1
						});
					}
				});
			}
		}, {
			key: 'moveSelectedDown',
			value: function moveSelectedDown() {
				var _state2 = this.state,
				    selectedSuggestion = _state2.selectedSuggestion,
				    data = _state2.data;
	
	
				this.setState({
					selectedSuggestion: (selectedSuggestion + 1) % data.length
				});
			}
		}, {
			key: 'onInputKey',
			value: function onInputKey(e) {
				if (this.state.value === '') return;
	
				switch (e.keyCode) {
					case Autocomplete.KEYS.up:
						e.preventDefault();
	
						this.moveSelectedUp();
						break;
	
					case Autocomplete.KEYS.down:
						e.preventDefault();
	
						this.moveSelectedDown();
						break;
	
					case Autocomplete.KEYS.right:
						if (!this.willRenderTypeahead()) return;
	
						this.selectSuggestion(this.state.data[0]);
						break;
	
					case Autocomplete.KEYS.enter:
						if (this.state.selectedSuggestion === -1) return;
	
						this.selectSuggestion(this.state.data[this.state.selectedSuggestion]);
						break;
				}
			}
		}, {
			key: 'onChange',
			value: function onChange(e) {
				var _this3 = this;
	
				var value = e.target.value;
	
				var state = {
					value: value,
					data: this.filteredSuggestions(value)
				};
	
				if (value === '' && this.state.selectedSuggestion >= 0) {
					state.selectedSuggestion = -1;
				}
	
				this.setState(state, function () {
					if (typeof _this3.props.onChange !== 'undefined') {
						_this3.props.onChange(value);
					}
				});
			}
		}, {
			key: 'onItemOver',
			value: function onItemOver(index) {
				this.setState({
					selectedSuggestion: index
				});
			}
		}, {
			key: 'onItemClick',
			value: function onItemClick(value) {
				this.selectSuggestion(value);
			}
		}, {
			key: 'onInputBlur',
			value: function onInputBlur() {
				if (this.state.value !== '' && this.state.data.length > 0) {
					this.setState({
						data: [],
						selectedSuggestion: -1
					});
				}
			}
		}, {
			key: 'willRenderTypeahead',
			value: function willRenderTypeahead() {
				return !this.props.fuzzy && this.props.caseSensitive;
			}
		}, {
			key: 'render',
			value: function render() {
				var _props3 = this.props,
				    id = _props3.id,
				    placeholder = _props3.placeholder;
				var _state3 = this.state,
				    value = _state3.value,
				    data = _state3.data;
	
	
				var expanded = value !== '' && data.length > 0;
				var listID = 'list-' + id;
	
				var typeahead = expanded && this.willRenderTypeahead() ? _react2.default.createElement('input', {
					disabled: true,
					'aria-disabled': 'true',
					value: data[0] }) : null;
	
				return _react2.default.createElement(
					'div',
					{
						role: 'search', className: 'react-autocomplete',
						id: id },
					_react2.default.createElement('input', {
						role: 'textbox',
						type: 'text',
						className: this.willRenderTypeahead() ? 'typeahead' : null,
						'aria-label': placeholder,
						'aria-owns': listID,
						'aria-expanded': expanded,
						'aria-haspopup': 'true',
						'aria-autocomplete': 'list',
						placeholder: placeholder,
						autoComplete: 'off',
						value: value,
						onBlur: this.onInputBlur.bind(this),
						onKeyDown: this.onInputKey.bind(this),
						onChange: this.onChange.bind(this) }),
					typeahead,
					_react2.default.createElement(_SuggestionList2.default, _extends({
						onItemOver: this.onItemOver.bind(this),
						onItemClick: this.onItemClick.bind(this),
						renderSuggestions: expanded,
						id: listID
					}, this.state))
				);
			}
		}]);
	
		return Autocomplete;
	}(_react.Component);
	
	Autocomplete.KEYS = {
		enter: 13,
		up: 38,
		down: 40,
		right: 39
	};
	Autocomplete.propTypes = {
		data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])),
		value: _react2.default.PropTypes.string,
		fuzzy: _react2.default.PropTypes.bool,
		placeholder: _react2.default.PropTypes.string,
		clearValueOnSelect: _react2.default.PropTypes.bool,
		caseSensitive: _react2.default.PropTypes.bool,
		id: _react2.default.PropTypes.string.isRequired,
		onChange: _react2.default.PropTypes.func,
		onSelected: _react2.default.PropTypes.func
	};
	Autocomplete.defaultProps = {
		data: [],
		value: '',
		fuzzy: true,
		placeholder: 'Search',
		clearValueOnSelect: false,
		caseSensitive: false
	};
	exports.default = Autocomplete;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Suggestion = __webpack_require__(3);
	
	var _Suggestion2 = _interopRequireDefault(_Suggestion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var SuggestionList = function SuggestionList(_ref) {
		var value = _ref.value,
		    onItemOver = _ref.onItemOver,
		    onItemClick = _ref.onItemClick,
		    renderSuggestions = _ref.renderSuggestions,
		    selectedSuggestion = _ref.selectedSuggestion,
		    data = _ref.data,
		    id = _ref.id,
		    itemProps = _objectWithoutProperties(_ref, ['value', 'onItemOver', 'onItemClick', 'renderSuggestions', 'selectedSuggestion', 'data', 'id']);
	
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Suggestion = function Suggestion(props) {
		return _react2.default.createElement('li', _extends({
			role: 'option'
		}, props));
	};
	
	exports.default = Suggestion;
	
	
	Suggestion.propTypes = {
		onMouseOver: _react2.default.PropTypes.func.isRequired,
		onMouseDown: _react2.default.PropTypes.func.isRequired,
		className: _react2.default.PropTypes.string.isRequired
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-autocomplete.js.map