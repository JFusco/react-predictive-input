# react-predictive-input

[![Build Status][build-image]][build-url]

[![peerDependency Status][peer-dep-image]][peer-dep-url]
[![devDependency Status][dev-dep-image]][dev-dep-url]

[![MIT][mit-image]][mit-url]
![npm][npm-version-image]

> WAI-ARIA compliant React autocomplete component

## Demo ##
https://jfusco.github.io/react-predictive-input

## Getting Started ##

#### Installation
From the root of your project.
```sh
npm install react-predictive-input --save
```

## Usage
Implementation of autocomplete. See [available options](#options) below.
```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import Autocomplete from 'react-predictive-input';

class Application extends Component{
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
				 placeholder="Search a type of fruit"
				 data={this.props.fruit}
				 onSelected={this.onItemSelected.bind(this)} />
			</div>
		);
	}
}

render(<Application />, document.getElementById('application'));
```

<a name="options"></a>
#### Options
* **[`id`](#id)**
* **[`placeholder`](#placeholder)**
* **[`data`](#data)**
* **[`value`](#value)**
* **[`fuzzy`](#fuzzy)**
* **[`clearValueOnSelect`](#clearValueOnSelect)**
* **[`caseSensitive`](#caseSensitive)**
* **[`onChange`](#onChange)**
* **[`onSelected`](#onSelected)**

<a name="id"></a>
##### id ~ required
The unique `id` of the component - used for setting up accessibility
```js
<Autocomplete id="fruit" />
```

<a name="placeholder"></a>
##### placeholder ~ optional ~ default `null`
A `string` used as placeholder text in the tags input field
```js
<Autocomplete placeholder="Search a type of fruit" />
```

<a name="data"></a>
##### data ~ optional ~ default `[]`
An `array` of strings to be used as suggestions
```js
<Autocomplete data={['apples', 'bananas']} />
```

<a name="value"></a>
##### value ~ optional ~ default `''`
A `string` to set the value of the input field
```js
<Autocomplete value="apples" />
```

<a name="fuzzy"></a>
##### fuzzy ~ optional ~ default `true`
A `boolean` that enables fuzzy search
```js
<Autocomplete fuzzy={true} />
```

<a name="clearValueOnSelect"></a>
##### clearValueOnSelect ~ optional
A `boolean` that allows the item to be cleared out of the input field upon selection
```js
<Autocomplete clearValueOnSelect={true} />
```

<a name="caseSensitive"></a>
##### caseSensitive ~ optional ~ default `false`
An `boolean` that allows for case sensitive search
```js
<Auocomplete caseSensitive={false} />
```

<a name="onChange"></a>
##### onChange ~ optional
A `method` fired when user changes the input value
```js
onInputChange(value) {
	console.log(`${value} is the value`);
}

<Auocomplete onChange={this.onInputChange.bind(this)} />
```

<a name="onSelected"></a>
##### onSelected ~ optional
A `method` fired when user changes the input value
```js
onItemSelected(value) {
	console.log(`${value} is the selected item`);
}

<Auocomplete onSelected={this.onItemSelected.bind(this)} />
```

## Styling
#### Installation
Import the main SCSS file in to your application SCSS files
```scss
@import "node_modules/react-predictive-input/src/component/scss/styles.scss";
```

There are a few variables set to `!default` that can be overriden. If you need to change it more just override the actual styles.

**Any overriden variables needs to go above the `@import` statement to take effect**
```scss
//-- Global UI
$ac-base-width
$ac-base-border-radius
$ac-base-font-family

//-- Input field
$ac-input-height
$ac-input-width
$ac-input-font-size
$ac-input-border
$ac-input-font-color
$ac-input-background-color
$ac-input-border-radius
$ac-input-padding
$ac-input-placeholder-color
$ac-input-border-focus-color
$ac-input-font-family
$ac-input-typeahead-font-color

//-- Suggestion list
$ac-slist-border-radius
$ac-slist-background-color

//-- Suggestion
$ac-s-mark-font-color
$ac-s-mark-background
$ac-s-mark-font-weight
$ac-s-active-background-color
$ac-s-active-font-color
$ac-s-font-color
$ac-s-font-size
$ac-s-background-color
$ac-s-font-family
$ac-s-border
$ac-s-padding
```

If you don't care to override variables and just want to override actual styles you may choose to import the minified compiled version of the css instead
```scss
@import "node_modules/react-predictive-input/dist/styles.css";
```

## Tests ##
```
npm test
```

[build-image]: https://travis-ci.org/JFusco/react-predictive-input.svg?branch=master
[build-url]: https://travis-ci.org/JFusco/react-predictive-input
[mit-image]: https://img.shields.io/npm/l/react-predictive-input.svg?style=flat-square
[mit-url]: https://github.com/JFusco/react-predictive-input/blob/master/LICENSE
[npm-version-image]: https://img.shields.io/npm/v/npm.svg?maxAge=2592000
[dev-dep-image]: https://david-dm.org/JFusco/react-predictive-input/dev-status.svg
[dev-dep-url]: https://david-dm.org/JFusco/react-predictive-input?type=dev
[peer-dep-image]: https://david-dm.org/JFusco/react-predictive-input/peer-status.svg
[peer-dep-url]: https://david-dm.org/JFusco/react-predictive-input?type=peer
