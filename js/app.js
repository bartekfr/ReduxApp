import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import thunkMiddleware from 'redux-thunk'

//Components
import App from './containers/App';
import Videos from './containers/VideosList';
import Add from './containers/AddVideo';
import Edit from './containers/EditVideo';

import css from "../sass/main.scss";

//import foundation components
import 'foundation-sites/js/foundation.core.js';
import 'foundation-sites/js/foundation.util.mediaQuery.js';
import 'foundation-sites/js/foundation.util.triggers.js';
import 'foundation-sites/js/foundation.util.motion.js';
import 'foundation-sites/js/foundation.offcanvas.js';


const store = createStore(
	reducers,
	{},
	applyMiddleware(thunkMiddleware)
);

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Videos} />
				<Route path="add" component={Add} />
				<Route path="edit/:id" component={Edit} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

$(document).foundation();
