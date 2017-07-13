import React from 'react';
import CategoryVideos from '../../js/components/CategoryVideos';
import { shallow } from 'enzyme';
import { List, Map } from 'immutable';

jest.mock('../../js/containers/VideosList');

describe('CategoryVideos component', function() {
	let component, props;

	beforeEach(function() {
		let categories = [{id: 1, name:'document'}, {id: 2, name: 'comedy'}];
		component = shallow(<CategoryVideos categoryVideos={{}} categories={categories} />);
		console.log(component.html());
	});

	it('renders correctly', function() {
		expect(component.find('.category').length).toBe(3);
	});

});