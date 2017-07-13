import React from 'react';
import { ReactDOM } from 'react-dom';
import Pagination from '../../js/components/Pagination';
import { shallow, mount, render } from 'enzyme';

describe('Pagination', function() {
	let component, props;

	beforeEach(function() {
		component = shallow(<Pagination videosSize={10} urlPrefix="browse" />, {
			context: {
				CONFIG: {
					perPage: 5
				}
			}
		});
	});

	it('renders correctly', function() {
		expect(component.hasClass('pagination-wrapper')).toBe(true);
		expect(component.find('li').length).toBe(2);
	});

});