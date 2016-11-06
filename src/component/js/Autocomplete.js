'use strict';

import React, { Component } from 'react';
import SuggestionList from './SuggestionList';

import '../scss/styles.scss';

class Autocomplete extends Component {
	static KEYS = {
		enter: 13,
		up: 38,
		down: 40,
		right: 39
	};

	static propTypes = {
		data: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.object
		])),
		value: React.PropTypes.string,
		fuzzy: React.PropTypes.bool,
		placeholder: React.PropTypes.string,
		clearValueOnSelect: React.PropTypes.bool,
		caseSensitive: React.PropTypes.bool,
		id: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func,
		onSelected: React.PropTypes.func
	};

	static defaultProps = {
		data: [],
		value: '',
		fuzzy: true,
		placeholder: 'Search',
		clearValueOnSelect: false,
		caseSensitive: false
	};

	state = {
		value: this.props.value,
		data: this.props.data,
		selectedSuggestion: -1
	};

	constructor(props){
		super(props);
	}

	componentWillMount(){
		const { value } = this.props;

		if (value !== ''){
			this.setState({
				value,
				data: []
			});
		}
	}

	filteredSuggestions(value){
		const { fuzzy, caseSensitive } = this.props;
		const searchValue = !caseSensitive ? value.toLowerCase() : value;

		return this.props.data.filter(item => {
			const searchItem = !caseSensitive ? item.toLowerCase() : item;

			if (fuzzy){
				return searchItem.indexOf(searchValue) !== -1;
			}

			return searchItem.indexOf(searchValue) === 0;
		});
	}

	selectSuggestion(value){
		const { selectedSuggestion, clearValueOnSelect, onSelected } = this.props;

		const state = {
			value: ''
		};

		if (selectedSuggestion >= 0){
			state.selectedSuggestion = -1;
		}

		if (!clearValueOnSelect){
			state.value = value;
			state.data = [];
		}

		this.setState(state, () => {
			if (typeof onSelected !== 'undefined'){
				onSelected(value);
			}
		});
	}

	moveSelectedUp(){
		const { selectedSuggestion, data } = this.state;

		this.setState({
			selectedSuggestion: selectedSuggestion - 1
		}, () => {
			if (selectedSuggestion <= 0){
				this.setState({
					selectedSuggestion: data.length - 1
				});
			}
		});
	}

	moveSelectedDown(){
		const { selectedSuggestion, data } = this.state;

		this.setState({
			selectedSuggestion: (selectedSuggestion + 1) % data.length
		});
	}

	onInputKey(e){
		if (this.state.value === '') return;

		switch (e.keyCode){
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

				e.preventDefault();

				this.selectSuggestion(this.state.data[0]);
				break;

			case Autocomplete.KEYS.enter:
				if (this.state.selectedSuggestion === -1) return;

				this.selectSuggestion(this.state.data[this.state.selectedSuggestion]);
				break;
		}
	}

	onChange(e) {
		const value = e.target.value;

		const state = {
			value,
			data: this.filteredSuggestions(value)
		};

		if (value === '' && this.state.selectedSuggestion >= 0){
			state.selectedSuggestion = -1;
		}

		this.setState(state, () => {
			if (typeof this.props.onChange !== 'undefined'){
				this.props.onChange(value);
			}
		});
	}

	onItemOver(index){
		this.setState({
			selectedSuggestion: index
		});
	}

	onItemClick(value){
		this.selectSuggestion(value);
	}

	onInputBlur(){
		if (this.state.value !== '' && this.state.data.length > 0) {
			this.setState({
				data: [],
				selectedSuggestion: -1
			});
		}
	}

	willRenderTypeahead(){
		return !this.props.fuzzy && this.props.caseSensitive;
	}

	render(){
		const { id, placeholder } = this.props;
		const { value, data } = this.state;

		const expanded = (value !== '' && data.length > 0);
		const listID = `list-${id}`;

		const typeahead = (expanded && this.willRenderTypeahead()) ? (
			<input
				disabled
				aria-disabled="true"
				value={data[0]} />
		) : null;

		return (
			<div
				role="search" className="react-autocomplete"
				id={id}>

				<input
					role="textbox"
					type="text"
					className={this.willRenderTypeahead() ? 'typeahead' : null}
					aria-label={placeholder}
					aria-owns={listID}
					aria-expanded={expanded}
					aria-haspopup="true"
					aria-autocomplete="list"
					placeholder={placeholder}
					autoComplete="off"
					value={value}
					onBlur={this.onInputBlur.bind(this)}
					onKeyDown={this.onInputKey.bind(this)}
					onChange={this.onChange.bind(this)} />

				{typeahead}

				<SuggestionList
					onItemOver={this.onItemOver.bind(this)}
					onItemClick={this.onItemClick.bind(this)}
					renderSuggestions={expanded}
					id={listID}
					{ ...this.state } />
			</div>
		);
	}
}

export default Autocomplete;
