'use strict';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Autocomplete from '../component/js/Autocomplete';

class App extends Component {
  state = {
    value: ''
  };

  static defaultProps = {
    fruit: ['bananas', 'strawberries', 'blueberries', 'pineapples', 'apples', 'tomatos', 'mangos', 'oranges', 'grapes', 'Rasberries', 'Blackberries', 'starfruit']
  };

  static propTypes = {
    fruit: PropTypes.arrayOf(PropTypes.string)
  };

  constructor(props){
    super(props);
  }

  onSelected(value){
    this.setState({
      value
    });
  }

  render () {
    return (
      <div className="container">
        <h1>react-predictive-input</h1>
        <p>Below are a few implementations of the component, for more options and events please see the <a href="https://github.com/JFusco/react-predictive-input/blob/master/README.md#options">README</a> file documentation</p>

        <h2>Tests</h2>
        <p>View coverage report <a href="https://jfusco.github.io/react-predictive-input/coverage/lcov-report/index.html">here</a></p>

        <div className="example">
          <h2>Default predictive search</h2>
          <p>An "id" is required so we can set up roles and ARIA attributes.</p>

          {/* Component */}
          <div className="example__component-wrapper">
            <Autocomplete
              id="fruit"
              data={this.props.fruit} />
          </div>

          <pre>
						{`<Autocomplete
	id="fruit"
	data={this.props.fruit} />`}
					</pre>
        </div>

        <div className="example">
          <h2>Case sensitive search</h2>
          <p>By default the case sensitive is turned off, you have the option to turn this on! Try typing "B".</p>

          {/* Component */}
          <div className="example__component-wrapper">
            <Autocomplete
              id="fruit"
              caseSensitive={true}
              data={this.props.fruit} />
          </div>

          <pre>
						{`<Autocomplete
	id="fruit"
	caseSensitive={true}
	data={this.props.fruit} />`}
					</pre>
        </div>

        <div className="example">
          <h2>Non-fuzzy predictive search</h2>
          <p>By default the predictive search will be a fuzzy search, you have the option to turn this off. Once you do this, you can start to see the search auto complete your result. For instance, try to type in the field, "Black" - Blackberries will auto fill for you. Additionally, you can press the "right arrow" to fill the field with your auto complete result.</p>

          {/* Component */}
          <div className="example__component-wrapper">
            <Autocomplete
              id="fruit"
              fuzzy={false}
              caseSensitive={true}
              data={this.props.fruit} />
          </div>

          <pre>
						{`<Autocomplete
	id="fruit"
	fuzzy={false}
	caseSensitive={true}
	data={this.props.fruit} />`}
					</pre>
        </div>

        <div className="example">
          <h2>Default value</h2>
          <p>Ability to set a default value to the predictive search field.</p>

          {/* Component */}
          <div className="example__component-wrapper">
            <Autocomplete
              id="fruit"
              value="bananas"
              data={this.props.fruit} />
          </div>

          <pre>
						{`<Autocomplete
	id="fruit"
	value="bananas"
	data={this.props.fruit} />`}
					</pre>
        </div>

        <div className="example">
          <h2>On selected event</h2>
          <p>When selecting a valid value, it will fire a selected event passing you the value.</p>

          {/* Component */}
          <div className="example__component-wrapper">
            <Autocomplete
              id="fruit"
              onSelected={::this.onSelected}
              data={this.props.fruit} />
          </div>

          <pre>
						{`<Autocomplete
	id="fruit"
	onSelected={this.onSelected.bind(this)}
	data={this.props.fruit} />

value: ${this.state.value}`}
					</pre>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('application'));
