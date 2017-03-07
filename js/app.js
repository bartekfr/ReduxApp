import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import reducers from './reducers';

import css from "../sass/main.scss";

//import foundation components;
import { foundation } from 'foundation-sites/js/foundation.core';
import 'foundation-sites/js/foundation.util.mediaQuery';
import 'foundation-sites/js/foundation.util.triggers';
import 'foundation-sites/js/foundation.util.motion';
import 'foundation-sites/js/foundation.offcanvas';

import routes from './components/Routes';
import store from './store';

import { AppContainer } from 'react-hot-loader';

const renderApp = () => {
	render(
		<AppContainer>
			<Provider store={store}>
				{routes}
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

renderApp(routes);

$.fn.foundation = foundation;
$(document).foundation();

// Hot Module Replacement API
if (module.hot) {
	/**
	* Warning from React Router, caused by react-hot-loader.
	* The warning can be safely ignored, so filter it from the console.
	* Otherwise you'll see it every time something changes.
	* See https://github.com/gaearon/react-hot-loader/issues/298
	*/
	const orgError = console.error;
	console.error = (...args) => {
		if (args && args[0] && typeof args[0] === 'string' &&
			args[0].indexOf('You cannot change <Router routes>;') > -1) {
			// React route changed
		} else {
			// Log the error as normal
			orgError.apply(console, args);
		}
	};

	module.hot.accept('./components/Routes', () => {
		renderApp(routes);
	});
}
