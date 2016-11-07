'use strict';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Autocomplete from './js/Autocomplete';

class App extends Component {
	static defaultProps = {
		fruit: ['bananas', 'strawberries', 'blueberries', 'pineapples', 'apples', 'tomatos', 'mangos', 'oranges', 'grapes', 'Rasberries', 'Blackberries', 'starfruit']
	};

	static propTypes = {
		fruit: PropTypes.arrayOf(PropTypes.string)
	};

	constructor(props){
		super(props);
	}

	onItemSelected(value){
		console.log(`${value} was selected`);
	}

	render(){
		return (
			<div>
				<Autocomplete
					id="fruit"
					placeholder="Search for a type of fruit"
					fuzzy={false}
					caseSensitive={true}
					data={this.props.fruit}
					onSelected={::this.onItemSelected} />
			</div>
		);
	}
}

render(<App />, document.getElementById('application'));
