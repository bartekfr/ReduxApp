import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

//Components
import App from './containers/App';
import CategoryVideos from './containers/CategoryVideos';
import Add from './containers/AddVideo';
import Edit from './containers/EditVideo';
import css from "../sass/main.scss";

//import foundation components;
import { foundation } from 'foundation-sites/js/foundation.core';
import 'foundation-sites/js/foundation.util.mediaQuery';
import 'foundation-sites/js/foundation.util.triggers';
import 'foundation-sites/js/foundation.util.motion';
import 'foundation-sites/js/foundation.offcanvas';

import store from './store';

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={CategoryVideos}  />
				<Route path="/browse/:category" component={CategoryVideos} >
					<Route path=":page" component={CategoryVideos} />
				</Route>
				<Route path="add" component={Add} />
				<Route path="edit/:id" component={Edit} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

$.fn.foundation = foundation;
$(document).foundation();
