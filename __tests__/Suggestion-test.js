'use strict';

jest.disableAutomock();

import React from 'react';
import { findDOMNode } from 'react-dom';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
import Suggestion from '../src/component/js/Suggestion';

describe('Suggestion', () => {
	it('should render', () => {
		const renderer = createRenderer();
		const onMouseOver = jest.genMockFunction();
		const onMouseDown = jest.genMockFunction();

		renderer.render(
			<Suggestion
				className=""
				onMouseOver={onMouseOver}
				onMouseDown={onMouseDown} />
		);

		const suggestion = renderer.getRenderOutput();

		expect(suggestion.type).toBe('li');
		expect(suggestion.props.role).toBe('option');
	});
});
